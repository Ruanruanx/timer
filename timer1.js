let arr = [];
process.argv.forEach((e) => {
  arr.push(e);
});
let alarmArr = arr.splice(2);
for (let clock of alarmArr) {
  if (clock >= 0) {
    setTimeout(() => {
      console.log(clock);
      process.stdout.write('\u0007');
    }, clock * 1000)
  }
}