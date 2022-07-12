// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",() => {
const takeoff = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground");
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
const landButton = document.getElementById("landing");
const abortMissionButton = document.getElementById("missionAbort");
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const rocket = document.getElementById("rocket");

takeoff.addEventListener("click", () => {
   const response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response){
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
        movement = parseInt(rocket.style.bottom) + 10 + "px";
        rocket.style.bottom = movement;
    }

})
 
landButton.addEventListener("click", () => {
 window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.position = "absolute";
        rocket.style.left = "0px";
        rocket.style.bottom = "0px";

})

abortMissionButton.addEventListener("click", () => {
    const response = window.confirm("Confirm that you want to abort the mission");
     if (response){
         flightStatus.innerHTML = "Mission aborted";
         shuttleBackground.style.backgroundColor = "green";
         spaceShuttleHeight.innerHTML = 0;
         rocket.style.position = "absolute";
         rocket.style.left = "0px";
         rocket.style.bottom = "0px";
     }
 

})

rocket.style.position = "absolute";
rocket.style.left = "0px";
rocket.style.bottom = "0px";

up.addEventListener("click", () => {
   const movement = parseInt(rocket.style.bottom) + 10 + "px";
    rocket.style.bottom = movement;
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    if (rocket.style.bottom === '260px') {
        rocket.style.left = '0px';
        rocket.style.bottom = '0px';
        spaceShuttleHeight.innerHTML = 0;
         }
})

down.addEventListener("click", () => {
    const movement = parseInt(rocket.style.bottom) - 10 + "px";
     rocket.style.bottom = movement;
     spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
     if (rocket.style.bottom === '-10px') {
        rocket.style.left = '0px';
        rocket.style.bottom = '0px';
        spaceShuttleHeight.innerHTML = 0;
         }
 })

 right.addEventListener("click", () => {
    const movement = parseInt(rocket.style.left) + 10 + "px";
     rocket.style.left = movement;
     if (rocket.style.left === '460px') {
        rocket.style.left = '0px';
        rocket.style.bottom = '0px';
        spaceShuttleHeight.innerHTML = 0;
         }
 })
 
 left.addEventListener("click", () => {
     const movement = parseInt(rocket.style.left) - 10 + "px";
      rocket.style.left = movement;
      if (rocket.style.left === '-10px') {
        rocket.style.left = '0px';
        rocket.style.bottom = '0px';
        spaceShuttleHeight.innerHTML = 0;
         }
  })

})