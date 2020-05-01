const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;
const {today, tomorrow} = HIGH_TEMPERATURES;

console.log(today);
console.log(tomorrow);

//give variables new assignment names
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday + " is the high, today.");
console.log(highTomorrow + " is the high for tomorrow.");