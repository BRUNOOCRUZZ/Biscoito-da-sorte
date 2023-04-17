const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const cookieLuck = document.querySelector("#cookieLuck");
const msgLuck = document.querySelector("#msgLuck");
const btnTry = document.querySelector("#btnOpenCookie");

cookieLuck.addEventListener("click", handleOpenCookie);
btnTry.addEventListener("click", handleOpenCookie);

function handleOpenCookie (event) {
  event.preventDefault();

  toggleScreen();
}

const toggleScreen = () => {
  page1.classList.toggle("hide");
  page2.classList.toggle("hide");
  msgLuck.classList.toggle("hide");
};