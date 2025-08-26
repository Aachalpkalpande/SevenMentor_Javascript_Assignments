

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    
    const submitButton = document.querySelector('form button');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});
