// 1) Создайте объект vegetable, с такими свойствами, чтобы 
// cледующий код вернул "onions are usually white".

let vegetable = {
  Name: 'onion',
  color: 'white',
  shape: 'round'
};

const { Name, color } = vegetable;
console.log(`${Name}s are usually ${color}`);

// 2) Добавьте свойства в объект vegetable так, чтобы в консоль 
// вывелось "onions are usually round".

const { shape } = vegetable;
console.log(`${Name}s are usually ${shape}`);

// 3) Создайте массив объектов vegetables (каждый элемент массива
//  имеет содержит точно такую же структуру как объект vegetable) 
// так, чтобы следущий код вернул "cucumbers are usually green", 
// "tomatos are usually red"

{
  let vegetables = [
    {
      name: 'cucumber',
      color: 'green'
    },
    {
      name: 'tomato',
      color: 'red'
    }
  ]
  
  const [cucumber, tomato] = vegetables;
  console.log(`${cucumber.name}s are usually ${cucumber.color}`);
  console.log(`${tomato.name}s are usually ${tomato.color}`);
}

// 4) Используя деструктуризацию можно разбить массив на 
// необходимые части. Например записать в переменную отдельно 
// объект onion, и остальные овощи в новый массив.

// const [firstVegetable, ...otherVegetables] = vegetables;
// console.log(firstVegetable.name === cucumber.name); // true

// Или же обращаться к любому элементу массива, пропуская предыдущие.

// const [, , pumpkin] = vegetables;
// console.log(`${pumpkin.name}s are usually ${pumpkin.color}`); //pubpkins are usually orange

// Используя примеры выше, создайте следующий массив объектов, 
// выведите 2й элемент массива и длину массива оставшихся элементов.

let students = [
  { name: 'Kate', age: 25 },
  { name: 'Artur', age: 30 },
  { name: 'Nick', age: 15 },
  { name: 'Alex', age: 28 },
  { name: 'Zhenia', age: 45 },
];

const [, secondName, ...other] = students;
console.log(secondName, other.length);
