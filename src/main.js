//@ts-nocheck
import './app.css'
import App from './App.svelte'

// An image (Example_Gameplay_Screenshot.jpg) was provided in the project directory, it can be placed anywhere in local storage and uploaded in the running app to confirm
// image uploading works.

const app = new App({
  target: document.getElementById('app'),
})

export default app

// Display preview image before user uploads their own
function setExampleImage() {
  var imageEle = document.getElementById('preview');
  imageEle.setAttribute("src", "src/assets/Example_Screenshot.png");
}
setExampleImage();

// Display current date and time
function setDateTime() {
  let currDateTime = new Date();
  document.getElementById("currentDate").innerHTML = currDateTime.getMonth().toString() + " / " + currDateTime.getDate().toString() + " / " + currDateTime.getFullYear().toString();
  document.getElementById("currentTime").innerHTML = currDateTime.toLocaleTimeString().toString();
  document.getElementById("currentDayDate").innerHTML += " " + currDateTime.getMonth().toString() + " / " + currDateTime.getDate().toString() + " / " + currDateTime.getFullYear().toString();
  document.getElementById("currentDayTime").innerHTML += " " + currDateTime.toLocaleTimeString().toString();

}
setDateTime();

// Sample data to display and demonstrate functionality
const dayOne = {
  date: "8 / 31 / 2024",
  time: "7:00 PM",
  platform: "PC",
  tools: ["mouse", "keyboard"],
  game: "Counter-Strike 2",
  rating: 5,
  analysis: "This game went great. Everyone worked together well and we got a win.",
  notes: "I should make more callouts"
}
const dayTwo = {
  date: "9 / 1 / 2024",
  time: "5:00 PM",
  platform: "Playstation",
  tools: ["controller"],
  game: "Modern Warfare",
  rating: 3,
  analysis: "This game was alright. My team and I started getting frustrated about losing many rounds in a row",
  notes: "I need to be more supportive and focus more."
};
const dayThree = {
  date: "9 / 2 / 2024",
  time: "6:00 PM",
  platform: "PC",
  tools: ["mouse", "keyboard"],
  game: "Apex Legends",
  rating: 3,
  analysis: "This game is fun and fast paced",
  notes: "I need to focus more."
};
const dayFour = {
  date: "9 / 3 / 2024",
  time: "7:00 PM",
  platform: "PC",
  tools: ["controller"],
  game: "Modern Warfare",
  rating: 4,
  analysis: "I think my reaction time is getting better",
  notes: "I should learn new strategies."
};
const dayFive = {
  date: "9 / 4 / 2024",
  time: "8:00 PM",
  platform: "PC",
  tools: ["mouse", "keyboard"],
  game: "Fortnite",
  rating: 4,
  analysis: "This is a mechanically intensive game",
  notes: "I should learn strategies for teams"
};
const daySix = {
  date: "9 / 5 / 2024",
  time: "9:00 PM",
  platform: "Playstation",
  tools: ["controller"],
  game: "Overwatch",
  rating: 5,
  analysis: "This game requires teamwork in order to succeed.",
  notes: "As a team, we should learn about team composition."
};
const daySeven = {
  date: "9 / 6 / 2024",
  time: "10:00 PM",
  platform: "Playstation",
  tools: ["controller"],
  game: "Halo Infinite",
  rating: 2,
  analysis: "Grenades, everywhere.",
  notes: "I need to learn to play more defensively."
};
const previousDays = [dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven];

// Display sample data as previous days
function showDaysAsList() {
  document.getElementById('prevDays').innerHTML = previousDays.map((person) => {
    return `<li class="list-item"><h3>Date: ${person.date}</h3><p><strong>Time: </strong>${person.time}</p><p><strong>Platform: </strong>${person.platform}</p><p><strong>Tools: </strong>${person.tools}</p><p><strong>Game: </strong>${person.game}</p><p><strong>Rating:</strong> ${person.rating}</p><p><strong>Events: </strong>${person.analysis}</p><p><strong>Notes: </strong>${person.notes}</p><button>Show Image</button> <button>Edit</button></li>`;
  }).join(' ');
}
showDaysAsList();

