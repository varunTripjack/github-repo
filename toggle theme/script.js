const btn = document.querySelector(".toggle-theme");
const body = document.body;


function applyTheme(){
    const darkMode = localStorage.getItem('theme') === 'dark-mode';
    if(darkMode){
        body.classList.add('dark-mode');
        btn.textContent = "Switch to Light Mode";
    }else{
        body.classList.remove('dark-mode');
        btn.textContent = "Switch to Dark Mode";
    }
}

btn.addEventListener("click", () => {
    console.log(body.classList);
    if(body.classList.contains('dark-mode')){
        body.classList.remove("dark-mode");
        btn.textContent = "Switch to Dark Mode";
        localStorage.setItem('theme', 'light-mode');
    }else{
        body.classList.add("dark-mode");
        btn.textContent = "Switch to Light Mode";
        localStorage.setItem('theme', 'dark-mode');
    }
});


applyTheme();

