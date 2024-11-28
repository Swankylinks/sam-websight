// Enable smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Highlight expertise skills on hover
const skills = document.querySelectorAll('.skills_list li');
skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.color = '#0077b6';
    skill.style.fontWeight = 'bold';
    skill.style.transform = 'scale(1.1)';
    skill.style.transition = 'all 0.2s ease-in-out';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.color = '';
    skill.style.fontWeight = '';
    skill.style.transform = '';
  });
});

// Copy contact info to clipboard
const contactDetails = document.querySelectorAll('.contact_info p');
contactDetails.forEach(detail => {
  detail.addEventListener('click', () => {
    navigator.clipboard.writeText(detail.textContent).then(() => {
      alert(`Copied to clipboard: ${detail.textContent}`);
    });
  });
});

// Toggle awards section visibility
const awardsSection = document.querySelector('.awards');
const toggleAwardsButton = document.createElement('button');
toggleAwardsButton.textContent = 'Toggle Awards';
toggleAwardsButton.style.cssText = `
  padding: 10px 20px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;
awardsSection.parentElement.insertBefore(toggleAwardsButton, awardsSection);
toggleAwardsButton.addEventListener('click', () => {
  awardsSection.style.display = awardsSection.style.display === 'none' ? 'block' : 'none';
});

// Interactive interests section
const interestItems = document.querySelectorAll('.interest_item');
interestItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    const icon = item.querySelector('i');
    icon.style.color = icon.style.color === 'gold' ? '#333' : 'gold';
  });
});

// Real-time clock display in profile section
const profileContainer = document.querySelector('.profile_container');
const clockElement = document.createElement('p');
clockElement.style.cssText = `
  font-size: 1.2rem;
  margin-top: 10px;
  color: #0077b6;
`;
profileContainer.appendChild(clockElement);
setInterval(() => {
  const now = new Date();
  clockElement.textContent = `Current Time: ${now.toLocaleTimeString()}`;
}, 1000);

// Animate social icons on hover
const socialLinks = document.querySelectorAll('.social_item');
socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#ff8800';
    link.style.fontWeight = 'bold';
    link.style.transform = 'scale(1.1)';
    link.style.transition = 'all 0.3s ease';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = '';
    link.style.fontWeight = '';
    link.style.transform = '';
  });
});

