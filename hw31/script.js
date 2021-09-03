// 1) Создать функцию, которая при каждом вызове будет 
// показывать разницу в секундах между временем, когда ее 
// вызывали последний раз и теперешним.

// Если вызываем первый раз, то возвращаем строку 'Enabled'
// и сохраняем время вызова функции. Последующий вызов функции
//  вернет строку вида '2 seconds have passed'

// Запрещается использовать глобальные переменные как хранилище значений.

function startCount() {
    let startTime;

    return function() {
        if (startTime) {
            newTime = new Date().getTime();
            difference = parseInt((newTime - startTime) / 1000);
            console.log(`${difference} seconds have passed`);
        } else {
            console.log('Enabled');
        }
        startTime = new Date().getTime();
    }
}

// разницу в секундах между последним вызовом и теперешним. А у тебя разница в секундах от первого старта

let getTime = startCount();
getTime();
setTimeout(() => getTime(), 2000);
setTimeout(() => getTime(), 5000);
setTimeout(() => getTime(), 10000);
setTimeout(() => getTime(), 60000);

// 2) Создать таймер обратного отсчета, который будет в console выводить время в 
// формате MM:SS. Где MM - количество минут, SS - количество секунд. 
// При этом когда закончится время, нужно вывести в console строку "Timer End".

function timer(duration) {
    let timer = duration, minutes, seconds;
    console.group('Timer Start!');
    let startTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        console.log(minutes + ':' + seconds);
        
        if (--timer === 0) {
            clearInterval(startTimer);
            console.warn('Timer End');
            console.groupEnd();
        }
        
    }, 1000);
}

timer(120);
