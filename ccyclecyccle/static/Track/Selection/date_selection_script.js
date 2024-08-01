document.addEventListener('DOMContentLoaded', function() {
    const highlightBox = document.getElementById('highlight-box');
    const footerBackground = document.createElement('div');
    footerBackground.className = 'footer-background';
    document.body.appendChild(footerBackground);

    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('month-year');
    const selectedDateBox = document.getElementById('selected-date-box');
    let selectedDate = null;

    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    function renderCalendar(month, year) {
        const firstDay = (new Date(year, month)).getDay();
        const daysInMonth = 32 - new Date(year, month, 32).getDate();
        calendarBody.innerHTML = '';
        monthYear.innerHTML = `${year}년 ${month + 1}월`;

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    const cell = document.createElement('td');
                    cell.textContent = date;
                    cell.addEventListener('click', function() {
                        const selectedCells = calendarBody.querySelectorAll('.selected');
                        selectedCells.forEach(cell => cell.classList.remove('selected'));
                        this.classList.add('selected');
                        selectedDate = new Date(year, month, this.textContent);
                        selectedDateBox.textContent = `선택한 날짜: ${selectedDate.toLocaleDateString()}`;
                    });
                    row.appendChild(cell);
                    date++;
                }
            }

            calendarBody.appendChild(row);
        }
    }

    document.getElementById('prev-month').addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    document.getElementById('next-month').addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    highlightBox.addEventListener('click', function(event) {
        if (selectedDate) {
            window.location.href = `/time_selection?date=${encodeURIComponent(selectedDate.toLocaleDateString())}`;
        } else {
            alert("날짜를 선택해주세요.");
        }
    });

    renderCalendar(currentMonth, currentYear);

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
