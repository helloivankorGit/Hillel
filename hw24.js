// 1) Создайте Promise, которое должно выполнять следующие 
// действия:

// через 2 секунды он должен создать переменную number со 
// случайным значением от 1 до 6;
// если 1 <= number <= 5, вывести в консоли сообщение 
// "Start the game..." и вернуть число;
// если number = 6, вернуть ошибку;
// Затем должна быть запущена функция-потребитель (than()),
//  которая выполняет следующие

// действия:
// если number = 1, вывести сообщение "Stay here" ;
// если number >= 2, вывести сообщение "Go <number> steps" .
// Используйте catch(), чтобы отловить ошибку и выведите 
// сообщение "Exit" .

let promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        let number = Math.floor(Math.random() * 6) + 1;
        if(1 <= number && number <= 5) {
            console.log('Start the game ...');
            resolve(number);
        }
        if(number = 6) {
            reject('Exit');
        }
    }, 2000)
});

promise
    .then((data) => {
        if(data === 1) {
            console.log('Stay here');
        }
        if(data >= 2) {
            console.log(`Go ${data} steps`)
        }
    })
    .catch((error) => {
        console.error(error);
    });