// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).




// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

const studentsList = [
  // Добавьте сюда объекты студентов
  {
    firstName: "Петр",
    secondName: "Иванов",
    middleName: "Максимович",
    bDay: new Date(1995, 11, 17),
    startStudy: 2002,
    department: 'Экономический',
  },
  {
    firstName: "Константин",
    secondName: "Петров",
    middleName: "Сидорович",
    bDay: new Date(1997, 9, 1),
    startStudy: 2014,
    department: 'Физический',
  },
  {
    firstName: "Анна",
    secondName: "Иванова",
    middleName: "Олеговна",
    bDay: new Date(1990, 2, 10),
    startStudy: 2011,
    department: 'Филологический',
  },
  {
    firstName: "Вероника",
    secondName: "Колышева",
    middleName: "Денисовна",
    bDay: new Date(2000, 11, 2),
    startStudy: 2020,
    department: 'Экономический',
  },
  {
    firstName: "Никита",
    secondName: "Кошкин",
    middleName: "Сидорович",
    bDay: new Date(2001, 1, 17),
    startStudy: 2022,
    department: 'Физический',
  },
]

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.
function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

function howCourse(startYear) {
  let endYear = startYear + 4;;
  let currentYear = new Date().getFullYear();
  let currentCourse = currentYear - startYear;

  if (currentCourse > 0 && currentCourse < 5) {
    currentCourse = new Date().getMonth() > 8 ? currentCourse + 1 : currentCourse;
    if (currentCourse > 4) {
      endYear = startYear + 4;
      return `${startYear}-${endYear}(закончил)`;
    }
    return `${startYear}-${new Date().getFullYear()}(${currentCourse} курс)`;
  } else {
    return `${startYear}-${endYear}(закончил)`;
  }
};

function getStudentItem(studentObj) {
  let fullName = document.createElement('td');
  let department = document.createElement('td');
  let bDay = document.createElement('td');
  let studyInfo = document.createElement('td');

  let studentInfo = document.createElement('tr')

  fullName.textContent = studentObj.secondName + ' ' + studentObj.firstName + ' ' + studentObj.middleName;
  department.textContent = studentObj.department;
  let age = Math.floor((Date.now() - studentObj.bDay) / (1000 * 60 * 60 * 24 * 30 * 12));
  bDay.textContent = formatDate(studentObj.bDay) + `(${age})`;

  studyInfo.textContent = howCourse(studentObj.startStudy);

  studentInfo.append(fullName);
  studentInfo.append(department);
  studentInfo.append(bDay);
  studentInfo.append(studyInfo);

  return studentInfo;

}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsArray) {
  let tbody = document.querySelector(".studentsList");
  const fioVal = document.getElementById('filter-fio').value;
  const filterDep = document.getElementById('filter-dep').value;
  const filterBday = document.getElementById('filter-bday').value;
  const filterStudy = document.getElementById('filter-study').value;
  clearTableStudents();

  if(fioVal !== '') studentsArray = filter(studentsArray, 'secondName', fioVal)
  if(filterDep !== '') studentsArray = filter(studentsArray, 'department', fioVal)
  if(filterBday !== '') studentsArray = filter(studentsArray, 'bDay', fioVal)
  if(filterStudy !== '') studentsArray = filter(studentsArray, 'startStudy', fioVal)
  
  studentsArray.forEach(function (student) {
    tbody.append(getStudentItem(student));
  });
};



// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

function checkInputedTime(current, inputed) {
  if (inputed > current) {
    let errorInfo = document.createElement('span');
    errorInfo.classList.add('text-warning');
    errorInfo.textContent = 'Дата не должна быть позже текущей.';
    return errorInfo;
  }
};


function checkErrorsForm(checkForm) {
  return checkForm.querySelectorAll('.text-warning');
}

function clearTableStudents() {
  let studentsTable = document.querySelector(".studentsList");
  while (studentsTable.firstChild) {
    studentsTable.removeChild(studentsTable.firstChild);
  }
}

function addStudent() {
  renderStudentsTable(studentsList);
  let studentForm = document.querySelector(".studentForm");

  studentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let oldErrors = checkErrorsForm(studentForm);
    if (oldErrors.length > 0) {
      for (let i = 0; i < oldErrors.length; i++) {
        oldErrors[i].remove();
      }
      return
    }

    let name = document.getElementById('name');
    let lastName = document.getElementById('lastName');
    let middleName = document.getElementById('middleName');
    let bDay = document.getElementById('bDay');
    let startStudy = document.getElementById('startStudy');
    let department = document.getElementById('department');

    let currentTime = Date.parse(new Date());


    if (checkInputedTime(new Date().getFullYear(), startStudy.value)) {
      startStudy.after(checkInputedTime(new Date().getFullYear(), startStudy.value))
    }

    if (checkInputedTime(currentTime, Date.parse(bDay.valueAsDate))) {
      bDay.after(checkInputedTime(currentTime, Date.parse(bDay.valueAsDate)));
    }

    if (checkErrorsForm(studentForm).length > 0) {
      return
    }

    clearTableStudents()

    let newStudent = {
      firstName: name.value,
      secondName: lastName.value,
      middleName: middleName.value,
      bDay: bDay.valueAsDate,
      startStudy: parseInt(startStudy.value),
      department: department.value,
    }

    studentsList.unshift(newStudent);
    renderStudentsTable(studentsList);
  }
  )
};



addStudent();

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.


const sortStudents = (arr, prop, dir = false) => arr.sort((a, b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 0);

let sortName = document.querySelector(".sortName");
let sortDepartment = document.querySelector(".sortDepartment");
let sortBDay = document.querySelector(".sortBDay");
let sortStudy = document.querySelector(".sortStudy");



sortName.addEventListener('click', function() {
  clearTableStudents();
  renderStudentsTable(sortStudents(studentsList, 'secondName', false));
  
});

sortDepartment.addEventListener('click', function() {
  clearTableStudents();
  renderStudentsTable(sortStudents(studentsList, 'department', false));
});

sortBDay.addEventListener('click', function() {
  clearTableStudents();
  renderStudentsTable(sortStudents(studentsList, 'bDay', false));
});

sortStudy.addEventListener('click', function() {
  clearTableStudents();
  renderStudentsTable(sortStudents(studentsList, 'startStudy', false));
});


// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.


let filteredStudents = [];

function filter(arr, prop, value) {
  let result = [];
  let copy = [...arr];
  console.log('HELLLOO');
  for(const item of copy){
    if(String(item[prop]).includes(value) == true) result.push(item)
  }
  return result
};

let startFilter = document.querySelector('.filterStudent');
console.log(startFilter);

startFilter.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('fgdfgdfg');
  renderStudentsTable(studentsList);
}

)

