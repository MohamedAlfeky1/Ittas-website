// Global variables
let allData = [];
const filterBoxes = document.querySelectorAll('.filter-box');
const resultsCount = document.getElementById('resultsCount');
const tableBody = document.getElementById('tableBody');



// JSON data with comprehensive travel data
const jsonData = {
    "categories": {
        "alomra": [
            {
                "directory": "/alomra",
                "id": "UM001",
                "item": "رحلة العمرة الذهبية",
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
        ],
        "day-use": [
            {
                "id": "DU001",
                "item": "رحلة الأهرامات",
                "category": "اليوم الواحد",
                "status": "active",
                "dateAdded": "2025-08-21"
            },
            {
                "id": "DU002",
                "item": "جولة القاهرة التاريخية",
                "category": "اليوم الواحد",
                "status": "active",
                "dateAdded": "2025-08-20"
            },
            {
                "id": "DU003",
                "item": "رحلة الإسكندرية",
                "category": "اليوم الواحد",
                "status": "pending",
                "dateAdded": "2025-08-19"
            },
            {
                "id": "DU004",
                "item": "زيارة مدينة الفيوم",
                "category": "اليوم الواحد",
                "status": "active",
                "dateAdded": "2025-08-18"
            },
            {
                "id": "DU005",
                "item": "رحلة العين السخنة",
                "category": "اليوم الواحد",
                "status": "inactive",
                "dateAdded": "2025-08-17"
            },
            {
                "id": "DU006",
                "item": "جولة المتحف المصري",
                "category": "اليوم الواحد",
                "status": "active",
                "dateAdded": "2025-08-16"
            }
        ],
        "alghardka": [
            {
                "id": "HG001",
                "item": "منتجع الغردقة الذهبي",
                "category": "الغردقة",
                "status": "active",
                "dateAdded": "2025-08-21"
            },
            {
                "id": "HG002",
                "item": "رحلة الغوص في الغردقة",
                "category": "الغردقة",
                "status": "active",
                "dateAdded": "2025-08-20"
            },
            {
                "id": "HG003",
                "item": "فندق البحر الأحمر",
                "category": "الغردقة",
                "status": "pending",
                "dateAdded": "2025-08-19"
            },
            {
                "id": "HG004",
                "item": "رحلة السفاري الصحراوية",
                "category": "الغردقة",
                "status": "active",
                "dateAdded": "2025-08-18"
            },
            {
                "id": "HG005",
                "item": "منتجع الجونة",
                "category": "الغردقة",
                "status": "active",
                "dateAdded": "2025-08-17"
            },
            {
                "id": "HG006",
                "item": "رحلة بحرية في البحر الأحمر",
                "category": "الغردقة",
                "status": "inactive",
                "dateAdded": "2025-08-16"
            }
        ],
        "sharm-elshiekh": [
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
        ],
        "marsa-matrouh": [
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
        ],
        "dahab": [
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
    },
    "metadata": {
        "totalItems": 32,
        "lastUpdated": "2025-08-21",
        "version": "2.0"
    }
};

// Function to load data from JSON
function loadDataFromJSON() {
    allData = [];

    // Flatten the categorized data into a single array
    Object.keys(jsonData.categories).forEach(categoryKey => {
        jsonData.categories[categoryKey].forEach(item => {
            allData.push({
                ...item,
                categoryKey: categoryKey
            });
        });
    });

    // Sort by ID
    allData.sort((a, b) => a.id.localeCompare(b.id));

    console.log('Loaded data from JSON:', allData);
    renderTable(allData);
}

// Function to render table rows
function renderTable(data) {
    tableBody.innerHTML = '';

    if (data.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.className = 'no-data-row';
        noDataRow.innerHTML = '<td colspan="5" class="no-data">لا توجد بيانات تطابق الفلتر المحدد</td>';
        tableBody.appendChild(noDataRow);
        updateResultsCount(0);
        return;
    }

    data.forEach(item => {
        const row = document.createElement('tr');
        row.dataset.category = item.categoryKey;
        row.dataset.status = item.status;
        row.dataset.date = item.dateAdded;

        const statusClass = `status-${item.status}`;
        let statusText = '';
        switch(item.status) {
            case 'active':
                statusText = 'نشط';
                break;
            case 'pending':
                statusText = 'في الانتظار';
                break;
            case 'inactive':
                statusText = 'غير نشط';
                break;
            default:
                statusText = item.status;
        }

        row.innerHTML = `
            <td>${item.id}</td>
            <td><div class="item-cell">${item.item}</div></td>
            <td>${item.category}</td>
            <td><span class="${statusClass}">${statusText}</span></td>
            <td>${item.dateAdded}</td>
        `;

        tableBody.appendChild(row);
    });

    updateResultsCount(data.length);
}

function updateResultsCount(count) {
    resultsCount.textContent = `${count} نتيجة`;
}

function filterTable(filterType) {
    let filteredData = [];
    
    if (Object.keys(jsonData.categories).includes(filterType)) {
        filteredData = allData.filter(item => item.categoryKey === filterType);
    } else {
        switch(filterType) {
            case 'active':
                filteredData = allData.filter(item => item.status === 'active');
                break;
            case 'pending':
                filteredData = allData.filter(item => item.status === 'pending');
                break;
            case 'inactive':
                filteredData = allData.filter(item => item.status === 'inactive');
                break;
            case 'today':
                filteredData = allData.filter(item => item.dateAdded === '2025-08-21');
                break;
            case 'recent':
                const threeDaysAgo = new Date();
                threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
                filteredData = allData.filter(item => {
                    const itemDate = new Date(item.dateAdded);
                    return itemDate >= threeDaysAgo;
                });
                break;
            default:
                filteredData = allData;
        }
    }

    renderTable(filteredData);
}

// Add click event listeners to filter boxes
filterBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove active class from all boxes
        filterBoxes.forEach(b => b.classList.remove('active'));

        // Add active class to clicked box
        box.classList.add('active');

        // Get filter type
        const filterType = box.dataset.filter;

        // --- Update URL with ?filter=xxx ---
        const url = new URL(window.location);
        url.searchParams.set('filter', filterType);
        history.pushState(null, '', url);

        // Apply filter
        filterTable(filterType);
    });
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadDataFromJSON();

    // --- Apply filter from URL if exists ---
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('filter');

    if (filterFromUrl) {
        // Highlight correct filter box if exists
        const activeBox = document.querySelector(`.filter-box[data-filter="${filterFromUrl}"]`);
        if (activeBox) {
            filterBoxes.forEach(b => b.classList.remove('active'));
            activeBox.classList.add('active');
        }

        // Apply filter
        filterTable(filterFromUrl);
    } else {
        // No filter in URL → show all
        renderTable(allData);
    }
});

// --- Handle browser back/forward navigation ---
window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('filter');

    if (filterFromUrl) {
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

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadDataFromJSON();

    const urlParams = new URLSearchParams(window.location.search);
    let filterFromUrl = urlParams.get('filter');

    // --- If no filter in URL → default to "alomra" ---
    if (!filterFromUrl) {
        filterFromUrl = 'alomra';
        const url = new URL(window.location);
        url.searchParams.set('filter', filterFromUrl);
        history.replaceState(null, '', url); // replace so it doesn't add extra history
    }

    // Highlight correct filter box if exists
    const activeBox = document.querySelector(`.filter-box[data-filter="${filterFromUrl}"]`);
    if (activeBox) {
        filterBoxes.forEach(b => b.classList.remove('active'));
        activeBox.classList.add('active');
    }

    // Apply filter
    filterTable(filterFromUrl);
});