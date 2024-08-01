document.addEventListener('DOMContentLoaded', function() {
    const tracks = document.querySelectorAll('.track');
    const highlightBox = document.getElementById('highlight-box');
    const footerBackground = document.createElement('div');
    footerBackground.className = 'footer-background';
    document.body.appendChild(footerBackground);

    tracks.forEach(track => {
        track.addEventListener('click', function(event) {
            event.stopPropagation(); // 클릭 이벤트 전파 중지
            tracks.forEach(t => t.classList.remove('selected')); // 기존 선택 해제
            this.classList.add('selected'); // 현재 선택된 트랙에 클래스 추가
            highlightBox.style.display = 'flex'; // 네이비 박스 표시
            footerBackground.style.display = 'block'; // 흰색 배경 표시
        });
    });

    highlightBox.addEventListener('click', function(event) {
        alert('푸른 박스 클릭됨!');
    });

    document.addEventListener('click', function(event) {
        if (!highlightBox.contains(event.target) && !Array.from(tracks).some(track => track.contains(event.target))) {
            highlightBox.style.display = 'none';
            footerBackground.style.display = 'none'; // 흰색 배경 숨기기
        }
    });
});
