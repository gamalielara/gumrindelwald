const toggleButton = [document.getElementById('hamburger-button'), document.getElementById('close-full-menu-button')];
const fullMenu = document.getElementById('full-menu');

toggleButton.forEach(button => button.addEventListener('click', () => fullMenu.classList.toggle('hidden')));