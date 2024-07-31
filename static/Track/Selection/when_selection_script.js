document.addEventListener('DOMContentLoaded', function() {
    const highlightBox = document.getElementById('highlight-box');
    const footerBackground = document.createElement('div');
    footerBackground.className = 'footer-background';
    document.body.appendChild(footerBackground);

    const timeSlots = document.querySelectorAll('.time-slot');
    const selectedTimeBox = document.getElementById('selected-time-box');
    let selectedStartTime = null;
    let selectedEndTime = null;

    const urlParams = new URLSearchParams(window.location.search);
    const timeRange = urlParams.get('time');
    
    let startTime, endTime;
    if (timeRange === '1시간 미만') {
        startTime = 0;
        endTime = 1;
    } else {
        const timeRangeParts = timeRange.split(' ~ ');
        startTime = parseInt(timeRangeParts[0].replace('시간', '').trim());
        endTime = parseInt(timeRangeParts[1].replace('시간', '').trim());
    }

    function resetSelection() {
        timeSlots.forEach(slot => slot.classList.remove('selected'));
        selectedStartTime = null;
        selectedEndTime = null;
        selectedTimeBox.textContent = '선택한 시간: 없음';
    }

    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            if (selectedStartTime === null) {
                selectedStartTime = parseInt(this.dataset.time);
                selectedEndTime = selectedStartTime + endTime;
                for (let i = selectedStartTime; i < selectedEndTime; i++) {
                    document.querySelector(`.time-slot[data-time="${i}"]`).classList.add('selected');
                }
                selectedTimeBox.textContent = `선택한 시간: ${selectedStartTime}시 ~ ${selectedEndTime}시`;
            } else {
                resetSelection();
            }
        });
    });

    highlightBox.addEventListener('click', function(event) {
        if (selectedStartTime !== null) {
            alert(`선택된 시간: ${selectedStartTime}시 ~ ${selectedEndTime}시`);
        } else {
            alert("시간을 선택해주세요.");
        }
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
