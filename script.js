const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark')
    ? 'Light Mode'
    : 'Dark Mode';
});

const editBtn = document.getElementById('editBtn');
const aboutText = document.getElementById('aboutText');
let isEditing = false;

editBtn.addEventListener('click', () => {
  isEditing = !isEditing;
  aboutText.contentEditable = isEditing;
  editBtn.textContent = isEditing ? 'Save' : 'Edit';
  if (isEditing) {
    aboutText.focus();
    aboutText.style.border = '1px solid var(--accent-color)';
    aboutText.style.padding = '5px';
  } else {
    aboutText.style.border = 'none';
    aboutText.style.padding = '0';
  }
});
