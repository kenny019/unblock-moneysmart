const mainElement = document.querySelector('main');
const articleContainer = document.querySelector('.article');

if (mainElement) {
    mainElement.style.filter = "none";
    mainElement.style.animation = "none";
}

document.addEventListener("scroll", () => {
    const articleHeight = articleContainer.clientHeight;
    const blurThreshold = 50 / 100 * articleHeight;
    if (window.scrollY >= blurThreshold) {

        const loginWallElement = document.querySelector('.login-wall');
        if (loginWallElement) {
            loginWallElement.style.display = "none";
        }
        mainElement.style.filter = "none";
        mainElement.style.animation = "none";
    }
})