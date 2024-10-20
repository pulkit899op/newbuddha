// BEGINNING OG HOME PAGE ANIMATED BG, SLIDING BOXES //
var swiper = new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  speed: 1000,
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 10,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 300,
    pauseOnMouseEnter: true,
  },
});
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  backgroundMode: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: [
        "#3998D0",
        "#2EB6AF",
        "#A9BD33",
        "#FEC73B",
        "#F89930",
        "#F45623",
        "#D62E32",
      ],
    },
    destroy: {
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: 5,
          random: {
            enable: true,
            minimumValue: 4,
          },
        },
        rate: {
          value: 10,
          random: {
            enable: true,
            minimumValue: 5,
          },
        },
        particles: {
          collisions: {
            enable: false,
          },
          destroy: {
            mode: "none",
          },
          life: {
            count: 1,
            duration: {
              value: 1,
            },
          },
        },
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: {
        enable: true,
        minimumValue: 4,
      },
      animation: {
        enable: false,
        speed: 40,
        minimumValue: 0.1,
        sync: false,
      },
    },
    collisions: {
      enable: true,
      mode: "destroy",
    },
    move: {
      enable: true,
      speed: 7,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  detectRetina: true,
}); // HOME PAGE SLIDING BOXES & ANIMATED BG COMPLETE //

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


// Scroll animation for UI reveal
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-reveal");
  elements.forEach((el) => {
    const topPos = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (topPos < windowHeight - 100) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
});

// Scroll effect on hover for event, news, and calendar sections
const scrollBoxes = document.querySelectorAll(".scroll-box");

scrollBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.overflowY = "auto";
  });

  box.addEventListener("mouseleave", () => {
    box.style.overflowY = "hidden";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelectorAll('.navbar li');

  dropdown.forEach(item => {
    item.addEventListener('click', function(e) {
      const dropdownContent = this.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        e.stopPropagation(); // Prevent click event from bubbling up
      }
    });
  });

  // Hide dropdowns when clicking outside
  document.addEventListener('click', function() {
    dropdown.forEach(item => {
      const dropdownContent = item.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.display = 'none';
      }
    });
  });
});
document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', event => {
    const dropdownContent = item.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
});

// Optionally, close dropdown if clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown > a')) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  }
});

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
});




