/* Using 1-counter.js or 2-counter.js from the easy section, can you create a clock that shows you the current machine time?
Can you make it so that it updates every second, and shows time in the following formats -
HH:MM::SS (Eg. 13:45:23)
HH:MM::SS AM/PM (Eg 01:45:23 PM) 
*/

function padZero(num) {
  return num.toString().padStart(2, '0');
}

function getFormattedTime() {
  const now = new Date().getTime();
  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function getFormattedTimeWithPeriod() {
  const now = new Date().getTime();
  let hours = now.getHours();
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = padZero(hours);

  return `${hours}:${minutes}:${seconds} ${period}`;
}

function startClock() {
  setInterval(() => {
      console.log(getFormattedTime());
      console.log(getFormattedTimeWithPeriod());
  }, 1000);
}

startClock();
