(function () {
	var root = document.documentElement;
	var toggle = document.querySelector(".theme-toggle");
	var storedTheme = null;

	try {
		storedTheme = localStorage.getItem("theme");
	} catch (error) {
		storedTheme = null;
	}

var theme = storedTheme || "dark";

	function applyTheme(nextTheme) {
		root.dataset.theme = nextTheme;

		if (!toggle) {
			return;
		}

		toggle.setAttribute("aria-pressed", nextTheme === "dark");
		toggle.setAttribute(
			"aria-label",
			nextTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
		);
	}

	applyTheme(theme);

	if (!toggle) {
		return;
	}

	toggle.addEventListener("click", function () {
		var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

		try {
			localStorage.setItem("theme", nextTheme);
		} catch (error) {
			// The theme still changes even when preference storage is unavailable.
		}

		applyTheme(nextTheme);
	});
})();
