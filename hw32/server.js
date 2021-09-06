import http from 'http';
import fs, {
	readFileSync
} from 'fs';
import path from 'path';
import Mustache from 'mustache';
import queryString from 'query-string';
import util from 'util';

const serverPath = path.dirname(process.argv[1]);
const PORT = 5001;

const pathTohomeworkJSON = path.join(serverPath, 'template', 'homework.json');
const homeworksTemplatePath = path.join(serverPath, 'template', 'homeworks.html');
const edithomeworksTemplatePath = path.join(serverPath, 'template', 'edit-homework.html');
const homeworkCreatePath = path.join(serverPath, 'template', 'create-homework.html');
const homeworkDetailsPath = path.join(serverPath, 'template', 'homework-details.html');
const homeworks = JSON.parse(fs.readFileSync(pathTohomeworkJSON, 'utf8'));

homeworks.forEach(hw => {
	delete hw.hw_type;
	delete hw.createdAt;
});

function id() {
	let id = 0;
	return function() {
		return ++id;
	}
}

let hometaskID = id();

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const server = http.createServer(async (req, res) => {
	const homeworkID = req.url.split('/')[2];
	const homework = homeworks.find(hw => hw._id === homeworkID);
	const homeworkIndex = homeworks.findIndex(hw => hw._id === homeworkID);

	if (/^\/homework\/?$/.test(req.url)) {
		let template = await readFilePromise(homeworksTemplatePath, 'utf-8');
		const output = Mustache.render(template, {
			homeworks
		});
		res.end(output);
	} else if (/^\/create-homework\/?$/.test(req.url)) {
		if (req.method === 'POST') {
			let data = '';
			console.log('Fetching data...');
			req.on('data', (chunks) => {
				console.log('Get data');
				data += chunks;
			})
			req.on('end', () => {
				console.log('Finished');
				const parsed = queryString.parse(data);
				parsed._id = 'fsdf234234e' + hometaskID();
				homeworks.unshift(parsed);
				fs.writeFile(pathTohomeworkJSON, JSON.stringify(homeworks), 'utf-8', (err) => {
					if (err) {
						res.statusCode = 400;
						res.end();
					}
					res.writeHead(302, {
						'Location': '/homework'
					});
					res.end();
				});

			});
		} else {
			let template = await readFilePromise(homeworkCreatePath, 'utf-8');
			const output = Mustache.render(template, {
				author: {
					first_name: 'Name',
					last_name: 'Lastname'
				},
				title: '',
				description: '',
			});
			res.end(output);
		}
	} else if (req.url.startsWith('/delete-homework') && homeworkID) {
		if (req.method === 'GET') {
			homeworks.splice(homeworkIndex, 1);
			fs.writeFile(pathTohomeworkJSON, JSON.stringify(homeworks), 'utf-8', (err) => {
				if (err) {
					res.statusCode = 400;
					res.end();
				}
				res.writeHead(302, {
					'Location': '/homework'
				});
				res.end();
			});
		}
	} else if (req.url.startsWith('/homework-details') && homeworkID) {
		let template = await readFilePromise(homeworkDetailsPath, 'utf-8');
		const output = Mustache.render(template, {
			author: `${homework.author.first_name} ${homework.author.last_name}`,
			title: homework.title,
			description: homework.description,
		});
		res.end(output);
	} else if (req.url.includes('.html') || req.url.includes('.css')) {
		try {
			const indexPath = path.join(serverPath, 'template', req.url);
			const fileContent = await readFilePromise(indexPath);
			res.end(fileContent);
		} catch (err) {
			res.statusCode = 400;
			res.end(err);
		}
	} else if (req.url.startsWith('/edit-homework') && homeworkID) {
		if (req.method === 'POST') {
			let data = '';
			console.log('Fetching data...')
			req.on('data', (chunk) => {
				console.log('Get data')
				data += chunk;
			});
			req.on('end', () => {
				console.log('Finished');
				const parsed = queryString.parse(data);
				console.log(parsed);

				homework.title = parsed.title

				fs.writeFile(pathTohomeworkJSON, JSON.stringify(homeworks), 'utf-8', (err) => {
					if (err) {
						res.statusCode = 400;
						res.end();
					}

					fs.readFile(edithomeworksTemplatePath, 'utf-8', (err, template) => {
						if (err) {
							res.statusCode = 400;
							res.end();
						} else {
							const output = Mustache.render(template, {
								title: homework.title,
								_id: homework._id,
							});
							res.end(output);
						}
					});
				});
			});
		} else {
			fs.readFile(edithomeworksTemplatePath, 'utf-8', (err, template) => {
				if (err) {
					res.statusCode = 400;
					res.end();
				} else {
					const output = Mustache.render(template, {
						title: homework.title,
						_id: homework._id
					});
					res.end(output);
				}
			});
		}
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(PORT, () => {
	console.log('server is running ' + PORT);
});