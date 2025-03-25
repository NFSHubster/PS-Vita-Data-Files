document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.querySelector('.dialog-focus');
    const input = dialog.querySelector('sl-input');
    const openButton = dialog.nextElementSibling;
    const closeButton = dialog.querySelector('sl-button[slot="footer"]');
  
    openButton.addEventListener('click', () => dialog.show());
    closeButton.addEventListener('click', () => dialog.hide());
});