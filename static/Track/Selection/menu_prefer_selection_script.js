document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.selection-box');
    const highlightBox = document.getElementById('highlight-box');
    const footerBackground = document.createElement('div');
    footerBackground.className = 'footer-background';
    document.body.appendChild(footerBackground);

    boxes.forEach(box => {
        box.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.toggle('selected');
        });
    });

    highlightBox.addEventListener('click', function(event) {
        const selectedPreferences = [];
        document.querySelectorAll('.selection-box.selected').forEach(box => {
            selectedPreferences.push(box.getAttribute('data-prefer'));
        });
        if (selectedPreferences.length > 0) {
            window.location.href = `/restaurant_selection${window.location.search}&preferences=${encodeURIComponent(selectedPreferences.join(','))}`;
        } else {
            alert('적어도 하나의 음식을 선택하세요.');
        }
    });
});
