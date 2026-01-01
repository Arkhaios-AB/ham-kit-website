// Theme toggle functionality
(function() {
    const THEME_KEY = 'artisan-ham-kits-theme';
    const themes = ['system', 'light', 'dark'];

    // Get saved theme or default to 'system'
    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || 'system';
    }

    // Apply theme to document
    function applyTheme(theme) {
        const root = document.documentElement;

        if (theme === 'system') {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', theme);
        }

        localStorage.setItem(THEME_KEY, theme);
    }

    // Get next theme in cycle
    function getNextTheme(currentTheme) {
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        return themes[nextIndex];
    }

    // Update button text
    function updateButtonText(button, theme) {
        const labels = {
            'system': 'Theme: System',
            'light': 'Theme: Light',
            'dark': 'Theme: Dark'
        };
        button.textContent = labels[theme];
    }

    // Initialize theme on page load
    function initTheme() {
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);

        // Setup toggle button if it exists
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) {
            updateButtonText(toggleButton, savedTheme);

            toggleButton.addEventListener('click', function() {
                const currentTheme = getSavedTheme();
                const nextTheme = getNextTheme(currentTheme);
                applyTheme(nextTheme);
                updateButtonText(toggleButton, nextTheme);
            });
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();
