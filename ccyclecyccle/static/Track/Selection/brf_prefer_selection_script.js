document.addEventListener('DOMContentLoaded', function() {
    const preferenceBoxes = document.querySelectorAll('.preference-box');
    const highlightBox = document.getElementById('highlight-box');
    const footerBackground = document.createElement('div');
    footerBackground.className = 'footer-background';
    document.body.appendChild(footerBackground);

    preferenceBoxes.forEach(box => {
        box.addEventListener('click', function(event) {
            this.classList.toggle('selected');
        });
    });

    highlightBox.addEventListener('click', function(event) {
        window.location.href = "/breakfast_selection";
    });

    // 햄버거 메뉴 스크립트
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            sidebar.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});
