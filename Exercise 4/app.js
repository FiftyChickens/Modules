async function setTheme() {
    const themeModule = await import("./theme.mjs");
    const currentHour = new Date().getHours();

    if (currentHour < 18) {
        themeModule.setLightTheme();
    } else {
        themeModule.setDarkTheme();
    }
}

console.log("Ex 4.");

setTheme();
