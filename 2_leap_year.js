// ЗАДАНИЕ
// Високосный год.
// Написать функцию, которая выводит true or false в ответ на введенный год
// И функцию, которая выводит все високосные годы в 21 веке

function leap_year(year) {
  if ((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)) {
    console.log("Високосный");
  } else {
    console.log("Не високосный");
  }
}

function all_leap_years() {
  for (year = 2000; year <= 2100; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)) {
      console.log(year);
    }
  }
}

leap_year(2012); // тут мы меняем год и в зависимости от выбранного года должно выводиться true или false

all_leap_years(); // результат должны быть все високосные года в 21 веке

// Почему не работала строка 16 if (leap_year(year) == "Високосный" {console.log(year)})