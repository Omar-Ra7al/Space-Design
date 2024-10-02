let mainColors = localStorage.getItem("color-option");

let myLis = document.querySelectorAll(".colors-list li");

// Check If The local storage item is not null to take a best practice way
if (mainColors !== null) {
  console.log("local storage is not emptey u can set it in the root now ");
  document.documentElement.style.setProperty("--main--color", mainColors);

  // Remove and Add active class if === main color
  myLis.forEach(function (li) {
    li.classList.remove("active");
    li.dataset.color === mainColors ? li.classList.add("active") : "";
  });
}

// Loop to set the color when click and make that for each element by foreach
myLis.forEach(function (li) {
  li.onclick = function () {
    localStorage.setItem("color-option", li.getAttribute("data-color"));
    document.documentElement.style.setProperty(
      "--main--color",
      li.getAttribute("data-color")
    );
    myLis.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
  };
});

// Setting box
let settingsBox = document.querySelector(".settings-box");
let optionBox = document.querySelector(".option-box");
let toggle = document.querySelector(".gear");
function fullWidth() {
  // Add class to the sitting box by using tooggel to add i is not found and remove if is found
  settingsBox.classList.toggle("full-width");
  toggle.classList.toggle("spin");
}
document.addEventListener("click", function (e) {
  // Check if the clicked element is not within the settingsBox or toggle
  if (!settingsBox.contains(e.target) && e.target !== toggle) {
    /*contains method: This method is used to check if one DOM element contains another DOM element.
    It is not related to CSS classes. 
    It's used with parent-child relationships in the DOM tree.*/
    settingsBox.classList.remove("full-width");
    toggle.classList.remove("spin");
  }
});

// landing page

let bgOption = localStorage.getItem("bg-option");
let randomSpans = document.querySelectorAll(".random-bg span");

if (bgOption !== null) {
  randomSpans.forEach(function (span) {
    span.classList.remove("active");
    // get the value and set
    span.dataset.background === bgOption ? span.classList.add("active") : "";
  });
}
let interval;
let landingPage = document.querySelector(".landing-page");
let imgsArray = [
  "a10.jpg",
  "a11.jpg",
  "a12.jpg",
  "a13.jpg",
  "a14.jpg",
  "a15.jpg",
  "a16.jpg",
  "a17.jpg",
  "a20.jpg",
];
let timeOut = 10000;
let setTime = document.querySelector("#settime");
let submitTime = document.querySelector(".submittime");

function randomBg() {
  interval = setInterval(() => {
    // Get Random nnumber to get the img by index from array
    let randoNuum = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = `url("imgs/${imgsArray[randoNuum]}")`;
  }, timeOut);
}

// Add Specific time to select
function timer() {
  if (setTime.value < 99) {
    timeOut = +(localStorage.getItem("timer") + "000") || 3000;
  }
}
setTime.value = localStorage.getItem("timer");
timer();
submitTime.onclick = function () {
  submitTime.classList.add("color");
  setTimeout(() => {
    submitTime.classList.remove("color");
  }, 800);
  localStorage.setItem("timer", setTime.value);
  localStorage.setItem("bg-option", "yes");
  // Add class Active when we click immeditley
  document.querySelector(".random-bg span.yes").classList.add("active");
  document.querySelector(".random-bg span.no").classList.remove("active");
  if (setTime.value < 0) {
    localStorage.setItem("timer", "1");
    timeOut = 10000;
    setTime.value = 1;
  }
  timer();
  clearInterval(interval);
  randomBg();
};
//Add class active in Span  for backgrond box
randomSpans.forEach(function (span) {
  span.onclick = function () {
    // localStorage.setItem("bg-select", "");
    // save  class in local storage
    localStorage.setItem("bg-option", span.dataset.background);
    // Remove class active form the select bg
    randomSpans.forEach((li) => li.classList.remove("active"));
    span.classList.add("active");
    let selectSpans = document.querySelectorAll(".select-bg span");
    selectSpans.forEach((span) => span.classList.remove("active"));
    // cheeck when you click
    if (span.classList.contains("active") && span.classList.contains("yes")) {
      return randomBg();
    } else {
      clearInterval(interval);
      // set the normal bg
      landingPage.style.backgroundImage = `url("imgs/a13.jpg")`;
    }
  };
  // Landing Page but we need to cheeck also
  if (span.classList.contains("active") && span.classList.contains("yes")) {
    return randomBg();
  } else {
    landingPage.style.backgroundImage = `url("imgs/a13.jpg")`;
  }
});

