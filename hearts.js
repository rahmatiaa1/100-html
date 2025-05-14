// Create falling hearts effect
document.addEventListener('DOMContentLoaded', function() {
    // Create the container for hearts
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart-container');
    document.body.appendChild(heartContainer);
    
    // Function to create a single heart
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position, size, and animation duration
        const size = Math.random() * 15 + 10; // Between 10px and 25px
        const left = Math.random() * 100; // Percentage across the screen
        const animationDuration = Math.random() * 5 + 3; // Between 3 and 8 seconds
        const opacity = Math.random() * 0.5 + 0.3; // Between 0.3 and 0.8
        
        // Apply random styles
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.opacity = opacity;
        heart.style.animationDuration = `${animationDuration}s`;
        
        // Update the size of the pseudo-elements
        const heartStyle = document.createElement('style');
        heartStyle.textContent = `
          .heart[style*="width: ${size}px"]::before,
          .heart[style*="width: ${size}px"]::after {
            width: ${size}px;
            height: ${size}px;
          }
          .heart[style*="width: ${size}px"]::before {
            top: -${size/2}px;
          }
          .heart[style*="width: ${size}px"]::after {
            left: -${size/2}px;
          }
        `;
        document.head.appendChild(heartStyle);
        
        // Add to container
        heartContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
            heartStyle.remove();
        }, animationDuration * 1000); // Convert to milliseconds
    }
    
    // Create new hearts periodically
    setInterval(createHeart, 300); // Create a new heart every 300ms
    
    // Create initial hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 300);
    }
});

// Add a toggle button to turn hearts on/off
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '❤️ Toggle Hearts';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.zIndex = '1000';
    toggleButton.style.padding = '10px 15px';
    toggleButton.style.backgroundColor = '#a66fa0';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '25px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.boxShadow = '0 3px 6px rgba(0,0,0,0.1)';
    
    let heartsActive = true;
    
    toggleButton.addEventListener('click', function() {
        const heartContainer = document.querySelector('.heart-container');
        if (heartsActive) {
            heartContainer.style.display = 'none';
            toggleButton.innerHTML = '🖤 Enable Hearts';
        } else {
            heartContainer.style.display = 'block';
            toggleButton.innerHTML = '❤️ Disable Hearts';
        }
        heartsActive = !heartsActive;
    });
    
    document.body.appendChild(toggleButton);
});