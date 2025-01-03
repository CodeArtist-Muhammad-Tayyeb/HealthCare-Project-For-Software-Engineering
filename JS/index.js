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
      moreLink: './cardiology-details.html', // Link for "Read More..."
      speclization: 'MBBS'
    },
    {
      image: './asset/doc-2.jpg',
      title: 'Neurologist',
      description: 'Exploring the complexities of the human brain and nervous system',
      moreLink: './neurology-details.html', // Link for "Read More..."
      speclization: 'Cardiologist'
    },
    {
      image: './asset/doc-6.jpg',
      title: 'Orthopedics',
      description: 'Specializing in the treatment of bones and joints',
      moreLink: './orthopedics-details.html', // Link for "Read More..."
      speclization: 'Orthopedics'
    }
  ];
  
  const cardContainer = document.getElementById('card-container');
  
  // Add cards to the container
  cardData.forEach(data => {
    const card = createCard(data);
    cardContainer.appendChild(card);
  });
  