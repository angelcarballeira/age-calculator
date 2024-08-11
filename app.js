let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];

let result = document.getElementById('result');

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let dayUser = birthDate.getDate();
  let monthUser = birthDate.getMonth() + 1;
  let yearUser = birthDate.getFullYear();

  let today = new Date();

  let dayToday = today.getDate();
  let monthToday = today.getMonth() + 1;
  let yearToday = today.getFullYear();

  let day, month, year;

  year = yearToday - yearUser;
  if (monthToday >= monthUser) {
    month = monthToday - monthUser;
  } else {
    year--;
    month = 12 - monthUser + monthToday;
  }

  if (dayToday >= dayUser) {
    day = dayToday - dayUser;
  } else {
    month--;
    let days = getDaysInMonth(yearUser, monthUser);
    day = days - dayUser + dayToday;
  }

  if (month < 0) {
    month = 11;
    year--;
  }

  result.innerHTML = `Tu tienes <span>${year}</span> años, <span>${month}</span> meses y <span>${day}</span> días.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
