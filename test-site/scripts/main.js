const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png")
    myImage.setAttribute("src", "images/firefox2.png");
  else myImage.setAttribute("src", "images/firefox.png");
};

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function getAndSetUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) getAndSetUserName();
  else {
    localStorage.setItem("name", myName);
    setUserName();
  }
}

function setUserName() {
  myHeading.textContent = `What is Mozilla, ${localStorage.getItem("name")}?`;
}

myButton.onclick = () => getAndSetUserName();

if (!localStorage.getItem("name")) getAndSetUserName();
else {
  setUserName();
}
