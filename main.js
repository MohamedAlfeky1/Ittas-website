// ===================== GLOBALS =====================
let allData = [];
const filterBoxes = document.querySelectorAll('.filter-box');
const resultsCount = document.getElementById('resultsCount');
const tableBody = document.getElementById('tableBody');
const tableHeader = document.getElementById('tableHeader');

// ===================== ANALYTICS TRACKING =====================
// Route mapping for better analytics
const routeNames = {
  'alomra': '/umrah-packages',
  'alghardka': '/hurghada-hotels', 
  'sharm-elshiekh': '/sharm-el-sheikh-resorts',
  'marsa-matrouh': '/marsa-matrouh-beaches',
  'dahab': '/dahab-diving',
  'alin-alsokhna': '/ain-sokhna-resorts'
};

// Track page views and route changes
function trackPageView(filterType) {
  const route = routeNames[filterType] || `/${filterType}`;
  const title = `Travel - ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`;
  
  // Update document title for better tracking
  document.title = title;
  
  // Track with Vercel Analytics
  if (typeof va !== 'undefined') {
    va.track('pageview', { 
      path: route,
      title: title 
    });
    console.log(`📊 Vercel Analytics: Tracked ${route}`);
  }
  
  // Also track custom events for more detailed analytics
  if (typeof va !== 'undefined') {
    va.track('filter_clicked', { 
      filter: filterType,
      route: route 
    });
  }
  
  console.log(`📊 Route tracked: ${route} (${title})`);
}

