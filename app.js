//let startc
//function for clock
function clockStart(e) {
   let newDate = new Date();
   let hours = newDate.getHours();
   let minutes = newDate.getMinutes();
   let seconds = newDate.getSeconds();
   let amPm;

   amPm = (hours < 12) ? "AM" : 'PM';

   minutes = (minutes < 10 ? "0" : "") + minutes;
   seconds = (seconds < 10 ? "0" : "") + seconds;
   hours = (hours > 12 ? hours - 12 : hours);
   hours = (hours < 10 ? "0" : "") + hours;
   hours = (hours == 0 ? 12 : hours);


   let timeStr = `<h2>
   <span id="hours">${hours}</span>:<span id="minutes">${minutes}</span>:<span id="seconds">${seconds}</span>
   </h2>
   <h3 class="pm-am">${amPm}</h3>`;

   let container = document.getElementById('container')
   container.innerHTML = timeStr;
}