// الافضلانناكنانحطالانترفالفي فاشنكشن وننده عليها لومحتاجينها
// وكنا ممكن نعمل فاريبول نحقق بيه الشرط الي هو لو ترو نفزلي الفانكشن دي

// select bg as u like
let bgselect = localStorage.getItem("bg-select");
// mistake take along time the local storage not ==  null idonnt know why is lag sometimes
if (bgselect !== "" && bgselect !== null) {
  landingPage.style.backgroundImage = `url("imgs/${bgselect}")`;
}
let selectSpans = document.querySelectorAll(".select-bg span");
selectSpans.forEach(function (span) {
  span.onclick = function () {
    localStorage.setItem("bg-option", "no");
    document.querySelector(".random-bg .no").classList.add("active");
    document.querySelector(".random-bg .yes").classList.remove("active");
    clearInterval(interval);
    landingPage.style.backgroundImage = `url("imgs/${span.dataset.bgselect}")`;
    localStorage.setItem("bg-select", span.dataset.bgselect);
    selectSpans.forEach(function (span) {
      span.classList.remove("active");
    });
    span.classList.add("active");
  };
  if (span.dataset.bgselect === bgselect) {
    span.classList.add("active");
  }
});

// Toggel bars
let bar = document.querySelector(".bar-container .bars");
let barContainer = document.querySelector(".links-container");
let border = document.querySelector(".bar-container");
bar.onclick = function (e) {
  // 1- Remove any anouther event from it and if the specific element include more element it will stop also
  // To stop propgation
  e.stopPropagation();
  bar.classList.toggle("active");
  barContainer.classList.toggle("bar-nav");
  border.classList.toggle("show");
};
// Click anywhere to close menue exept toggle and manue
document.addEventListener("click", function (e) {
  if (
    // e.target !== bar
    e.target !== barContainer &&
    e.target !== border &&
    e.target.className !== "links"
  ) {
    // Check if The Mnue is Open
    if (bar.classList.contains("active")) {
      // The Toggle is Work here cuz we specific if the window is open do that
      // and now he open and have the classes when we click the toggle will rremove the xc; ass
      bar.classList.toggle("active");
      border.classList.toggle("show");
      barContainer.classList.toggle("bar-nav");
    }
  }
});

// Stop Propgation To Links
barContainer.onclick = (e) => e.stopPropagation();

// Add widht to the skills in scroll
let skillsSection = document.querySelector(".skills");
window.addEventListener("scroll", function () {
  let skillsoffsetTop = skillsSection.offsetTop;
  let skillsoutterHeight = skillsSection.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;

  let skillSpans = document.querySelectorAll(".skills span");
  skillSpans.forEach(function (span) {
    if (windowScrollTop > skillsoffsetTop + skillsoutterHeight - windowHeight) {
      span.style.width = span.dataset.width;
      span.style.paddingLeft = "10px";
      span.textContent = span.dataset.width;
    } else {
      span.style.width = "0";
      span.textContent = "";
      span.style.paddingLeft = "0";
    }
  });
});

// Creast Popup With The Image
let ourGallary = document.querySelectorAll(".gallary img");
ourGallary.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Creat Overlay
    let overLay = document.createElement("div");
    document.body.appendChild(overLay);
    overLay.className = "popup-overlay";
    //CreatPopup Box
    let popupBox = document.createElement("div");
    overLay.appendChild(popupBox);
    popupBox.className = "popup-box";
    //Creat The Title of the img if the alt found
    if (img.alt.trim() !== "") {
      let popupTitle = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      popupTitle.appendChild(imgText);
      popupBox.appendChild(popupTitle);
    }
    // Creat the img
    let popImg = document.createElement("img");
    popupBox.appendChild(popImg);
    popImg.src = img.src;
    // Creat Span To Close >
    let closeSpan = document.createElement("span");
    closeSpan.className = "close";
    popupBox.appendChild(closeSpan);
    closeSpan.innerHTML = `<i class="fa-solid fa-x"></i>`;
    closeSpan.addEventListener("click", () => {
      overLay.remove();
    });
  });
});

