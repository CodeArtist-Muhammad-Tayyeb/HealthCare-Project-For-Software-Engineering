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
