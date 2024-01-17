const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateName);

function updateName() {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}

// Додайте ініційне значення для спану
updateName();