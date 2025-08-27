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
        "price": "سعر الفرد في الغرفة الثنائي"
      },
      "items": [
        {
          "id": "AS001",
          "hotel": "منتجع العين السخنة الملكي",
          "From": "1-9-2025",
          "to": "7-9-2025",
          "price": "3500 جنية"
        },
        {
          "id": "AS002",
          "hotel": "فندق جاز ليتل فينيس",
          "From": "5-9-2025",
          "to": "10-9-2025",
          "price": "4200 جنية"
        },
        {
          "id": "AS003",
          "hotel": "منتجع ستيلا دي ماري",
          "From": "8-9-2025",
          "to": "12-9-2025",
          "price": "3900 جنية"
        },
        {
          "id": "AS004",
          "hotel": "فندق بورتو السخنة",
          "From": "10-9-2025",
          "to": "15-9-2025",
          "price": "3100 جنية"
        },
        {
          "id": "AS005",
          "hotel": "منتجع موفنبيك السخنة",
          "From": "12-9-2025",
          "to": "17-9-2025",
          "price": "4500 جنية"
        },
        {
          "id": "AS006",
          "hotel": "فندق الماسة السخنة",
          "From": "15-9-2025",
          "to": "20-9-2025",
          "price": "3700 جنية"
        }
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
        {
          "id": "SS001",
          "hotel": "منتجع شرم الشيخ الملكي",
          "From": "1-10-2025",
          "to": "6-10-2025",
          "price": "5200 جنية"
        },
        {
          "id": "SS002",
          "hotel": "فندق جاز فنار",
          "From": "3-10-2025",
          "to": "8-10-2025",
          "price": "4800 جنية"
        },
        {
          "id": "SS003",
          "hotel": "فندق نعمة باي",
          "From": "5-10-2025",
          "to": "10-10-2025",
          "price": "4500 جنية"
        },
        {
          "id": "SS004",
          "hotel": "منتجع هيلتون شاركس باي",
          "From": "7-10-2025",
          "to": "12-10-2025",
          "price": "4900 جنية"
        },
        {
          "id": "SS005",
          "hotel": "فندق كاتدرائية سانت كاترين",
          "From": "9-10-2025",
          "to": "14-10-2025",
          "price": "4300 جنية"
        },
        {
          "id": "SS006",
          "hotel": "منتجع شارع الملاهي",
          "From": "12-10-2025",
          "to": "17-10-2025",
          "price": "4600 جنية"
        }
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
        {
          "id": "MM001",
          "hotel": "شاطئ كليوباترا",
          "From": "20-7-2025",
          "to": "25-7-2025",
          "price": "3200 جنية"
        },
        {
          "id": "MM002",
          "hotel": "فندق الساحل الشمالي",
          "From": "22-7-2025",
          "to": "27-7-2025",
          "price": "4000 جنية"
        },
        {
          "id": "MM003",
          "hotel": "رحلة العلمين",
          "From": "24-7-2025",
          "to": "29-7-2025",
          "price": "3700 جنية"
        },
        {
          "id": "MM004",
          "hotel": "شاطئ أجيبة",
          "From": "26-7-2025",
          "to": "31-7-2025",
          "price": "3300 جنية"
        },
        {
          "id": "MM005",
          "hotel": "منتجع مارينا",
          "From": "28-7-2025",
          "to": "2-8-2025",
          "price": "4100 جنية"
        }
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
        {
          "id": "DH001",
          "hotel": "منتجع دهب الذهبي",
          "From": "15-11-2025",
          "to": "20-11-2025",
          "price": "3400 جنية"
        },
        {
          "id": "DH002",
          "hotel": "فندق بلو هول",
          "From": "17-11-2025",
          "to": "22-11-2025",
          "price": "3600 جنية"
        },
        {
          "id": "DH003",
          "hotel": "فندق كانيون",
          "From": "19-11-2025",
          "to": "24-11-2025",
          "price": "3300 جنية"
        },
        {
          "id": "DH004",
          "hotel": "فندق الصحراء",
          "From": "21-11-2025",
          "to": "26-11-2025",
          "price": "3500 جنية"
        },
        {
          "id": "DH005",
          "hotel": "فندق البحر الأزرق",
          "From": "23-11-2025",
          "to": "28-11-2025",
          "price": "3800 جنية"
        }
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

  if (data.length === 0) {
    tableHeader.innerHTML = "<th>لا توجد بيانات</th>";
    const noDataRow = document.createElement('tr');
    noDataRow.innerHTML = '<td colspan="4">لا توجد بيانات تطابق الفلتر المحدد</td>';
    tableBody.appendChild(noDataRow);
    updateResultsCount(0);
    return;
  }

  // Get table headers dynamically
  const firstItemCategory = data[0].categoryKey;
  const headers = Object.keys(jsonData.categories[firstItemCategory].tableHeader);

  // Render headers
  tableHeader.innerHTML = headers
    .map(key => `<th>${jsonData.categories[firstItemCategory].tableHeader[key]}</th>`)
    .join('');

  // Render rows
  data.forEach(item => {
    const row = document.createElement('tr');
    row.dataset.category = item.categoryKey;

    row.innerHTML = headers
      .map(key => `<td>${item[key] || ''}</td>`)
      .join('');

    tableBody.appendChild(row);
  });

  updateResultsCount(data.length);
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
