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
      specialization: 'MBBS'
    },
    {
      image: './asset/doc-2.jpg',
      title: 'Neurologist',
      description: 'Exploring the complexities of the human brain and nervous system',
      moreLink: './neurology-details.html', // Link for "Read More..."
      specialization: 'Neurology'
    },
    {
      image: './asset/doc-6.jpg',
      title: 'Orthopedist',
      description: 'Specializing in the treatment of bones and joints',
      moreLink: './orthopedics-details.html', // Link for "Read More..."
      specialization: 'Orthopedics'
    },
    {
      image: './asset/doc-2.jpg',
      title: 'Dermatologist',
      description: 'Specializing in skin, hair, and nail conditions',
      moreLink: './dermatology-details.html', // Link for "Read More..."
      specialization: 'Dermatology'
    },
    {
      image: './asset/doc-6.jpg',
      title: 'Pediatrician',
      description: 'Providing specialized care for infants and children',
      moreLink: './pediatrics-details.html', // Link for "Read More..."
      specialization: 'Pediatrics'
    },
    {
      image: './asset/doc-2.jpg',
      title: 'Endocrinologist',
      description: 'Treating hormonal imbalances and related disorders',
      moreLink: './endocrinology-details.html', // Link for "Read More..."
      specialization: 'Endocrinology'
    },
    {
      image: './asset/doc-6.jpg',
      title: 'Oncologist',
      description: 'Specialized in cancer diagnosis and treatment',
      moreLink: './oncology-details.html', // Link for "Read More..."
      specialization: 'Oncology'
    },
    {
      image: './asset/doc-2.jpg',
      title: 'Pulmonologist',
      description: 'Specialist in lung and respiratory diseases',
      moreLink: './pulmonology-details.html', // Link for "Read More..."
      specialization: 'Pulmonology'
    },
    {
      image: './asset/doc-6.jpg',
      title: 'Nephrologist',
      description: 'Specialist in kidney health and diseases',
      moreLink: './nephrology-details.html', // Link for "Read More..."
      specialization: 'Nephrology'
    },
    {
      image: './asset/doc-2.jpg',
      title: 'Psychiatrist',
      description: 'Focuses on mental health and behavioral disorders',
      moreLink: './psychiatry-details.html', // Link for "Read More..."
      specialization: 'Psychiatry'
    }
      
  ];
  
  const cardContainer = document.getElementById('card-container');
  
  // Add cards to the container
  cardData.forEach(data => {
    const card = createCard(data);
    cardContainer.appendChild(card);
  });
  