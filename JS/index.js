  function createCard({ image, title, description, moreLink, speclization }) {
    const card = document.createElement('div');
    card.className = 'card-sec4';
  
    card.innerHTML = `
      <img src="${image}" alt="${title}">
      <div class="card-content">
        <h2>${title} <br> <span class="speclization-sec4"> ${speclization} </span></h2>
        <p>${description} <a href="${moreLink}" class="read-more-link">Read More...</a></p>
      </div>
    `;
  
    return card;
  }
  
  // Example usage
  const cardData = [
    {
      image: './asset/doc-6.jpg',
      title: 'Cardiologist',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum',
      moreLink: './doctors-cards.html', // Link for "Read More..."
      speclization: 'MBBS'
    },
    {
      image: './asset/doc-2.jpg',
      title: 'Neurologist',
      description: 'Exploring the complexities of the human brain and nervous system',
      moreLink: './doctors-cards.html', // Link for "Read More..."
      speclization: 'Cardiologist'
    },
    {
      image: './asset/doc-6.jpg',
      title: 'Orthopedics',
      description: 'Specializing in the treatment of bones and joints',
      moreLink: './doctors-cards.html', // Link for "Read More..."
      speclization: 'Orthopedics'
    }
  ];
  
  const cardContainer = document.getElementById('card-container');
  
  // Add cards to the container
  cardData.forEach(data => {
    const card = createCard(data);
    cardContainer.appendChild(card);
  });
  
  // Get the hamburger and nav elements
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


function submitting(){
  alert('Response Successfully submitted');
}