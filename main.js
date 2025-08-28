// ===================== GLOBALS =====================
let allData = [];
const filterBoxes = document.querySelectorAll('.filter-box');
const resultsCount = document.getElementById('resultsCount');
const tableBody = document.getElementById('tableBody');
const tableHeader = document.getElementById('tableHeader');

// ===================== ANALYTICS TRACKING =====================
const routeNames = {
  'alomra': '/umrah-packages',
  'alghardka': '/hurghada-hotels', 
  'sharm-elshiekh': '/sharm-el-sheikh-resorts',
  'marsa-matrouh': '/marsa-matrouh-beaches',
  'dahab': '/dahab-diving',
  'alin-alsokhna': '/ain-sokhna-resorts'
};

window.va = window.va || function () { (window.va.q = window.va.q || []).push(arguments) };

function trackPageView(filterType) {
  const route = routeNames[filterType] || `/${filterType}`;
  const title = `Travel - ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`;

  document.title = title;

  // pageview tracking
  window.va("pageview", { path: route, title });

  // custom event
  window.va("event", { name: "filter_clicked", filter: filterType, route });

  console.log(`📊 Vercel Analytics: Tracked ${route}`);
}

// ===================== LOCAL DATA =====================
const jsonData = {
  "categories": {
    "alomra": {
      "tableHeader": {
        "program": "البرنامج",
        "makah": "مكة المكرمة",
        "almadinah": "المدينة المنورة",
        "price": "السعر",
        "price2": "السعر"
      },
      "items": [
        {
          "id": "UM001",
          "program": "برنامج 15 يوم (بجوار الحرم)",
          "makah": "بدر الماسة إبراهيم الخليل 600 متر من الحرم",
          "almadinah": "الزهراء المركزية 200 متر من الحرم",
          "price": "إسال علي السعر",
          "price2": "السعر"
        },
        {
          "id": "UM002",
          "program": "برنامج 15 يوم (بجوار الحرم)",
          "makah": "مكارم الهجرة شارع الهجرة 800 متر من الحرم",
          "almadinah": "الزهراء المركزية 200 متر من الحرم",
          "price": "إسال علي السعر",
          "price2": "السعر"
        },
        {
          "id": "UM003",
          "program": "برنامج 15 يوم (اقتصادي)",
          "makah": "ام القري محبس الجن بالنقل",
          "almadinah": "برج مودة",
          "price": "إسال علي السعر",
          "price2": "السعر"
        },
      ]
    },
  "day-use": {
      "tableHeader": {
        "place": "المكان",
        "day": "يوم",
        "governorate": "المحافظة",
        "price": "السعر",
      },
      "items": [
        {
          "id": "UM001",
          "place": "قرية اللؤلؤة - العين السخنة",
        "day": "30/8/2025",
        "governorate": "محافظة السويس",
        "price": "إسال علي السعر",
        },
      ]
    },  
    "alin-alsokhna": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الغرفة الثنائي في الليلة",
        "details": "ملاحظات"
      },
      "items": [
        
      ]
    },
    "alghardka": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الغرفة الثنائي في الليلة",
        "details": "ملاحظات"
      },
      "items": [
        {
          "id": "HG001",
          "hotel": "هاواى براديس",
          "offers": [
            { "From": "1/8/2025", "to": "15/9/2025", "price": "6200 جنية" },
            { "From": "16/9/2025", "to": "8/10/2025", "price": "5900 جنية" },
            
          ]
        },
        {
          "id": "HG002",
          "hotel": "فوكس هاوس",
          "offers": [
            { "From": "12/8/2025", "to": "1/9/2025", "price": "3100 جنية" },
            { "From": "1/9/2025", "to": "15/9/2025", "price": "3100 جنية" },
            { "From": "16/9/2025", "to": "30/9/2025", "price": "2700 جنية" },
            { "From": "1/10/2025", "to": "1/11/2025", "price": "2200 جنية" }
          ],
          "details": "H.B"
        },
        {
          "id": "HG002",
          "hotel": "سيجال",
          "offers": [
            { "From": "7/1/2025", "to": "30/9/2025", "price": "8500 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "صنى دايز البلاسيو",
          "offers": [
            { "From": "16/7/2025", "to": "30-9-2025", "price": "6800 جنية" },
            { "From": "1/10/2025", "to": "1/10/2025", "price": "6050 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "A M C رويال",
          "offers": [
            { "From": "26/7/2025", "to": "20-9-2025", "price": "6750 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "الباشا ريزورت",
          "offers": [
            { "From": "16/7/2025", "to": "30/9/2025", "price": "5050 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "الاليزيه دريم بيتش",
          "offers": [
            { "From": "1/7/2025", "to": "15/9/2025", "price": "4000 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "لاروزا بوهو ( الممشي السياحي )",
          "offers": [
            { "From": "1/7/2025", "to": "30/9/2025", "price": "3550 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "ستيلا مكادى جاردن",
          "offers": [
            { "From": "25/7/2025", "to": "30/9/2025", "price": "7800 جنية" }
          ],
          "details": "ديلوكس جادن"
        },
        {
          "id": "HG002",
          "hotel": "ميراج باى اكوا بارك",
          "offers": [
            { "From": "15/7/2025", "to": "10/9/2025", "price": "5200 جنية" },
            { "From": "11/9/2025", "to": "30/9/2025", "price": "5300 جنية" }
          ],
          "details": "طفلين ل 12 سنه مجانا"
        },
        {
          "id": "HG002",
          "hotel": "جرافيتي سهل حشيش",
          "offers": [
            { "From": "1/8/2025", "to": "30/9/2025", "price": "10700 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "بلاجيو لاكشرى ريزورت",
          "offers": [
            { "From": "1/9/2025", "to": "15/9/2025", "price": "9700 جنية" },
            { "From": "16/9/2025", "to": "10/10/2025", "price": "8300 جنية" },
            { "From": "11/10/2025", "to": "31/10/2025", "price": "7700 جنية" },
          ]
        },
        {
          "id": "HG002",
          "hotel": "بانوراما بانجلوس الجونه",
          "offers": [
            { "From": "8/8/2025", "to": "17/9/2025", "price": "8700 جنية" },
            { "From": "18/9/2025", "to": "30/9/2025", "price": "8700 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "مارلين ان ازور",
          "offers": [
            { "From": "1/9/2025", "to": "31-10-2025", "price": "5700 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "موفنبيك سوما باى (كلاسيك ماونتن)",
          "offers": [
            { "From": "15/7/2025", "to": "31/10/2025", "price": "8350 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "موفنبيك سوما باي ( ديلوكس ماونتن )",
          "offers": [
            { "From": "15/7/2025", "to": "31/10/2025", "price": "8700 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "سيرنتى فن سيتى مكادى",
          "offers": [
            { "From": "9/7/2025", "to": "30/9/2025", "price": "9800 جنية" },
            { "From": "1/10/2025", "to": "31/10/2025", "price": "8750 جنية" }
          ]
        },
        {
          "id": "HG002",
          "hotel": "صن رايز الورا",
          "offers": [
            { "From": "15/7/2025", "to": "19/9/2025", "price": "7000 جنية" },
            { "From": "20/9/2025", "to": "4/10/2025", "price": "5600 جنية" }
          ]
        },
        
      ]
    },
    "sharm-elshiekh": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الفرد في الغرفة الثنائي"
      },
      "items": [
       
      ]
    },
    "marsa-matrouh": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الفرد في الغرفة الثنائي"
      },
      "items": [
        
      ]
    },
    "dahab": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الفرد في الغرفة الثنائي"
      },
      "items": [
        
      ]
    }
  },
  "metadata": {
    "totalItems": 32,
    "lastUpdated": "2025-08-21",
    "version": "2.0"
  }
};


// ===================== VISITOR COUNTERS =====================
let visitorCounters = {
  categories: {
    "alomra": 0,
    "alin-alsokhna": 0,
    "alghardka": 0,
    "sharm-elshiekh": 0,
    "marsa-matrouh": 0,
    "dahab": 0
  },
  totalVisitors: 0
};

function incrementVisitor(category) {
  if (visitorCounters.categories.hasOwnProperty(category)) {
    visitorCounters.categories[category]++;
    visitorCounters.totalVisitors++;
  }
}

// ===================== DATA LOADING =====================
function loadDataFromJSON() {
  allData = [];
  Object.keys(jsonData.categories).forEach(categoryKey => {
    jsonData.categories[categoryKey].items.forEach(item => {
      allData.push({ ...item, categoryKey: categoryKey });
    });
  });
  allData.sort((a, b) => a.id.localeCompare(b.id));
}

// ===================== RENDER TABLE =====================
function renderTable(data) {
  tableBody.innerHTML = '';
  tableHeader.innerHTML = '';

  if (!Array.isArray(data) || data.length === 0) {
    tableHeader.innerHTML = "<th>لا توجد بيانات</th>";
    const noDataRow = document.createElement('tr');
    noDataRow.innerHTML = '<td colspan="4">لا توجد بيانات تطابق الفلتر المحدد</td>';
    tableBody.appendChild(noDataRow);
    updateResultsCount(0);
    return;
  }

  // نجيب الهيدر من الكاتيجوري
  const firstItemCategory = data[0].categoryKey;
  const headers = Object.keys(jsonData.categories[firstItemCategory].tableHeader);

  // رسم الهيدر
  tableHeader.innerHTML = headers
    .map(key => `<th>${jsonData.categories[firstItemCategory].tableHeader[key]}</th>`)
    .join('');

  // 🎨 ألوان مختلفة لكل فندق (تتكرر تدريجياً)
  const colors = ["#FFF", "#dcdcdc",];
  let colorIndex = 0;

  let displayedRows = 0;

  data.forEach(item => {
    const hasOffers = Array.isArray(item.offers) && item.offers.length > 0;

    // نحدد اللون للمجموعة كلها
    const groupColor = colors[colorIndex % colors.length];
    colorIndex++;

    if (hasOffers) {
      item.offers.forEach((offer, index) => {
        const tr = document.createElement('tr');
        tr.style.backgroundColor = groupColor;
        headers.forEach(h => {
          if (h === 'hotel') {
            if (index === 0) {
              const td = document.createElement('td');
              td.style.backgroundColor = groupColor;
              td.classList.add("main-cell")
              td.rowSpan = item.offers.length;
              td.textContent = item.hotel ?? '';
              td.style.fontWeight = 'bold';
              td.style.textAlign = 'center';
              td.style.verticalAlign = 'middle';
              tr.appendChild(td);
            }
          } else {
            const td = document.createElement('td');
            td.textContent = (offer && offer[h]) || (item && item[h]) || '';
            tr.appendChild(td);
          }
        });

        tableBody.appendChild(tr);
        displayedRows++;
      });

    } else {
      const tr = document.createElement('tr');
      tr.style.backgroundColor = groupColor; // 🟢 نفس اللون للمجموعة حتى لو مفيش offers

      headers.forEach(h => {
        const td = document.createElement('td');
        td.textContent = item[h] || '';
        tr.appendChild(td);
      });

      tableBody.appendChild(tr);
      displayedRows++;
    }
  });

  updateResultsCount(displayedRows);
}







function updateResultsCount(count) {
  if (resultsCount) {
    resultsCount.textContent = `${count} نتيجة`;
  }
}


// ===================== FILTER =====================
function filterTable(filterType) {
  let filteredData = [];
  if (Object.keys(jsonData.categories).includes(filterType)) {
    incrementVisitor(filterType);
    filteredData = allData.filter(item => item.categoryKey === filterType);
  }
  renderTable(filteredData);
}

// ===================== URL & NAVIGATION =====================
function applyDefaultFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  let filterFromUrl = urlParams.get('filter');

  if (!filterFromUrl || !Object.keys(jsonData.categories).includes(filterFromUrl)) {
    filterFromUrl = 'alomra';
    const url = new URL(window.location);
    url.searchParams.set('filter', filterFromUrl);
    history.replaceState(null, '', url);
  }

  const activeBox = document.querySelector(`.filter-box[data-filter="${filterFromUrl}"]`);
  if (activeBox) {
    filterBoxes.forEach(b => b.classList.remove('active'));
    activeBox.classList.add('active');
  }

  trackPageView(filterFromUrl);
  filterTable(filterFromUrl);
}

// ===================== EVENT LISTENERS =====================
function setupEventListeners() {
  if (filterBoxes.length === 0) return;

  filterBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
      e.preventDefault();
      filterBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');

      const filterType = box.dataset.filter;
      const url = new URL(window.location);
      url.searchParams.set('filter', filterType);
      history.pushState(null, '', url);

      trackPageView(filterType);
      filterTable(filterType);
    });
  });

  window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('filter') || 'alomra';
    trackPageView(filterFromUrl);
    filterTable(filterFromUrl);

    const activeBox = document.querySelector(`.filter-box[data-filter="${filterFromUrl}"]`);
    if (activeBox) {
      filterBoxes.forEach(b => b.classList.remove('active'));
      activeBox.classList.add('active');
    }
  });
}

// ===================== INITIALIZATION =====================
function initializeApp() {
  if (!tableBody || !tableHeader || filterBoxes.length === 0) return;

  loadDataFromJSON();
  setupEventListeners();
  applyDefaultFilter();
}

document.addEventListener('DOMContentLoaded', initializeApp);
if (document.readyState !== 'loading') {
  initializeApp();
}