// There Is Another Way U can Use If U have More POPUP
// document.addEventListener("click", function (e) {
//   if (e.target.className == "close") {
//     e.target.parentNode.remove();
//     document.querySelector(".popup-overlay").remove();
//   }
// });

// Get all Bullets

let bullets = document.querySelectorAll(".bullet");
let links = document.querySelectorAll(".links li a");
// bullets.forEach((bullet) =>
//   bullet.addEventListener("click", () => {
//     let targetElement = document.getElementById(bullet.dataset.link);
//     // Scroll to the element
//     targetElement.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   })
// );

// Inhance you code by using the same function doing the same thing for more things and this is the best practice
// explain this in this ex in the function to scrool
function scrollTosomewhere(element) {
  element.forEach((ele) => {
    // ele.preventDefault();
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById(ele.dataset.link)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}
scrollTosomewhere(bullets);
scrollTosomewhere(links);

// Show Hide Bullets
let bulletsSpan = document.querySelectorAll(".bullets span");
let bulletsNav = document.querySelector(".nav-bullets");
if (localStorage.getItem("bullets-option") !== null) {
  bulletsNav.style.display = localStorage.getItem("bullets-option");
  bulletsSpan.forEach((chiled) => chiled.classList.remove("active"));
  if (localStorage.getItem("bullets-option") === "block") {
    document.querySelector(".bullets span.yes").classList.add("active");
  } else {
    document.querySelector(".bullets span.no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", () => {
    if (span.dataset.dsiplay === "show") {
      localStorage.setItem("bullets-option", "block");
      bulletsNav.style.display = "block";
    } else {
      localStorage.setItem("bullets-option", "none");
      bulletsNav.style.display = "none";
    }
  });
  activeState(bulletsSpan);
});

// Go up
let goUp = document.querySelector(".scroll-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
});
goUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Nav scroll or no
let navOption = document.querySelectorAll(".nav-scrolling span");
let ourNav = document.querySelector(".header-area");
// let navNo = document.querySelector(".nav-scrolling span.no");
if (localStorage.getItem("nav-option") !== "") {
  ourNav.style.position = localStorage.getItem("nav-option");
  navOption.forEach((span) => {
    span.classList.remove("active");
  });
  if (localStorage.getItem("nav-option") === "relative") {
    document.querySelector(".nav-scrolling span.no").classList.add("active");
  } else {
    document.querySelector(".nav-scrolling span.yes").classList.add("active");
  }
}

navOption.forEach((span) => {
  span.addEventListener("click", () => {
    localStorage.setItem("nav-option", span.dataset.nav);
    if (span.className === "no active") {
      ourNav.style.position = "relative";
      settingsBox.style.top = "0px";
      settingsBox.style.height = "100vh";
      settingsBox.style.paddingTop = "50px";
    } else {
      ourNav.style.position = "fixed";
      settingsBox.style.top = "66px";
      settingsBox.style.height = "90vh";
      settingsBox.style.paddingTop = "20px";
    }
  });
  if (span.dataset.nav === localStorage.getItem("nav-option")) {
    span.classList.add("active");
  }
  if (span.className === "no active") {
    ourNav.style.position = "relative";
    settingsBox.style.top = "0px";
    settingsBox.style.height = "100vh";
    settingsBox.style.paddingTop = "50px";
  }

  activeState(navOption);
});

// Reset Options
let reset = document.querySelector(".rest-options");
reset.addEventListener("click", () => {
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  let pop = document.createElement("div");

  pop.innerHTML = `
  <img src="imgs/warning.png"alt=""/>
  <p>Are you sure if you clcik yes all the changes u do will loss , and will retun to the defult system</p>
  <div>
  <span class="clear">Yes</span>
  <span class="cancel">No</span>
  </div>`;

  document.body.appendChild(overlay);
  overlay.appendChild(pop);

  let clear = document.querySelector(".clear");
  let cancel = document.querySelector(".cancel");

  clear.onclick = () => {
    localStorage.clear();
    window.location.reload();
    landingPage.style.backgroundImage = `url("imgs/"a13.jpg")`;
    console.log(":");
    // POPup FOR advenger
  };
  cancel.onclick = () => {
    overlay.remove();
  };
});

// Handell Active Class
function activeState(parent) {
  parent.forEach(function (chiled) {
    chiled.onclick = function () {
      parent.forEach((chiled) => chiled.classList.remove("active"));
      chiled.classList.add("active");
    };
  });
}
