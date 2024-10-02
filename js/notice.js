let landingPage = document.querySelector(".landing-page");
// let imgsArray = ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg"];
let imgsArray = ["a10.jpg", "a11.jpg", "a12.jpg", "a13.jpg", "a14.jpg"];

// how to get random number ??
//   let randoNuum = Math.floor(Math.random() * imgsArray.length);
// حطيناه جوه عشان يغير الفاليو كل شويه
// how to get random number

setInterval(() => {
  let randoNuum = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.backgroundImage = `url("imgs/${imgsArray[randoNuum]}")`;
}, 10000);

// setInterval(() => {
//   setTimeout(() => {

//   }, 1000);
// }, 1000);
// console.log(landingPage);
// setInterval(() => {
//   setTimeout(() => {
//     console.log("one");
//     landingPage.style.backgroundColor = "black";
//   }, 1000);
//   setTimeout(() => {
//     console.log("tow");
//     landingPage.style.backgroundColor = "green";
//   }, 2000);
//   setTimeout(() => {
//     console.log("three");
//     landingPage.style.backgroundColor = "red";
//   }, 3000);
// }, 3000);

//num 1 butthe item and then cheeck
let mainColors = localStorage.getItem("color-option");
console.log(mainColors);
// >> nul cuz is not found !!
// num 2  cheeck
if (mainColors !== null) {
  // لو عملنا عكس كده هيحطلك في الاول خالص نل
  // ف االفضل لاااننا نعمل الموضوع ده عشان منقابلش ايرور او اي حاجه
  console.log("local storage is not emptey u can set it in the root now ");

  document.documentElement.style.setProperty(
    "--main--color",
    localStorage.getItem("color-option")
  );

  myLis.forEach(function (li) {
    li.classList.remove("active");
    // وهنستدعي العنصر الي بالداتا كلو بتتاعته متخزنه عندنا ونجط عليه الاكتيف كلاس
    // let myLisarr = Array.from(myLis);
    // myLisarr.filter((li) =>
    // مش مستاهله انك تلوبتاني على العنصار انت عندك لووب اصلا
    li.dataset.color === mainColors ? li.classList.add("active") : "";
    // );
  });
}

// ADD CLASS AFTEER CLCIK
let settingsBox = document.querySelector(".settings-box");
function fullWidth() {
  settingsBox.classList.toggle("full-width");
  let toggle = document
    .querySelector(".settings-box i")
    .classList.toggle("spin");

  //اجمد حاجه اتعامتها التوجل رغم اني كنت ناسيها
  // لو الكلاس مش موجود هيحططه لو مش موجود هيشيله
}

// Get the data color attr form click

let myLis = document.querySelectorAll(".colors-list li");
let li = document.querySelector(".active");
console.log(myLis);

myLis.forEach(function (li) {
  li.onclick = function (e) {
    // ممكن نعملها برضة بطريقه التارجيت دي
    // console.log(e.target);
    // document.documentElement.style.setProperty(
    //   "--main--color",
    //   li.getAttribute("data-color")
    //   // dataset.color ممكن تتجاب كده برضو
    // );
    localStorage.setItem("color-option", li.getAttribute("data-color"));
    document.documentElement.style.setProperty(
      "--main--color",
      li.getAttribute("data-color")
    );
    myLis.forEach((li) => li.classList.remove("active"));
    li.classList.toggle("active");
  };
});

function handleScroll() {
  let scrollPosition = window.scrollY || window.pageYOffset;
  let skillSpans = document.querySelectorAll(".skills span");
  skillSpans.forEach(function (span) {
    if (scrollPosition >= 650) {
      span.style.width = span.dataset.width;
      span.style.paddingLeft = "10px";
      span.textContent = span.dataset.width;
    } else {
      span.style.width = "0";
      span.textContent = "";
      span.style.paddingLeft = "0";
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();

// عشان نوصل للايليمينت لازم نمشي بالخطوات دي
// 1- نستدعي العنصر الي هنوصله
// الشغل كله في الويندو وفي حاله السكروولينج
// 2- window.onscroll
let skillsSection = document.querySelector(".skills");
window.addEventListener("scroll", function () {
  // 1- Skills offset top >> ده الجزء الي فوق السكلس سكشن بتاعنا
  let skillsoffsetTop = skillsSection.offsetTop;
  // console.log(skillsoffsetTop);
  // 2- Skills outer Height >> دي بتحسبلك الهايت انكلودينج البوردر وكله يعين ده الهايت بتاع العنصر
  skillsoutterHeight = skillsSection.offsetHeight;
  // console.log(skillsoutterHeight);
  // 3- Window Height الهايت بتاع الويندو الي انت جواها ايا كان عملتزوم الهايت هيتغير فيهجبهولك برضو
  let windowHeight = this.innerHeight;
  // console.log(windowHeight);
  // 4- Window Scroll Top >> مكان السكرول الي انت بتعمله
  let windowScrollTop = this.pageYOffset;

  skillSpans.forEach(function (span) {
    if (windowScrollTop > skillsoffsetTop + skillsoutterHeight - windowHeight) {
      let skillSpans = document.querySelectorAll(".skills span");
      span.style.width = span.dataset.width;
      span.style.paddingLeft = "10px";
      span.textContent = span.dataset.width;
    } else {
      span.style.width = "0";
      span.textContent = "";
      span.style.paddingLeft = "0";
    }
  });
  // ده كدا مكان العنصر بالملي
  console.log(skillsoffsetTop + skillsoutterHeight - windowHeight);
  // وده مكان السكرول الي بتعمله لازم يكون اكبر منهم
  console.log(windowScrollTop);
});
// Creast Popup With The Image
let ourGallary = document.querySelectorAll(".gallary img");
ourGallary.forEach((img) => {
  // Event when we clickwewill do somethig
  img.addEventListener("click", (e) => {
    // Creat Over Lay
    let overLay = document.createElement("div");
    document.body.appendChild(overLay);
    overLay.className = "popup-overlay";
    // Creat Popup and Append the Img Inside
    let popupBox = document.createElement("div");
    overLay.appendChild(popupBox);
    popupBox.className = "popup-box";

    // add the img we have more ways and this is the simple way
    // let clickImg = img;
    // console.log(clickImg);
    // popupBox.appendChild(clickImg);

    // also we can get the orce and then appen the src in the element we will creat after click
    let popImg = document.createElement("img");
    popupBox.appendChild(popImg);
    popImg.src = img.src;
  });
});




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
// explainthis in this ex in the function to scrool
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

// verey imprtant thing lokk for the thing is repeted in your project and make dynamik finction to dont repeat your self remember this rool 

/*
// Hnadell  Active state
// Loop to set the color when click and make that for each element by foreach
function activeState(parent) {
  parent.forEach(function (chiled) {
    chiled.onclick = function () {
      parent.forEach((chiled) => chiled.classList.remove("active"));
      chiled.classList.add("active");
    };
  });
}
*/