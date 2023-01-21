const switchBtn = document.querySelector(".switch-button")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
const checkbox = switchBtn.querySelector("[aria-checked]")
const dropdownsMobile = document.querySelectorAll(".dropdown-mobile")

dropdownsMobile.forEach(dropdownMobile => {
	dropdownMobile.addEventListener("click", e => {
		const mobileSubMenu = dropdownMobile.querySelector(".sub-menu-mobile")
		if (!mobileSubMenu.style.maxHeight) {
			mobileSubMenu.style.maxHeight = mobileSubMenu.scrollHeight + "px"
		} else if (
			e.target.closest(".sub-menu__item") &&
			mobileSubMenu.style.maxHeight
		) {
		} else {
			mobileSubMenu.style.maxHeight = ""
		}
	})
})

document.addEventListener("DOMContentLoaded", () => {
	if (prefersDarkScheme.matches) {
		checkbox.setAttribute("aria-checked", true)
		document.body.classList.add("dark")
	} else {
		checkbox.setAttribute("aria-checked", false)
		document.body.classList.remove("dark")
	}
})

switchBtn.addEventListener("click", () => {
	const checkbox = switchBtn.querySelector("[aria-checked]")

	if (checkbox.ariaChecked === "false") {
		checkbox.setAttribute("aria-checked", true)
		document.body.classList.add("dark")
	} else {
		checkbox.setAttribute("aria-checked", false)
		document.body.classList.remove("dark")
	}
})

function burgerMenu() {
	const burger = document.querySelector(".burger")
	const navbar = document.querySelector(".header__navigation")
	const overlay = document.querySelector(".overlay")

	burger.addEventListener("click", () => {
		burger.classList.toggle("active")
		overlay.classList.toggle("overlay-active")
		navbar.classList.toggle("active")
		document.body.classList.toggle("locked")
	})

	overlay.addEventListener("click", () => {
		navbar.classList.remove("active")
		overlay.classList.remove("overlay-active")
		burger.classList.remove("active")
		document.body.classList.remove("locked")
	})

	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			burger.classList.remove("active")
			navbar.classList.remove("active")
			overlay.classList.remove("overlay-active")
			document.body.classList.remove("locked")
		}
	})
}
burgerMenu()

document.addEventListener("click", e => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]")

	// if clicked element === dropdown item don't close dropdown
	if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null) return

	// and if clicked element is dropdownButton so then add active class
	let currentDropdown
	if (isDropdownButton) {
		currentDropdown = e.target.closest("[data-dropdown]")
		currentDropdown.classList.toggle("active")
	}
	//If  clicked another drop-down, then delete the active class from the current drop-down
	document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
		if (dropdown === currentDropdown) return
		dropdown.classList.remove("active")
	})
})