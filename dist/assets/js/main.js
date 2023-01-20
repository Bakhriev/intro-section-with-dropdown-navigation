const switchBtn = document.querySelector(".switch-button")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
const checkbox = switchBtn.querySelector("[aria-checked]")

document.addEventListener("DOMContentLoaded", () => {
	console.log(prefersDarkScheme.matches)
	if (prefersDarkScheme.matches) {
		console.log(123)
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
	const menu = document.querySelector(".menu")
	const overlay = document.querySelector(".overlay")

	burger.addEventListener("click", () => {
		menu.classList.toggle("active")
		burger.classList.toggle("active")
		overlay.classList.toggle("overlay-active")
	})
	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("active")
			burger.classList.remove("active")
			overlay.classList.remove("overlay-active")
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