const bodyElement = document.querySelector('body');
const changeThemeBtn = document.querySelector('.theme-toggle');

changeThemeBtn.addEventListener('click', () => {
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.replace('light-theme','dark-theme');
        changeThemeBtn.classList.add('active');
    } else  {
        bodyElement.classList.replace('dark-theme', 'light-theme');
        changeThemeBtn.classList.remove('active');
    }
});