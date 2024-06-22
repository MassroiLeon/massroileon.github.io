// Provide countdown data
const data = [
  {
    id: "0000",
    userPro: true,
    displayName: "MassroiLeon 🐧🕊️",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0001",
    userPro: true,
    displayName: "Izumi",
    donated: "8$/24$",
    dueDate: "Jul 8, 2024 00:00:00",
  },
  {
    id: "0002",
    userPro: true,
    displayName: "Hớn Ngủ Khò Khò",
    donated: "161K/540K ?10K",
    dueDate: "Jul 17, 2024 00:00:00",
  },
  {
    id: "0003",
    userPro: true,
    displayName: "Nguyen Truong",
    donated: "225K/540K",
    dueDate: "Aug 10, 2024 00:00:00",
  },
  {
    id: "0004",
    displayName: "Kyukami",
    donated: "0$/24$",
    dueDate: "Feb 9, 2024 00:00:00",
  },
  {
    id: "0005",
    userPro: true,
    displayName: "Vũ Đức",
    donated: "171K/540K",
    dueDate: "Jul 8, 2024 00:00:00",
  },
  {
    id: "0006",
    displayName: "zi7o",
    donated: "0$/24$",
    dueDate: "Feb 15, 2024 00:00:00",
  },
  {
    id: "0007",
    userPro: true,
    displayName: "Lucario",
    donated: "9$/24$",
    dueDate: "Aug 18, 2024 00:00:00",
  },
  {
    id: "0008",
    displayName: "Oreorio",
    donated: "0$/24$",
    dueDate: "Feb 14, 2024 00:00:00",
  },
  {
    id: "0009",
    displayName: "Samson",
    donated: "0$/24$",
    dueDate: "Mar 18, 2024 00:00:00",
  },
  {
    id: "0010",
    displayName: "Cheese",
    donated: "0$/24$",
    dueDate: "Feb 16, 2024 00:00:00",
  },
  {
    id: "0011",
    displayName: "そのRay..",
    userPro: true,
    donated: "5$/24$",
    dueDate: "Jul 26, 2024 00:00:00",
  },
  {
    id: "0012",
    userPro: true,
    displayName: "TTsdzb",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0013",
    displayName: "Sunare Aiko Vt.",
    donated: "0$/24$",
    dueDate: "May 24, 2024 00:00:00",
  },
  {
    id: "0014",
    userPro: true,
    displayName: "San Ngọc",
    donated: "151K/540K",
    dueDate: "Oct 6, 2024 00:00:00",
  },
  {
    id: "0015",
    userPro: true,
    displayName: "Mai Trần Ngọc Anh",
    donated: "135K/540K ?23K",
    Reward : "Win Giveaway Event 07-05 (+1 Month)",
    dueDate: "Sep 6, 2024 00:00:00",
  },
  {
    id: "0016",
    userPro: true,
    displayName: "Rimuru Izanobi",
    donated: "171K/540K",
    dueDate: "Jul 29, 2024 00:00:00",
  },
  {
    id: "0017",
    userPro: true,
    displayName: "Ái Nhi",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0018",
    userPro: true,
    displayName: "Joseph Vu",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0019",
    userPro: true,
    displayName: "Đặng Đạt",
    donated: "141K/540K",
    dueDate: "Jul 16, 2024 00:00:00",
  },
  {
    id: "0020",
    displayName: "Christian Jay",
    donated: "0$/24$",
    dueDate: "Mar 10, 2024 00:00:00",
  },
  {
    id: "0021",
    userPro: true,
    displayName: "lid.n",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0022",
    displayName: "bagelseeker",
    donated: "0$/24$",
    dueDate: "Apr 17, 2024 00:00:00",
  },
  {
    id: "0023",
    displayName: "Re UniuM",
    donated: "2$/24$",
    dueDate: "Mar 23, 2024 00:00:00",
  },
  {
    id: "0024",
    userPro: true,
    displayName: "ok boomber",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0025",
    displayName: "Duy Nguyen Minh Dang",
    donated: "0K/540K",
    dueDate: "Mar 1, 2024 00:00:00",
  },
  {
    id: "0026",
    displayName: "36263572 bili",
    donated: "0$/24$",
    dueDate: "Mar 29, 2024 00:00:00",
  },
  {
    id: "0027",
    displayName: "Zack",
    userPro: true,
    donated: "6$/24$",
    dueDate: "Jul 13, 2024 00:00:00",
  },
  {
    id: "0028",
    userPro: true,
    displayName: "fat ccllcc",
    donated: "6$/24$",
    dueDate: "Jul 1, 2024 00:00:00",
  },
  {
    id: "0029",
    userPro: true,
    displayName: "Moeo",
    Zone: "12-05-2024",
    donated: "149K/540K",
    dueDate: "Aug 12, 2024 00:00:00",
  },
  {
    id: "0030",
    userPro: true,
    displayName: "Haruinnqv.",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0031",
    displayName: "jeong jimin",
    donated: "0$/24$",
    dueDate: "Apr 9, 2024 00:00:00",
  },
  {
    id: "0032",
    displayName: "Airee",
    donated: "2$/24$",
    dueDate: "Apr 10, 2024 00:00:00",
  },
  {
    id: "0033",
    userPro: true,
    displayName: "Korei",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0034",
    userPro: true,
    displayName: "Ka non",
    donated: "6$/24$",
    dueDate: "Jul 16, 2024 00:00:00",
  },
  {
    id: "0035",
    displayName: "Bims",
    donated: "2$/24$",
    dueDate: "Apr 16, 2024 00:00:00",
  },
  {
    id: "0036",
    displayName: "Ch1m Hoèng",
    donated: "50K/540K",
    dueDate: "Apr 20, 2024 00:00:00",
  },
  {
    id: "0037",
    displayName: "Celes Siesta",
    donated: "40K/540K",
    dueDate: "Apr 20, 2024 00:00:00",
  },
  {
    id: "0038",
    displayName: "Lulu Deer",
    donated: "2$/24$ & 2$/24$",
    dueDate: "Apr 21, 2024 00:00:00",
  },
  {
    id: "0039",
    userPro: true,
    displayName: "清风 泡柠檬",
    donated: "16$/24$",
    dueDate: "May 31, 2025 00:00:00",
  },
  {
    id: "0040",
    displayName: "ᕕ(◠ڼ◠)ᕗ",
    donated: "2$/24$",
    dueDate: "Apr 26, 2024 00:00:00",
  },
  {
    id: "0041",
    displayName: "Cooper King",
    donated: "2$/24$",
    dueDate: "Apr 29, 2024 00:00:00",
  },
  {
    id: "0042",
    userPro: true,
    displayName: "Xago 296",
    donated: "4$/24$",
    dueDate: "Jun 2, 2024 00:00:00",
  },
  {
    id: "0043",
    displayName: "愛刃",
    donated: "2$/24$",
    dueDate: "May 3, 2024 00:00:00",
  },
  {
    id: "0044",
    displayName: "A S",
    donated: "2$/24$",
    dueDate: "May 5, 2024 00:00:00",
  },
  {
    id: "0045",
    displayName: "bedmoonl bedmoonl",
    userPro: true,
    donated: "5$/24$",
    dueDate: "Jul 5, 2024 00:00:00",
  },
  {
    id: "0046",
    displayName: "Trofeo Requiem",
    userPro: true,
    donated: "5$/24$",
    dueDate: "Jul 5, 2024 00:00:00",
  },
  {
    id: "0047",
    displayName: "Ybe",
    donated: "2$/24$",
    dueDate: "May 12, 2024 00:00:00",
  },
  {
    id: "0048",
    displayName: "Onyix Veil",
    donated: "2$/24$",
    dueDate: "May 12, 2024 00:00:00",
  },
  {
    id: "0049",
    userPro: true,
    displayName: "廻り",
    donated: "6$/24$",
    dueDate: "Jul 15, 2024 00:00:00",
  },
  {
    id: "0050",
    displayName: "Lý Triệu Huy",
    donated: "105K/540K",
    dueDate: "Jul 15, 2024 00:00:00",
  },
  {
    id: "0051",
    displayName: "beartar Z",
    donated: "2$/24$",
    dueDate: "May 16, 2024 00:00:00",
  },
  {
    id: "0052",
    displayName: "HelloKeqing Hà",
    donated: "130K/540K",
    dueDate: "Aug 19, 2024 00:00:00",
  },
  {
    id: "0053",
    displayName: "jjdbd djzhuz",
    donated: "2$/24$",
    dueDate: "Jun 20, 2024 00:00:00",
  },
  {
    id: "0054",
    displayName: "80742",
    donated: "0$/24$",
    dueDate: "May 20, 2024 00:00:00",
  },
  {
    id: "0055",
    userPro: true,
    displayName: "Li frozen",
    donated: "8$/24$",
    dueDate: "Oct 18, 2024 00:00:00",
  },
  {
    id: "0056",
    userPro: false,
    displayName: "ลิงเล็บขบ Ezymoney",
    donated: "2$/24$",
    dueDate: "Jun 4, 2024 00:00:00",
  },
  {
    id: "0057",
    userPro: false,
    displayName: "DFT1",
    donated: "2$/24$",
    dueDate: "Jun 5, 2024 00:00:00",
  },
  {
    id: "0058",
    userPro: true,
    displayName: "Tùng Tôm",
    donated: "135K/540K",
    dueDate: "Aug 5, 2024 00:00:00",
  },
  {
    id: "0059",
    userPro: false,
    displayName: "Hatura",
    donated: "45K/540K",
    dueDate: "Jun 6, 2024 00:00:00",
  },
  {
    id: "0060",
    userPro: true,
    displayName: "Patrick",
    donated: "6$/24$",
    dueDate: "Sep 16, 2024 00:00:00",
  },
  {
    id: "0061",
    displayName: ". .",
    donated: "2$/24$",
    dueDate: "May 21, 2024 00:00:00",
  },
  {
    id: "0062",
    userPro: true,
    displayName: "Hunk de Various",
    donated: "180K/540K",
    dueDate: "Nov 15, 2024 00:00:00",
  },
  {
    id: "0063",
    userPro: true,
    displayName: "ren",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed."
  },
  {
    id: "0064",
    userPro: false,
    displayName: "TreystF75",
    donated: "2$/24$",
    dueDate: "Jul 31, 2024 00:00:00",
  },
  {
    id: "0065",
    userPro: true,
    displayName: "Lapoz",
    donated: "8$/24$",
    dueDate: "Nov 30, 2024 00:00:00",
  },
  {
    id: "0066",
    userPro: false,
    displayName: "Jansen Su",
    donated: "2$/24$",
    dueDate: "Jul 7, 2024 00:00:00",
  },
  {
    id: "0067",
    userPro: true,
    displayName: "Yumi Sayuri",
    donated: "Received LifeTime Privileges ⚙<p>Time remaining: Until the server is completely closed.",
  },
  {
    id: "0068",
    userPro: false,
    displayName: "Nhật Huy",
    donated: "40K/540K",
    dueDate: "Jul 11, 2024 00:00:00",
  },
  {
    id: "0069",
    userPro: false,
    displayName: "Duy Anh",
    donated: "40K/540K",
    dueDate: "Jul 12, 2024 00:00:00",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const countdownContainer = document.getElementById('countdown-container');
  const filterElement = document.getElementById('isProFilter');

  function renderCountdowns(filter) {
    countdownContainer.innerHTML = '';
    const now = new Date().getTime();
  
    const filteredData = data.filter(user => {
      if (filter === 'pro') return user.userPro;
      if (filter === 'nonPro') return !user.userPro;
      if (filter === 'LifeTime') return user.dueDate === undefined;
      if (filter === 'EXPIRED') {
        const endDate = new Date(user.dueDate).getTime();
        const timeLeft = endDate - now;
        return timeLeft <= 0;
      }
      if (filter === 'active') {
        const endDate = new Date(user.dueDate).getTime();
        const timeLeft = endDate - now;
        return timeLeft > 0;
      }
      return true;
    });

    filteredData.forEach(user => {
      const countdownElement = document.createElement('div');
      countdownElement.classList.add('countdown');
      countdownElement.innerHTML = `
      <div class="box-user">
      <div class="card-info">
      <br>
        <h2>${user.userPro ? "Pro" : "New"}<span> User: ${user.displayName} ${user.userPro ? '🌟' : ''}</h2>
        <h2>ID: ${user.id}</h2>
        <h2>LifeTime Status: ${user.dueDate === undefined ? 'Yes' : 'No'}</h2>
        <br>

        <p>Donated: ${user.donated}</p>
        ${user.dueDate ? `<p>Expired To : <span id="due-date-${user.id}">${new Date(user.dueDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</span></p>` : ''}
        <br>
        <div class="alent-box">
          <p id="countdown-${user.id}"></p>
        </div>
      <br>
      </div>
      </div>
      `;
      countdownContainer.appendChild(countdownElement);

      if (user.dueDate) {
        initializeCountdown(user.id, user.dueDate);
      }
    });
  }

  function initializeCountdown(id, dueDate) {
    const countdownElement = document.getElementById(`countdown-${id}`);
    const endDate = new Date(dueDate).getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = endDate - now;

      if (timeLeft <= 0) {
        countdownElement.innerHTML = '>>>> Renewal failed: EXPIRED <<<<br>--- Account Status: Freeze ---'
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      let countdownText = `Time remaining: ${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
      if (days <= 7) {
        countdownText += `<br><h3><a href="https://ganknow.com/massroileon">Players need to renew immediately</a></h3>`;
      }

      countdownElement.innerHTML = countdownText;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  filterElement.addEventListener('change', (event) => {
    renderCountdowns(event.target.value);
  });

  // Initial render with all users
  renderCountdowns('all');
});