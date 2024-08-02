document.addEventListener('DOMContentLoaded', function() {
    const tracks = document.querySelectorAll('.track');
    const highlightBox = document.getElementById('highlight-box');
    const footerBackground = document.createElement('div');
    footerBackground.className = 'footer-background';
    document.body.appendChild(footerBackground);

    const detailContainer = document.getElementById('detail-container');
    const detailIframe = document.getElementById('detail-iframe');
    const closeDetailButton = document.getElementById('close-detail');
    const highlightText = document.getElementById('highlight-text');

    tracks.forEach(track => {
        track.addEventListener('click', function(event) {
            event.stopPropagation(); // 클릭 이벤트 전파 중지
            this.classList.toggle('selected'); // 현재 선택된 트랙에 클래스 추가 또는 제거
        });

        const detailButton = track.querySelector('.detail-button');
        detailButton.addEventListener('click', function(event) {
            event.stopPropagation(); // 클릭 이벤트 전파 중지
            const homepage = track.dataset.homepage;
            if (homepage) {
                detailIframe.src = homepage;
                detailContainer.style.display = 'flex';
            }
        });
    });

    closeDetailButton.addEventListener('click', function(event) {
        detailContainer.style.display = 'none';
        detailIframe.src = '';
    });

    highlightBox.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 링크 동작 중지
        const selectedTracks = document.querySelectorAll('.track.selected');
        const addresses = [];
        selectedTracks.forEach(track => {
            const address = track.dataset.address; // 트랙의 주소 데이터 속성 가져오기
            if (address) {
                addresses.push(address);
            }
        });
        const queryString = `address=${encodeURIComponent(JSON.stringify(addresses))}`;
        window.location.href = `/?${queryString}`;
    });
});
