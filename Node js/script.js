let hamburger=document.getElementById('hamburger');
let navbar=document.getElementById('navbar')
hamburger.onclick=function () {
	if (navbar.classList.contains("animation")) {
		navbar.classList.remove("animation")
		navbar.classList.add("animation2")
	}
	else {
		navbar.classList.remove("animation2")
		navbar.classList.add("animation")
	}
}