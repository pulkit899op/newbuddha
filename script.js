

// message from chairman
// Intersection Observer to trigger animation when element is in viewport
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }); 

  // Target the element with the 'scroll-reveal' class
  const target = document.querySelector('.scroll-reveal');
  observer.observe(target);
}); // message of chairman complete 
// count down bar begins //
// Select all stat items
const statItems = document.querySelectorAll('.stat-item');
// Initialize IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger the number animation (counting effect) when the item is in view
            animateNumber(entry.target);
            // Stop observing the element after it has been revealed
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });  // Trigger when 50% of the element is visible
// Observe each stat item
statItems.forEach(item => {
    observer.observe(item);
});
// Function to animate number (counting animation)
function animateNumber(statItem) {
    const numberElement = statItem.querySelector('.stat-number');
    const targetNumber = parseInt(numberElement.innerText); // Get the number to count to
    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 100); // Increment value to make counting smoother
    const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            numberElement.innerText = targetNumber + "+"; // Ensure it shows the exact target number
            clearInterval(interval); // Stop the counting when the target number is reached
        } else {
            numberElement.innerText = currentNumber + "+"; // Keep updating the number
        }
    }, 10);
} // gradient bar of count down  and scroll reveal for it complete 


// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


