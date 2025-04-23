document.addEventListener('DOMContentLoaded', function() {
    const experienceItems = document.querySelectorAll('.experience-list li');

    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const details = this.querySelector('.experience-details');
            details.style.maxHeight = details.scrollHeight + 'px';
            details.style.opacity = '1';
        });

        item.addEventListener('mouseleave', function() {
            const details = this.querySelector('.experience-details');
            details.style.maxHeight = '0';
            details.style.opacity = '0';
        });
    });
});

function toggleMode() {
    const body = document.body;
    const toggleButton = document.getElementById('mode-toggle');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Dark Mode';
    } else {
        toggleButton.textContent = 'Light Mode';
    }
}

