import http from 'http'; 
import fs from 'fs'; 
import path from 'path'; 
 
const SERVER_PATH = path.dirname(process.argv[1]); 
const HOMEWORKS = JSON.parse(fs.readFileSync(path.join(SERVER_PATH, 'static', 'homework.json'), 'utf-8')); 
const PORT = 5000;
 
const SERVER = http.createServer((req, res) => { 
    if (req.url.indexOf('homework') != -1) {
        res.write(` 
        <!DOCTYPE html> 
            <html lang="en"> 
            <head> 
                <meta charset="UTF-8"> 
                <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                <title>Homework 29</title>
                <link rel="stylesheet" href="/css/style.css">
            </head> 
            <body> 
            <div class="container">
                <ol class="homework-list"> 
        `); 
        HOMEWORKS.forEach(homework => { 
            res.write(`<li class="homework-item"><a class="homework-link" href=/homework/${homework._id}>${homework.title}</a></li>`);
        }); 
        
        res.write(` 
                </ol> 
        `); 

        HOMEWORKS.forEach(homework => {
            if (req.url.split("/")[2] === homework._id) {
                res.write(`
                    <div class="homework">
                    <div class="homework-name">ДЗ ${homework.number}. ${homework.title}</div>
                    <div class="title">Author: ${homework.author.first_name} ${homework.author.last_name}</div>
                        ${homework.description}
                    </div>
                `);
            }
        });

        res.write(` 
                    </div> 
                </div>
            </body> 
        </html> 
        `); 

        res.end(); 
    } else { 
        const INDEX_PATH = path.join(SERVER_PATH, 'static', req.url);
 
        fs.readFile(INDEX_PATH, (err, htmlContent) => { 
            if (err) { 
                res.statusCode = 400; 
                res.end(); 
            } 
            res.end(htmlContent); 
        }); 
    } 
}); 
 
SERVER.listen(PORT, () => { 
    console.log('Server is running ' + PORT); 
});