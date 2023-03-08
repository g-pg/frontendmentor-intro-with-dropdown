//Desktop nav
const dropdownBtns = document.querySelectorAll(".nav-dropdown-btn");

dropdownBtns.forEach((el) => {
	const dropdownMenu = el.parentNode;

	el.addEventListener("click", () => {
		dropdownMenu.classList.toggle("active");

		if (!dropdownMenu.classList.contains("burger")) {
			document.querySelectorAll(".nav-dropdown-li.active").forEach((li) => {
				if (li != dropdownMenu) {
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
	if (burgerBtn.classList.contains("active")) {
		document.body.style.overflow = "hidden";
	}
});

closeBtn.addEventListener("click", () => {
	burgerBtn.classList.remove("active");
	if (!burgerBtn.classList.contains("active")) {
		document.body.style.overflow = "unset";
	}
});

document.addEventListener("click", (e) => {
	if (!e.target.closest(".burger-main-nav-wrapper") && e.target != burgerBtn) {
		burgerBtn.classList.remove("active");
	}
});

// Mobile adjustments
// const introImg = document.querySelector(".intro-img");

// window.addEventListener("resize", () => {
// 	if (window.innerWidth <= 780) {
// 		introImg.src = "./assets/img/image-hero-mobile.png";
// 	} else {
// 		burgerBtn.classList.remove("active");
// 		introImg.src = "./assets/img/image-hero-desktop.png";
// 	}
// });
