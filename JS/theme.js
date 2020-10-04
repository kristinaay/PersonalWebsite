function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.className = theme;
}

function changeTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

function startTheme() {
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

startTheme();
