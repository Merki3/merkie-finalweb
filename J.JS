var typed = new Typed(".text", {
    strings: ["Computer Science Student", "1st Year Student", "Aspiring Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelectorAll('.bar').forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    const progressLine = bar.querySelector('.progress-line span');
    
    bar.addEventListener('mouseover', () => {
        progressLine.style.width = percentage; // Animate to the specified percentage
    });

    bar.addEventListener('mouseout', () => {
        progressLine.style.width = '0'; // Reset on mouse out
    });
});