// Listener to update image preview when user uploads their own image
document.getElementById('upload').addEventListener('change', function (event) {
  var previewEle = document.getElementById('preview');
  
  previewEle.setAttribute('src', URL.createObjectURL(event.target.files[0]))
});

// Display app usage
function setDaysSince() {
  const startDate = new Date("08/31/2024");
  const currDate = new Date();

  // difference is in milliseconds
  const dateDiff = currDate.getTime() - startDate.getTime();

  // milliseconds to days
  const diffInDays = Math.round(dateDiff / (1000 * 3600 * 24));

  document.getElementById('daysSinceFirst').innerHTML = diffInDays + " days since starting this app!";

  // I didn't want to make another function to set active days, so I just do it here
  document.getElementById('daysActive').innerHTML = (previousDays.length + 1).toString() + " entries / days active on this app!";
}
setDaysSince();

// Attempt to add text input if "Other" checkbox is checked
function addElement(element, parent) {
  var divToAddTo = document.getElementById('checkboxes')
  var elementToAdd = document.createElement(element);
  divToAddTo.appendChild(elementToAdd);
}
document.getElementById('ocb').addEventListener('click', addElement("otherInput", "checkboxes"))

// Output form inputs to a summary next to previous days 
function updateCurrentDay() {
  var platform = document.getElementById('platformSelect').value;
  var mouseKeyboardCheckBox = document.getElementById('mkbcb');
  var controllerCheckbox = document.getElementById('ccb');
  var otherCheckbox = document.getElementById('ocb');
  var game = document.getElementById('game');
  var radioButtons = document.getElementsByName('rating');
  var radioSelection = Array.from(radioButtons).find(
    (radio) => radio.checked
  );
  var events = document.getElementById('events');
  var notes = document.getElementById('notes');
  
  document.getElementById('currentDayPlatform').innerHTML = document.getElementById('platformSelect').options[platform - 1].text;
  document.getElementById('currentDayTools').innerHTML += mouseKeyboardCheckBox.checked ? "Mouse and Keyboard, " : ""; 
  document.getElementById('currentDayTools').innerHTML += controllerCheckbox.checked ? "Controller, " : ""; 
  document.getElementById('currentDayTools').innerHTML += otherCheckbox.checked ? "Other, " : ""; 
  document.getElementById('currentDayGame').innerHTML = game.value;
  document.getElementById('currentDayEvents').innerHTML = events.value;
  document.getElementById('currentDayNotes').innerHTML = notes.value;
  document.getElementById('saveNotification').style.visibility = "visible";
  document.getElementById('currentDayRating').innerHTML = radioSelection.value;

}
document.getElementById('submitButton').addEventListener('click', updateCurrentDay);

// Display average rating before user inputs rating for current day
function initAverageRating() {
  var totalRatings = 0;

  for (let i = 0; i < previousDays.length; i++) {
    totalRatings += previousDays[i].rating;
  }

  totalRatings /= previousDays.length;

  document.getElementById("averageRating").innerHTML = totalRatings.toFixed(2);
}
initAverageRating();

// Update average rating after user inputs rating for current day
function updateAverageRating() {
  var totalRatings = 0;
  
  for (let i = 0; i < previousDays.length; i++) {
    totalRatings += previousDays[i].rating;
  }
  
  var radioButtons = document.getElementsByName("rating");
  var radioSelection = Array.from(radioButtons).find((radio) => radio.checked);
  
  totalRatings += Number(radioSelection.value);
  
  totalRatings / (previousDays.length + 1);
  
  document.getElementById("averageRating").innerHTML = totalRatings / (previousDays.length + 1);
}
document.getElementById('rating1').addEventListener('click', updateAverageRating);
document.getElementById('rating2').addEventListener('click', updateAverageRating);
document.getElementById('rating3').addEventListener('click', updateAverageRating);
document.getElementById('rating4').addEventListener('click', updateAverageRating);
document.getElementById('rating5').addEventListener('click', updateAverageRating);