// ===================== LOCAL DATA =====================
// Static data stored locally - no API calls needed
const jsonData = {
  "categories": {
    "alomra": {
      "tableHeader": {
        "item-name": "البرنامج",
        "makah": "مكة المكرمة",
        "almadinah": "المدينة المنورة",
        "price": "السعر"
      },
      "items": [
        {
          "id": "UM001",
          "item": "برنامج العمرة الإقتصادي",
          "category": "العمرة",
          "status": "active",
          "dateAdded": "2025-08-21"
        },
        {
          "id": "UM002",
          "item": "عمرة شهر رمضان",
          "category": "العمرة",
          "status": "pending",
          "dateAdded": "2025-08-20"
        },
        {
          "id": "UM003",
          "item": "رحلة العمرة الاقتصادية",
          "category": "العمرة",
          "status": "active",
          "dateAdded": "2025-08-19"
        },
        {
          "id": "UM004",
          "item": "عمرة العيد",
          "category": "العمرة",
          "status": "inactive",
          "dateAdded": "2025-08-18"
        },
        {
          "id": "UM005",
          "item": "رحلة العمرة VIP",
          "category": "العمرة",
          "status": "active",
          "dateAdded": "2025-08-17"
        }
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
          "item": "منتجع العين السخنة الملكي",
          "category": "alin-alsokhna",
          "status": "active",
          "dateAdded": "2025-08-21"
        },
        {
          "id": "AS002",
          "item": "فندق جاز ليتل فينيس",
          "category": "alin-alsokhna",
          "status": "active",
          "dateAdded": "2025-08-20"
        },
        {
          "id": "AS003",
          "item": "منتجع ستيلا دي ماري",
          "category": "alin-alsokhna",
          "status": "pending",
          "dateAdded": "2025-08-19"
        },
        {
          "id": "AS004",
          "item": "فندق بورتو السخنة",
          "category": "alin-alsokhna",
          "status": "active",
          "dateAdded": "2025-08-18"
        },
        {
          "id": "AS005",
          "item": "منتجع موفنبيك السخنة",
          "category": "alin-alsokhna",
          "status": "inactive",
          "dateAdded": "2025-08-17"
        },
        {
          "id": "AS006",
          "item": "فندق الماسة السخنة",
          "category": "alin-alsokhna",
          "status": "active",
          "dateAdded": "2025-08-16"
        }
      ]
    },
    "alghardka": {
      "tableHeader": {
        "hotel": "الفندق",
        "From": "من",
        "to": "إلي",
        "price": "سعر الفرد في الغرفة الثنائي"
      },
      "items": [
        {
          "id": "HG001",
          "item": "هاواى براديس",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG002",
          "item": "فوكس هاوس",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG003",
          "item": "سيجال",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG004",
          "item": "صنى دايز البلاسيو",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG005",
          "item": "A M C رويال",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG006",
          "item": "الباشا ريزورت",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG007",
          "item": "الاليزيه دريم بيتش",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG008",
          "item": "لاروزا بوهو",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG009",
          "item": "ستيلا مكادى جاردن",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG010",
          "item": "ميراج باى اكوا بارك",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG011",
          "item": "جرافيتي سهل حشيش",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG012",
          "item": "بلاجيو لاكشرى ريزورت",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG013",
          "item": "بانوراما بانجلوس الجونه",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG014",
          "item": "مارلين ان ازور",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG015",
          "item": "موفنبيك سوما باى (كلاسيك ماونتن)",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG016",
          "item": "موفنبيك سوما باي (ديلوكس ماونتن)",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG017",
          "item": "سيرنتى فن سيتى مكادى",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
        },
        {
          "id": "HG018",
          "item": "صن رايز الورا",
          "category": "1-8-2025",
          "status": "15-9-2025",
          "dateAdded": "3999 جنية"
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
          "item": "منتجع شرم الشيخ الملكي",
          "category": "شرم الشيخ",
          "status": "active",
          "dateAdded": "2025-08-21"
        },
        {
          "id": "SS002",
          "item": "رحلة محمية رأس محمد",
          "category": "شرم الشيخ",
          "status": "active",
          "dateAdded": "2025-08-20"
        },
        {
          "id": "SS003",
          "item": "فندق نعمة باي",
          "category": "شرم الشيخ",
          "status": "pending",
          "dateAdded": "2025-08-19"
        },
        {
          "id": "SS004",
          "item": "رحلة جبل سيناء",
          "category": "شرم الشيخ",
          "status": "active",
          "dateAdded": "2025-08-18"
        },
        {
          "id": "SS005",
          "item": "كاتدرائية سانت كاترين",
          "category": "شرم الشيخ",
          "status": "inactive",
          "dateAdded": "2025-08-17"
        },
        {
          "id": "SS006",
          "item": "منتجع شارع الملاهي",
          "category": "شرم الشيخ",
          "status": "active",
          "dateAdded": "2025-08-16"
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
          "item": "شاطئ كليوباترا",
          "category": "مرسي مطروح",
          "status": "active",
          "dateAdded": "2025-08-21"
        },
        {
          "id": "MM002",
          "item": "فندق الساحل الشمالي",
          "category": "مرسي مطروح",
          "status": "pending",
          "dateAdded": "2025-08-20"
        },
        {
          "id": "MM003",
          "item": "رحلة العلمين",
          "category": "مرسي مطروح",
          "status": "active",
          "dateAdded": "2025-08-19"
        },
        {
          "id": "MM004",
          "item": "شاطئ أجيبة",
          "category": "مرسي مطروح",
          "status": "active",
          "dateAdded": "2025-08-18"
        },
        {
          "id": "MM005",
          "item": "منتجع مارينا",
          "category": "مرسي مطروح",
          "status": "inactive",
          "dateAdded": "2025-08-17"
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
          "item": "منتجع دهب الذهبي",
          "category": "دهب",
          "status": "active",
          "dateAdded": "2025-08-21"
        },
        {
          "id": "DH002",
          "item": "رحلة الغوص في البلو هول",
          "category": "دهب",
          "status": "active",
          "dateAdded": "2025-08-20"
        },
        {
          "id": "DH003",
          "item": "كانيون الملونة",
          "category": "دهب",
          "status": "pending",
          "dateAdded": "2025-08-19"
        },
        {
          "id": "DH004",
          "item": "رحلة الجمال الصحراوية",
          "category": "دهب",
          "status": "active",
          "dateAdded": "2025-08-18"
        },
        {
          "id": "DH005",
          "item": "فندق البحر الأزرق",
          "category": "دهب",
          "status": "inactive",
          "dateAdded": "2025-08-17"
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

// ===================== LOCAL VISITOR TRACKING =====================
// In-memory visitor counters (resets on page refresh)
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

// Increment visitor counter (local only)
function incrementVisitor(category) {
  if (visitorCounters.categories.hasOwnProperty(category)) {
    visitorCounters.categories[category]++;
    visitorCounters.totalVisitors++;
    
    console.log(`📊 ${category} visitors: ${visitorCounters.categories[category]}, total: ${visitorCounters.totalVisitors}`);
  }
}

// ===================== DATA LOADING =====================
function loadDataFromJSON() {
  allData = [];

  Object.keys(jsonData.categories).forEach(categoryKey => {
    jsonData.categories[categoryKey].items.forEach(item => {
      allData.push({
        ...item,
        categoryKey: categoryKey
      });
    });
  });

  allData.sort((a, b) => a.id.localeCompare(b.id));
  
  renderTable(allData);
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

  // Get table headers from the first item's category
  const firstItemCategory = data[0].categoryKey;
  tableHeader.innerHTML = Object.keys(jsonData.categories[firstItemCategory].tableHeader)
    .map(key => `<th>${jsonData.categories[firstItemCategory].tableHeader[key]}</th>`)
    .join('');

  data.forEach(item => {
    const row = document.createElement('tr');
    row.dataset.category = item.categoryKey;
    row.dataset.status = item.status;
    row.dataset.date = item.dateAdded;

    row.innerHTML = `
      <td><div class="item-cell">${item.item}</div></td>
      <td>${item.category}</td>
      <td>${item.status}</td>
      <td>${item.dateAdded}</td>
    `;

    tableBody.appendChild(row);
  });

  updateResultsCount(data.length);
}

function updateResultsCount(count) {
  resultsCount.textContent = `${count} نتيجة`;
}

// ===================== FILTER =====================
function filterTable(filterType) {
  let filteredData = [];

  if (Object.keys(jsonData.categories).includes(filterType)) {
    // Update local visitor counter
    incrementVisitor(filterType);
    // Track analytics
    trackPageView(filterType);
    filteredData = allData.filter(item => item.categoryKey === filterType);
  }

  renderTable(filteredData);
}

// ===================== URL & NAVIGATION =====================
function applyDefaultFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  let filterFromUrl = urlParams.get('filter');

  if (!filterFromUrl) {
    filterFromUrl = 'alomra'; // default
    const url = new URL(window.location);
    url.searchParams.set('filter', filterFromUrl);
    history.replaceState(null, '', url);
  }

  const activeBox = document.querySelector(`.filter-box[data-filter="${filterFromUrl}"]`);
  if (activeBox) {
    filterBoxes.forEach(b => b.classList.remove('active'));
    activeBox.classList.add('active');
  }

  filterTable(filterFromUrl);
}

// ===================== EVENT LISTENERS =====================
filterBoxes.forEach(box => {
  box.addEventListener('click', () => {
    filterBoxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');

    const filterType = box.dataset.filter;
    const url = new URL(window.location);
    url.searchParams.set('filter', filterType);
    history.pushState(null, '', url);

    // Track the route change immediately
    trackPageView(filterType);
    
    filterTable(filterType);
  });
});

window.addEventListener('popstate', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const filterFromUrl = urlParams.get('filter');

  if (filterFromUrl) {
    // Track the route change for back/forward navigation
    trackPageView(filterFromUrl);
    
    filterTable(filterFromUrl);
    const activeBox = document.querySelector(`.filter-box[data-filter="${filterFromUrl}"]`);
    if (activeBox) {
      filterBoxes.forEach(b => b.classList.remove('active'));
      activeBox.classList.add('active');
    }
  } else {
    renderTable(allData);
    filterBoxes.forEach(b => b.classList.remove('active'));
  }
});

// ===================== UTILITY FUNCTIONS =====================
// Get current visitor stats (for debugging or display)
function getVisitorStats() {
  return {
    ...visitorCounters,
    lastUpdated: new Date().toLocaleString('ar-EG')
  };
}

// Reset visitor counters (if needed)
function resetVisitorCounters() {
  Object.keys(visitorCounters.categories).forEach(category => {
    visitorCounters.categories[category] = 0;
  });
  visitorCounters.totalVisitors = 0;
  console.log("🔄 Visitor counters reset");
}

// ===================== ANALYTICS UTILITIES =====================
// Function to manually track custom events
function trackCustomEvent(eventName, properties = {}) {
  if (typeof va !== 'undefined') {
    va.track(eventName, properties);
    console.log(`📊 Custom event tracked: ${eventName}`, properties);
  }
}

// Check if analytics is loaded
function checkAnalytics() {
  if (typeof va !== 'undefined') {
    console.log("✅ Vercel Analytics loaded successfully");
    return true;
  } else {
    console.log("⚠️ Vercel Analytics not loaded yet");
    return false;
  }
}

// ===================== INITIALIZATION =====================
document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 Initializing app with enhanced analytics...");
  
  // Load local data immediately (no API calls)
  loadDataFromJSON();
  
  // Apply default filter
  applyDefaultFilter();
  
  // Check if analytics loaded after a delay
  setTimeout(() => {
    checkAnalytics();
  }, 1000);
  
  console.log("✅ App initialized successfully!");
  console.log("📊 Visitor tracking and analytics enabled");
});