const talkingCalendar = function(date) {
  let newString = "";
  const year = Number(date.slice(0, 4));
  const monthNum = Number(date.slice(5, 7));
  const dayNum = Number(date.slice(8, 10));
  switch (monthNum) {
    case 01:
      newString = newString.concat("January");
      break;
    case 02:
      newString = newString.concat("February");
      break;
    case 03:
      newString = newString.concat("March");
      break;
    case 04:
      newString = newString.concat("April");
      break;
    case 05:
      newString = newString.concat("May");
      break;
    case 06:
      newString = newString.concat("June");
      break;
    case 07:
      newString = newString.concat("July");
      break;
    case 08:
      newString = newString.concat("August");
      break;
    case 09:
      newString = newString.concat("September");
      break;
    case 10:
      newString = newString.concat("October");
      break;
    case 11:
      newString = newString.concat("November");
      break;
    case 12:
      newString = newString.concat("December");
      break;
  }
  newString = newString.concat(" " + dayNum);
  switch (dayNum) {
    case 1:
    case 21:
    case 31:
      newString = newString.concat("st, ");
      break;
    case 2:
    case 22:
      newString = newString.concat("nd, ");
      break;
    case 3:
      newString = newString.concat("rd, ");
      break;
    default:
      newString = newString.concat("th, ");
  }
  newString = newString.concat(year);
  return newString;
};

console.log(talkingCalendar("2017/12/02"), "?= December 2nd, 2017");
console.log(talkingCalendar("2007/11/11"), "?= November 11th, 2007");
console.log(talkingCalendar("1987/08/24"), "?= August 24th, 1987");