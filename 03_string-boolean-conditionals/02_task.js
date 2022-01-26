// Цель задания

// Узнать, как преобразовывать строку в верхний/нижний регистр. Узнать, 
// как извлекать произвольные куски из строки.

// Задание

// В переменных name, surname написаны имя и фамилия человека. 
// При этом в строках беспорядок с большими и маленькими буквами, и 
// нужно привести строки в порядок. Для этого первые буквы имени и фамилии 
// приведите к верхнему регистру, а оставшиеся буквы — к нижнему. Запишите результат 
// в новые переменные и выведите их значения с помощью console.log. С помощью тернарных 
// операторов и console.log выведите сообщение «Имя было преобразовано» или 
// «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли 
// исходные строки равны преобразованным.

// Проверка результата

// Для любых имени и фамилии в любом регистре должны выводиться такие же имя и фамилия, 
// но первая буква у них большая, а все остальные — маленькие.

// Критерии оценки

// Код корректно выводит все сообщения в зависимости от значения переменных name и surname.


// Рекомендации к выполнению

// Для получения куска строки можно воспользоваться конструкцией str.substr(from, length), 
// где str — название переменной с исходной строкой, вместо from подставляется номер символа,
// после которого нужно взять кусок (0, если нужно брать с начала строки, 1 — после первого
// символа и т.д.), а вместо length — количество символов. При этом length можно 
// опустить, если нужно взять всю оставшуюся строку. Конструкцию можно присвоить 
// переменной, с которой потом можно работать как с обычной строкой. Для 
// преобразования букв строки к верхнему регистру можно воспользоваться 
// конструкцией str.toUpperCase(), а к нижнему — str.toLowerCase(). Результат 
// аналогично можно присвоить переменной.

let name = 'MaXimus';
let surname = 'SiDorOV';

// let name = 'FJInjdfkjvnijrnijrfddEFVME';
// let surname = 'HJBHJBJHbhbgVGVGVYGvygvgvv';

// let name = 'Maximus';
// let surname = 'Sidorov';

let firstCharName =  name.substring(0, 1);
let otherCharName =  name.substring(1);
let firstCharSurname =  surname.substring(0, 1);
let otherCharSurname =  surname.substring(1);


firstCharName = firstCharName.toUpperCase();
otherCharName = otherCharName.toLowerCase();
firstCharSurname = firstCharSurname.toUpperCase();
otherCharSurname = otherCharSurname.toLowerCase();

let fullName = firstCharName + otherCharName;
let fullSurname = firstCharSurname + otherCharSurname;


console.log(fullName)
console.log(fullSurname)



let resultChangedName = (name === fullName) ? console.log('Имя не менялось') : console.log('Имя было изменено');
let resultChangedSurename = (surname === fullSurname) ? console.log('Фамилия не менялась') : console.log('Фамилия была изменена');






