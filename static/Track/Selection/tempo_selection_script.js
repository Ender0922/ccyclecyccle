document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.selection-box');
    const highlightBox = document.getElementById('highlight-box');
    const footerBackground = document.createElement('div');
    footerBackground.className = 'footer-background';
    document.body.appendChild(footerBackground);

    boxes.forEach(box => {
        box.addEventListener('click', function(event) {
            event.stopPropagation();
            boxes.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            highlightBox.style.display = 'flex';
            footerBackground.style.display = 'block';
        });
    });

    highlightBox.addEventListener('click', function(event) {
        const selectedBox = document.querySelector('.selection-box.selected');
        if (selectedBox) {
            const tempo = selectedBox.getAttribute('data-tempo');
            window.location.href = `/date_selection${window.location.search}&tempo=${encodeURIComponent(tempo)}`;
        }
    });
});
