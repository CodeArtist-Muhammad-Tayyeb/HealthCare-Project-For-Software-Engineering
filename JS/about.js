const indicators = document.querySelectorAll('.indicator');
const title = document.getElementById('testimonial-title');
const author = document.getElementById('testimonial-author');
const text = document.getElementById('testimonial-text');


function updateTestimonial(indicator) {
    const newTitle = indicator.dataset.title;
    const newAuthor = indicator.dataset.author;
    const newText = indicator.dataset.text;


    title.textContent = newTitle;
    author.textContent = newAuthor;
    text.textContent = newText;

    
    indicators.forEach(ind => ind.classList.remove('active'));
    indicator.classList.add('active');
}


indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        updateTestimonial(indicator);

        
        clearInterval(autoChangeInterval);
        autoChangeInterval = setInterval(autoChangeTestimonial, 3000);
    });
});


let currentIndex = 0;
function autoChangeTestimonial() {
    currentIndex = (currentIndex + 1) % indicators.length; 
    updateTestimonial(indicators[currentIndex]);
}


let autoChangeInterval = setInterval(autoChangeTestimonial, 3000);
window.onload = function() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector(".nav");
  
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
  function toggleMenu() {
    const menu = document.getElementById("menu");
    
    // Toggle the visibility of the menu when the hamburger icon is clicked
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // Show the menu
    } else {
        menu.style.display = "none"; // Hide the menu
    }
}

function navigate(event, section) {
    const menu = document.getElementById("menu");
    menu.style.display = "none"; // Hide the menu after the link is clicked
}
