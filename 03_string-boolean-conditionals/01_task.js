// В переменную password запишите строку с любым произвольным паролем. 
// Проверьте надёжность пароля. Пароль является надёжным, когда в нём есть 
// хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'. 
// Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно 
// надёжный».

// Проверка результата

// Для проверки запустите код с разными вариантами надёжных и ненадёжных паролей. 
// Примеры корректный паролей:

// let password =  '1234-';
// let password =  '4321_';
// let password =  'qaz-xsw';
// let password =  '_zxd';


// Примеры некорректных паролей:

// let password = '_-a';
// let password = 'qaz';
// let password = '_-3';
let password = '123456789';
// Пароль является надёжным, когда в нём есть хотя бы 4 символа, 
// среди которых есть хотя бы один из символов «-», «_».


// Критерии оценки

// Код корректно выводит сообщение в зависимости от значения переменной password.

// Рекомендации к выполнению

// Для проверки наличия в строке другой строки можно воспользоваться 
// конструкцией password.includes('x'), где 'x' — строка для поиска.


if (password.length >= 4 && (password.includes('-') || password.includes('_'))){
    console.log('Пароль является надёжным')
} else {
    console.log('Пароль является ненадёжным')
};



