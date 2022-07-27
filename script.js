const menu = document.querySelector(".drpmenu");
const dropDown = document.querySelector(".dropdown");
const secMenu = document.querySelector(".second");
const secDown = document.querySelector(".seconddrop");
const del = document.querySelector(".container");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
const navMen = document.querySelector("nav > .menu");
const hamb = document.querySelector(".hamburger");

function openMenu() {
	dropDown.classList.toggle("active");
	if (secDown.classList.contains("active")) {
		secDown.classList.remove("active");
	}
}
function openSecond() {
	secDown.classList.toggle("active");
	if (dropDown.classList.contains("active")) {
		dropDown.classList.remove("active");
	}
}
function delactiv() {
	secDown.classList.remove("active");
	dropDown.classList.remove("active");
}
menu.addEventListener("click", openMenu);
secMenu.addEventListener("click", openSecond);
del.addEventListener("click", delactiv);

//open menu
function openMobile() {
	nav.style.setProperty("overflow", "visible");
	navMen.style.setProperty("right", "0");
	closeMenu.style.setProperty("display", "block");
}

//close menu function
function closeMobile() {
	nav.style.setProperty("overflow", "hidden");
	navMen.style.setProperty("right", "-999px");
	closeMenu.style.setProperty("display", "none");
}

closeMenu.addEventListener("click", closeMobile);
hamb.addEventListener("click", openMobile);
