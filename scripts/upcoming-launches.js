document.querySelector(".mid-bar").style.height = window.innerHeight;
// var countDownDate = new Date("Oct 12, 2021 19:00:00").getTime();

async function getResponse() {
	const response = await fetch(
		'https://spacelaunchnow.me/api/ll/2.1.0/launch/upcoming/?format=json',
		{
			method: 'GET',
		}
	);
  const data = await response.json();

  console.log(data.results.length);

  var upcomingDiv = document.querySelector(".upcoming");
  for(var i=0; i < data.results.length; i++){
    
    var statusClass;
    if(data.results[i].status.id === 1) {
      //Green
      statusClass = "confirmed";
    } else if(data.results[i].status.id === 2) {
      //Red
      statusClass = "tbd";
    } else {
      //Yellow
      statusClass = "unconfirmed";
    }

    var confirmDate = new Date(data.results[i].net);
    var startDate = new Date(data.results[i].window_start);
    var endDate = new Date(data.results[i].window_end);

    startdate = startDate.toDateString();
    enddate = endDate.toDateString();

    upcomingDiv.innerHTML += `<div class="single-launch ${statusClass}"><div class="launchData-left">	
      <div class="sno">
        ${i+1}
      </div>
      <div class="inner-details">
        <h2 class="launch-title">	    				
        ${data.results[i].name}
        </h2>
        <ul>
          <li class="first-li">
            ${data.results[i].launch_service_provider.name}
          </li>
          <li>
            ${data.results[i].pad.location.name}
          </li>
          <li>
            ${confirmDate}
          </li>
        </ul>
      </div>
    </div>
    <div class="launchData-right">
      <span id="time10"><!-- T-3 days 04:46:40 --></span>
    <span>Window starts ${startdate}</span>
    <span>Window ends ${enddate}</span>
    </div></div>
  `;
  }
}

getResponse();


var ids = ["time1", "time2", "time3", "time4", "time5", "time6", "time7", "time8", "time9", "time10"];
var times=["Oct 12, 2021 19:00:00", 
           "Oct 14, 2021 15:10:00", 
           "Oct 15, 2021 21:54:00", 
           "Oct 16, 2021 15:04:00", 
           "Oct 21, 2021 05:30:00", 
           "Oct 22, 2021 05:45:00", 
           "Oct 25, 2021 07:30:00", 
           "Oct 28, 2021 05:30:00", 
           "Oct 30, 2021 12:13:00", 
           "Oct 31, 2021 05:30:00"]

function setTime(countDownDate, myId){
    var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // document.getElementById(myId).innerHTML = "T- " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      // document.getElementById(myId).innerHTML = "EXPIRED";
    }
  }, 1000);
}

for (var i = 0; i < 10; i++) {
  setTime(new Date(times[i]).getTime(), ids[i]);
}

document.querySelector(".wt-rocket-head").addEventListener("click", function(){
  window.location.href = "./index.html#rocket-info";
});

document.querySelector(".org-head").addEventListener("click", function(){
  window.location.href = "./index.html#organizations";
});

document.querySelector(".up-launch-head").addEventListener("click", function(){
  window.location.href = "#launches";
});

function fun404() {
    window.location.href = "./Under_Development/404.html";
}