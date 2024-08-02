document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const people = urlParams.get('people');

    const categories = {
        '1명': ['혼자'],
        '2명': ['가족', '친구', '연인', '기타'],
        '3명': ['가족', '친구', '기타'],
        '4명': ['가족', '친구', '기타'],
        '5명': ['가족', '친구', '기타'],
        '6명': ['가족', '친구', '기타'],
        '7명 이상': ['가족', '친구', '기타', '단체']
    };

    const boxes = document.querySelectorAll('.selection-box');
    const highlightBox = document.getElementById('highlight-box');
    const footerBackground = document.createElement('div');
    footerBackground.className = 'footer-background';
    document.body.appendChild(footerBackground);

    boxes.forEach(box => {
        if (!categories[people].includes(box.getAttribute('data-category'))) {
            box.style.display = 'none';
        }
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
            const category = selectedBox.getAttribute('data-category');
            window.location.href = `/tempo_selection${window.location.search}&category=${encodeURIComponent(category)}`;
        }
    });
});
