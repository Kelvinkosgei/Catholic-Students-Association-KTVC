// // Dummy data (replace with backend later)
// const announcements = [
//   "Welcome to Catholic Students Association!",
//   "Sunday mass at 10 AM in college chapel.",
//   "Annual retreat registration closes on Sept 30."
// ];

// Dummy notifications for a member
const memberNotifications = [
  "Your membership is active until Dec 2025.",
  "Don't miss the retreat on Nov 10!",
  "New volunteer opportunities available."
];

// Dummy events for a member
const memberEvents = [
  { title: "Sunday Mass", date: "2025-09-21" },
  { title: "Bible Study", date: "2025-09-25" },
  { title: "Charity Drive", date: "2025-10-05" }
];

// Load member name (placeholder: replace with real login later)
const memberName = document.getElementById("memberName");
if (memberName) {
  memberName.textContent = "John Doe"; // later fetch dynamically
}

// Populate notifications
const notifList = document.getElementById("memberNotifications");
if (notifList) {
  memberNotifications.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    notifList.appendChild(li);
  });
}

// // Populate events
// const dashEvents = document.getElementById("memberEvents");
// if (dashEvents) {
//   memberEvents.forEach(e => {
//     const li = document.createElement("li");
//     li.textContent = `${e.title} - ${e.date}`;
//     dashEvents.appendChild(li);
//   });
// }


// const events = [
//   { title: "Bible Study", date: "2025-09-25" },
//   { title: "Charity Drive", date: "2025-10-05" },
//   { title: "Retreat", date: "2025-11-10" }
// ];

// // Load announcements
// const annList = document.getElementById("announcementList");
// if (annList) {
//   announcements.forEach(a => {
//     const li = document.createElement("li");
//     li.textContent = a;
//     annList.appendChild(li);
//   });
// }

// // Load events
// const evList = document.getElementById("eventList");
// if (evList) {
//   events.forEach(e => {
//     const li = document.createElement("li");
//     li.textContent = `${e.title} - ${e.date}`;
//     evList.appendChild(li);
//   });
// }


// Announcements
const announcements = [
  "Welcome new members! Registration is open for 2025 Make sure you Register.",
  "Sunday mass at Christ The King waunifor Parish: Every week at 10 AM.",
  "Annual retreat registration to Subukia shrine on 4th October N/B: Make sure you register to secure slot (first come ,first served).",
  "Charity fundraising drive starts soon,  Every member to get ready ."
];

// Events
const events = [
  { title: "National Prayers(Subukia Shrine)", date: "04th/Sep/2025" },
  { title: "Charity Drive", date: "will be communicated" },
  { title: "Retreat", date: "Will be communicated" },
//   { title: "Christmas Celebration", date: "2025-12-20" }
];

// Load announcements
const annList = document.getElementById("announcementList");
if (annList) {
  announcements.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    annList.appendChild(li);
  });
}

// Load events
const evList = document.getElementById("eventList");
if (evList) {
  events.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.title} - ${e.date}`;
    evList.appendChild(li);
  });
}


// Payment button
const payBtn = document.getElementById("payBtn");
if (payBtn) {
  payBtn.addEventListener("click", () => {
    alert("Redirecting to secure payment... (integrate PayPal/Stripe here)");
  });
}

window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.transition = "opacity 1s ease";
    setTimeout(() => splash.style.display = "none", 1000);
  }, 2000); // 2 seconds before fading out
});

// Urgent notifications list
const urgentNotifications = [
  "🚨 Urgent: Members to attend Prayers Everyday from 7 to 8pm!",
  "⚠️ Reminder: Registration is ongoing!",
  "🙏 Rosary prayers every Tuesday evening.",
  "📢 Important: Meeting with new members after every Sunday mass."
];

let popupIndex = 0;
const popup = document.getElementById("popup-notification");

// Function to show popup
function showPopup(message) {
  popup.innerText = message;
  popup.style.display = "block";

  // Hide after 4 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
}

// Rotate notifications every 5 seconds
setInterval(() => {
  showPopup(urgentNotifications[popupIndex]);
  popupIndex = (popupIndex + 1) % urgentNotifications.length;
}, 5000);

// Urgent Notifications Management (Dashboard)
const urgentForm = document.getElementById("urgentForm");
const urgentList = document.getElementById("urgentList");

function loadUrgentNotifications() {
  const notifications = JSON.parse(localStorage.getItem("urgentNotifications")) || [];
  urgentList.innerHTML = "";
  notifications.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${note}
      <button onclick="deleteUrgent(${index})">✖</button>
    `;
    urgentList.appendChild(li);
  });
}

function deleteUrgent(index) {
  const notifications = JSON.parse(localStorage.getItem("urgentNotifications")) || [];
  notifications.splice(index, 1);
  localStorage.setItem("urgentNotifications", JSON.stringify(notifications));
  loadUrgentNotifications();
}

if (urgentForm) {
  urgentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const msg = document.getElementById("urgentMessage").value;
    let notifications = JSON.parse(localStorage.getItem("urgentNotifications")) || [];
    notifications.push(msg);
    localStorage.setItem("urgentNotifications", JSON.stringify(notifications));
    document.getElementById("urgentMessage").value = "";
    loadUrgentNotifications();
  });

  // Load on dashboard open
  loadUrgentNotifications();
}



