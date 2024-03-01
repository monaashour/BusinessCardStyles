toggleThemeButton = document.querySelector('#toggle-theme-button');
themeStylesheet = document.querySelector('#theme-stylesheet');
images = document.querySelectorAll('img');
toggleTextLabel = document.querySelector('.toggleText');


themeSheets = {
    light: '/static/styles/light.css',
    dark: '/static/styles/dark.css',
}

function toggleTheme(e) {
    if (themeStylesheet.href == window.location.origin + themeSheets.dark) {
        themeStylesheet.href = themeSheets.light;
        toggleTextLabel.innerText = 'Dark Mode';
        images.forEach((img)=>{img.src = img.src.replace('BC_Black', 'BC_White')});
	document.body.style.backgroundColor = 'white';
    }
    else {
        themeStylesheet.href = themeSheets.dark;
        toggleTextLabel.innerText = 'Light Mode';
        images.forEach((img)=>{img.src = img.src.replace('BC_White', 'BC_Black')});
        document.body.style.backgroundColor = 'black';
    }
    return false;
}

toggleThemeButton.addEventListener('click', toggleTheme);
