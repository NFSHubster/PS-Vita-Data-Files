document.addEventListener('DOMContentLoaded', function() {
    const drawer = document.querySelector('.drawer-header-actions');
    const openButton = drawer.nextElementSibling;
    const closeButton = drawer.querySelector('sl-button[variant="primary"]');
    const newWindowButton = drawer.querySelector('.new-window');

    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());
    newWindowButton.addEventListener('click', () => window.open(location.href));
});