function changeBackgroundColor() {
    const colors = ['#ffffff', '#787878', '#2e2e2e'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-US');
    document.getElementById('dateTime').textContent = `${formattedDate}, ${formattedTime}`;
}
setInterval(updateDateTime, 1000);

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = ''; 

    if (!email.includes('@')) {
        errorMessage.innerHTML = 'Please enter a valid email address';
        e.preventDefault();
    }
});

function addTask() {
    const taskText = document.getElementById('newTask').value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('list-group-item');
    taskList.appendChild(li);
}

function sortNumbers(order) {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        alert('Please enter valid numbers');
        return;
    }
    const sortedNumbers = numbers.sort((a, b) => (order === 'asc' ? a - b : b - a));
    document.getElementById('sortedOutput').textContent = sortedNumbers.join(', ');
}
function updateGreeting() {
    const nameInput = document.querySelector('#nameInput').value;
    const greeting = nameInput ? `Hello, ${nameInput}!` : 'Hello!';
    document.querySelector('#greeting').textContent = greeting;
}

function validateContactForm(e) {
    e.preventDefault();
    
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const errorMessage = document.querySelector('#error-message');
    const successMessage = document.querySelector('#success-message');
    
    errorMessage.textContent = '';
    successMessage.textContent = '';

    const emailValid = email.includes('@');
    const nameValid = name.length > 0;
    
    if (!nameValid || !emailValid) {
        errorMessage.textContent = 'Please provide a valid name and email.';
    } else {
        successMessage.textContent = 'Form submitted successfully!';
        document.querySelector('#contactForm').reset(); 
    }
}

document.querySelector('#bgColorButton').addEventListener('click', changeBackgroundColor);
document.querySelector('#updateGreetingButton').addEventListener('click', updateGreeting);
document.querySelector('#contactForm')?.addEventListener('submit', validateContactForm);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        changeBackgroundColor();
    }
});