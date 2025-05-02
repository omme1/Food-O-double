// Team Data
const teamMembers = [
    {
        name: "Parisa",
        role: "Boss of the company",
        emoji: "👑"
    },
    {
        name: "Samiyah",
        role: "Manager",
        emoji: "📊"
    },
    {
        name: "Lilly",
        role: "Artist",
        emoji: "🎨"
    },
    {
        name: "JJ",
        role: "Computer Person",
        emoji: "💻"
    },
    {
        name: "Aiden",
        role: "Speaker",
        emoji: "🎤"
    },
    {
        name: "Miles",
        role: "Writer",
        emoji: "✍️"
    }
];

// DOM Elements
const teamContainer = document.getElementById('teamContainer');
const productAnimation = document.getElementById('productAnimation');
const learnMoreBtn = document.getElementById('learnMoreBtn');
const contactForm = document.getElementById('contactForm');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load team members
    renderTeamMembers();
    
    // Set up event listeners
    setupEventListeners();
    
    // Start animation
    startFoodAnimation();
});

function renderTeamMembers() {
    teamContainer.innerHTML = teamMembers.map(member => `
        <div class="team-member">
            <div class="member-image">
                ${member.emoji}
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p class="member-role">${member.role}</p>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    // Learn more button
    learnMoreBtn.addEventListener('click', function() {
        document.getElementById('solution').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

function startFoodAnimation() {
    const foodItems = productAnimation.querySelectorAll('.food-item');
    const arrow = productAnimation.querySelector('.arrow');
    
    setInterval(() => {
        // Pulse animation
        foodItems.forEach(item => {
            item.classList.toggle('pulse');
        });
        arrow.classList.toggle('pulse');
        
        // Change food emoji randomly
        if (Math.random() > 0.7) {
            const foods = ['🍔', '🍕', '🌮', '🍎', '🍗', '🍝'];
            const randomFood = foods[Math.floor(Math.random() * foods.length)];
            foodItems[0].textContent = randomFood;
            foodItems[1].textContent = randomFood + randomFood;
        }
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});
