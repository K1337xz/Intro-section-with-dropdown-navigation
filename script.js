const menu = document.querySelector(".drpmenu");
const dropDown = document.querySelector(".dropdown");
const secMenu = document.querySelector(".second");
const secDown = document.querySelector(".seconddrop");
const del = document.querySelector(".container");
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
