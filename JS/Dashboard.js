document.addEventListener('DOMContentLoaded', function() {
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('show-sidebar'); // Toggle the 'show-sidebar' class
        });
    }
});
