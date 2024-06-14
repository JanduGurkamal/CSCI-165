document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded');

    const schoolNameElement = document.getElementById('school-name');
    schoolNameElement.addEventListener('animationend', (event) => {
        if (event.animationName === 'typing') {
            schoolNameElement.classList.add('typing-finished');
        }
    });
});
