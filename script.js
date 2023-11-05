const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", () => {
        window.location.href = "Login Form.html"; // Replace with the actual URL of the destination page
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("generateIdeaButton");

    loginButton.addEventListener("click", () => {
        window.location.href = "idea.html"; // Replace with the actual URL of the destination page
    });
});







