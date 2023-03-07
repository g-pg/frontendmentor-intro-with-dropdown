// Cada dropdown li contém o botão e o menu dropdown respectivo
// Quando a li tem a classe "active", os estilos dos children são aplicados pelos seletores no CSS

const dropdownBtn = document.querySelectorAll(".nav-dropdown-btn");

dropdownBtn.forEach((el) => {
	const dropdownLi = el.parentNode;

	el.addEventListener("click", () => {
		dropdownLi.classList.toggle("active");

		if (!dropdownLi.classList.contains("burger")) {
			document.querySelectorAll(".nav-dropdown-li.active").forEach((li) => {
				if (li != dropdownLi) {
					li.classList.remove("active");
				}
			});
		}
	});
});

document.addEventListener("click", (e) => {
	if (e.target.closest(".nav-dropdown-li")) return;

	document.querySelectorAll(".nav-dropdown-li").forEach((el) => {
		el.classList.remove("active");
	});
});

// Burger nav
const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".burger-close-btn");

burgerBtn.addEventListener("click", () => {
	burgerBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	burgerBtn.classList.remove("active");
});

document.addEventListener("click", (e) => {
	if (!e.target.closest(".burger-main-nav-wrapper") && e.target != burgerBtn) {
		burgerBtn.classList.remove("active");
	}
});

// Mobile adjustments
const introImg = document.querySelector(".intro-img");

window.addEventListener("resize", () => {
	if (window.innerWidth <= 780) {
		introImg.src = "./assets/img/image-hero-mobile.png";
	} else {
		burgerBtn.classList.remove("active");
		introImg.src = "./assets/img/image-hero-desktop.png";
	}
});
