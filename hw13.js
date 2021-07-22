// 1) Создайте функцию createBuffer(), которая создает 
// локальную переменную text в виде пустой строки и 
// возвращает функцию buffer, с которой можно работать 
// следующим образом:

// Если в функцию buffer был передан строковый параметр – 
// этот параметр записывается в переменную text. 
// Иначе выведите ошибку в консоль.
// Если функция buffer вызывается без параметров – 
// возвращается значение переменной text.
// Создайте переменную и запишите в нее результат 
// выполнения функции createBuffer().

// Продемонстрируйте работу возвращаемой функции buffer 
// с параметром и без.

function createBuffer() {
    let text = '';
    return function(value) {
        if(typeof value == 'string') {
            text += value;
        } else if (!value) {
            return text;
        } else {
            console.warn('Error');
        }
    }
}

let buffer = createBuffer();
buffer("A");
buffer("XYZ");
console.log(buffer()); // AXYZ

// 2) Создайте функцию signUp(), которая принимает 
// параметры userName, password и возвращает объект 
// со свойством userName и методом signIn().

// Метод signIn() принимает параметр newPassword и сравнивает
//  его значение со значением password.

// Если пароли совпадают – метод возвращает сообщение 
// 'Sign in success for ${userName}' , иначе – 
// 'Password is incorrect' .

// Создайте переменную user и запишите в нее результат 
// вызова функции signUp().

// Результат работы функции выведите в консоль.

function signUp(userName, password) {
    let obj = {
        name: userName,
        signIn(newPassword) {
            if (newPassword == password) {
                return `Sign in success for ${userName}`
            } else {
                return 'Password is incorrect'
            }
        }
    }

    return obj;
}

let user = signUp("billy", "qwerty");
console.log(user.signIn("a")); // Password is incorrect
console.log(user.signIn("qwerty")); // Sign in success for billy