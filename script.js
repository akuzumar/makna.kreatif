// Inisialisasi data untuk galeri dengan view counter
const galleryData = [
    {
        id: 1,
        title: "Desain Poster Pengajian Ramadan",
        category: "pengajian",
        desc: "Poster dengan tema islami untuk pengajian bulan Ramadan dengan kaligrafi yang elegan dan warna-warna yang sesuai dengan nuansa religi. Desain ini dibuat menggunakan Adobe Illustrator dengan kombinasi tipografi yang menarik.",
        img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 1240,
        likes: 89,
        testimoni: "Desain yang sangat menarik dan sesuai dengan tema keagamaan. Sangat profesional! Jemaah banyak yang memuji poster ini.",
        client: "Masjid Al-Hikmah",
        price: "Rp 350.000"
    },
    {
        id: 2,
        title: "Undangan Pernikahan Elegan",
        category: "undangan",
        desc: "Undangan pernikahan dengan desain minimalis dan warna pastel yang elegan. Menggunakan kombinasi gold foil dan emboss untuk memberikan kesan mewah namun tetap sederhana.",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 2150,
        likes: 142,
        testimoni: "Undangan yang sangat indah! Tamu-tamu kami banyak yang memuji dan menyimpan undangan ini sebagai kenang-kenangan.",
        client: "Sarah & Budi",
        price: "Rp 250.000"
    },
    {
        id: 3,
        title: "CV Kreatif untuk Designer",
        category: "cv",
        desc: "Desain CV yang kreatif dan profesional khusus untuk bidang desain grafis. Layout yang unik memungkinkan untuk menampilkan portofolio visual secara langsung dalam CV.",
        img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 1890,
        likes: 121,
        testimoni: "CV ini membantu saya mendapatkan pekerjaan impian di perusahaan kreatif ternama! Desainnya berbeda dari CV biasa.",
        client: "Rina Desainer",
        price: "Rp 400.000"
    },
    {
        id: 4,
        title: "Poster Konser Musik Indie",
        category: "poster",
        desc: "Poster dengan gaya vintage untuk konser musik indie lokal. Menggunakan teknik grunge dan typography yang bold untuk menciptakan atmosfer musik yang autentik.",
        img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 2400,
        likes: 189,
        testimoni: "Poster yang sangat eye-catching! Banyak yang datang ke konser kami karena tertarik dengan desain posternya.",
        client: "Indie Fest 2023",
        price: "Rp 500.000"
    },
    {
        id: 5,
        title: "Logo untuk Startup Tech",
        category: "logo",
        desc: "Logo modern dan futuristik untuk startup teknologi berbasis AI. Simbol menggabungkan konsep kecerdasan buatan dengan pertumbuhan yang berkelanjutan.",
        img: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 1800,
        likes: 142,
        testimoni: "Logo yang sempurna untuk merek kami! Sangat merepresentasikan visi perusahaan tentang inovasi dan teknologi.",
        client: "TechAI Solutions",
        price: "Rp 2.500.000"
    },
    {
        id: 6,
        title: "UI Dashboard Aplikasi Fintech",
        category: "uiux",
        desc: "Dashboard dengan data visualization yang intuitif untuk aplikasi fintech. Fokus pada user experience dengan navigasi yang mudah dan tampilan yang clean.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 1500,
        likes: 117,
        testimoni: "User experience yang luar biasa! Pengguna sangat mudah beradaptasi dengan dashboard baru kami.",
        client: "FinTech App",
        price: "Rp 5.000.000"
    },
    {
        id: 7,
        title: "Brosur Pengajian Rutin",
        category: "pengajian",
        desc: "Brosur informatif untuk pengajian rutin mingguan di masjid. Desain yang jelas dengan informasi jadwal, tema, dan pembicara yang mudah dibaca.",
        img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 980,
        likes: 67,
        testimoni: "Brosur yang informatif dan menarik. Jemaah semakin bertambah karena informasi yang jelas dan desain yang menarik!",
        client: "Majelis Taklim",
        price: "Rp 200.000"
    },
    {
        id: 8,
        title: "Undangan Aqiqah",
        category: "undangan",
        desc: "Undangan digital aqiqah dengan ilustrasi anak yang lucu dan warna-warna cerah. Didesain khusus untuk dibagikan melalui media sosial dan WhatsApp.",
        img: "https://images.unsplash.com/photo-1560932684-5e552e466f93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 1100,
        likes: 78,
        testimoni: "Desain yang menggemaskan! Cocok untuk acara aqiqah putra kami. Banyak yang menyimpan undangan ini di HP mereka.",
        client: "Keluarga Ahmad",
        price: "Rp 200.000"
    }
];

// Data untuk klien
const clientsData = [
    {
        id: 1,
        name: "PT. Teknologi Maju",
        desc: "Kerjasama pembuatan brand identity dan website perusahaan selama 3 bulan. Mencakup desain logo, stationery, dan website corporate.",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 850,
        testimoni: "Hasilnya luar biasa! Brand kami sekarang terlihat lebih profesional dan modern. Website yang user-friendly meningkatkan engagement pelanggan.",
        project: "Brand Identity & Website",
        duration: "3 Bulan"
    },
    {
        id: 2,
        name: "Kafe Nusantara",
        desc: "Desain menu dan identitas visual untuk kafe tradisional dengan konsep modern. Mencakup desain menu makanan, kopi, dan merchandise.",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 720,
        testimoni: "Menu yang menarik membuat pelanggan semakin betah di kafe kami. Desain merchandise juga laris terjual!",
        project: "Menu Design & Branding",
        duration: "1 Bulan"
    },
    {
        id: 3,
        name: "Universitas Merdeka",
        desc: "Desain materi promosi penerimaan mahasiswa baru termasuk banner, brosur, sosial media kit, dan presentasi untuk roadshow ke sekolah-sekolah.",
        img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 930,
        testimoni: "Jumlah pendaftar meningkat 30% berkat desain promosi yang menarik dan informatif. Materi presentasi juga sangat membantu tim marketing.",
        project: "Marketing Materials",
        duration: "2 Bulan"
    },
    {
        id: 4,
        name: "Rumah Sakit Sehat",
        desc: "Desain infografis kesehatan dan panduan pasien yang mudah dipahami. Mencakup poster edukasi, booklet informasi penyakit, dan signage indoor.",
        img: "https://images.unsplash.com/photo-1516549655669-df666f9fbd6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        views: 680,
        testimoni: "Infografis yang mudah dipahami oleh pasien dari berbagai kalangan. Keluhan pasien tentang kebingungan berkurang signifikan.",
        project: "Health Infographics",
        duration: "4 Bulan"
    }
];

// Data untuk testimoni
const testimonialsData = [
    {
        name: "Budi Santoso",
        role: "CEO Startup Tech",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "Desain yang dibuat sangat profesional dan sesuai dengan visi perusahaan kami. Hasilnya melebihi ekspektasi! Tim sangat responsif dan memahami kebutuhan bisnis."
    },
    {
        name: "Sari Dewi",
        role: "Event Organizer",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "Kerja sama yang sangat menyenangkan. Desainer sangat responsif dan mengerti kebutuhan klien. Hasilnya selalu on time dengan kualitas terbaik."
    },
    {
        name: "Ahmad Fauzi",
        role: "Pemilik Restoran",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        rating: 4,
        text: "Menu yang didesain membuat pelanggan kami lebih tertarik. Penjualan meningkat 25%! Desainnya menarik namun tetap fungsional."
    },
    {
        name: "Maria Sari",
        role: "Manajer Pemasaran",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        text: "Tim kreatif yang sangat profesional. Hasil desain selalu on time dan berkualitas tinggi. Sangat merekomendasikan untuk proyek desain apapun."
    }
];

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const closeModalBtn = document.getElementById('closeModalBtn');
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryGrid = document.querySelector('.gallery-grid');
const clientsGrid = document.querySelector('.clients-grid');
const testimonialsContainer = document.querySelector('.testimonials');
const detailModal = document.getElementById('detailModal');
const modalBody = document.querySelector('.modal-body');
const sponsorForm = document.getElementById('sponsorForm');
const agreeTerms = document.getElementById('agreeTerms');
const submitBtn = document.getElementById('submitBtn');
const contactForm = document.getElementById('contactForm');

// Local storage untuk tracking views
let viewedItems = JSON.parse(localStorage.getItem('designGalleryViews')) || {};

// Fungsi untuk inisialisasi halaman
function initPage() {
    // Update statistik dengan animasi
    animateStats();
    
    // Render galeri
    renderGallery();
    
    // Render klien
    renderClients();
    
    // Render testimoni
    renderTestimonials();
    
    // Setup event listeners
    setupEventListeners();
    
    // Update trending views dari local storage
    updateTrendingViews();
}

// Fungsi untuk animasi statistik
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
            
            // Tambah animasi
            if (current % Math.floor(increment * 10) === 0) {
                stat.classList.add('counting');
                setTimeout(() => stat.classList.remove('counting'), 300);
            }
        }, 20);
    });
}

// Fungsi untuk render galeri
function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);
    
    filteredData.forEach(item => {
        // Cek apakah item sudah pernah dilihat
        const viewCount = viewedItems[item.id] || item.views;
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-id', item.id);
        galleryItem.setAttribute('data-category', item.category);
        
        galleryItem.innerHTML = `
            <div class="gallery-img">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="gallery-info">
                <span class="gallery-category">${getCategoryName(item.category)}</span>
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-desc">${item.desc}</p>
                <div class="gallery-stats">
                    <span><i class="fas fa-eye"></i> <span class="view-count" data-id="${item.id}">${formatNumber(viewCount)}</span></span>
                    <span><i class="fas fa-heart"></i> ${item.likes}</span>
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
        
        // Event listener untuk membuka modal
        galleryItem.addEventListener('click', () => openDetailModal(item));
    });
}

// Fungsi untuk render klien
function renderClients() {
    clientsGrid.innerHTML = '';
    
    clientsData.forEach(client => {
        // Cek apakah client sudah pernah dilihat
        const viewCount = viewedItems[`client_${client.id}`] || client.views;
        
        const clientCard = document.createElement('div');
        clientCard.className = 'client-card';
        clientCard.setAttribute('data-id', `client_${client.id}`);
        
        clientCard.innerHTML = `
            <div class="client-img">
                <img src="${client.img}" alt="${client.name}">
            </div>
            <div class="client-info">
                <h3 class="client-name">${client.name}</h3>
                <p class="client-desc">${client.desc}</p>
                <div class="gallery-stats">
                    <span><i class="fas fa-eye"></i> <span class="view-count" data-id="client_${client.id}">${formatNumber(viewCount)}</span></span>
                </div>
            </div>
        `;
        
        clientsGrid.appendChild(clientCard);
        
        // Event listener untuk membuka modal klien
        clientCard.addEventListener('click', () => openClientModal(client));
    });
}

// Fungsi untuk render testimoni
function renderTestimonials() {
    testimonialsContainer.innerHTML = '';
    
    testimonialsData.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        // Generate bintang rating
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < testimonial.rating 
                ? '<i class="fas fa-star"></i>' 
                : '<i class="far fa-star"></i>';
        }
        
        testimonialCard.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <div>
                    <h3>${testimonial.name}</h3>
                    <p>${testimonial.role}</p>
                    <div class="testimonial-rating">${stars}</div>
                </div>
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">${testimonial.name}</div>
        `;
        
        testimonialsContainer.appendChild(testimonialCard);
    });
}

// Fungsi untuk mendapatkan nama kategori
function getCategoryName(category) {
    const categories = {
        'pengajian': 'Desain Pengajian',
        'undangan': 'Undangan',
        'cv': 'CV & Portofolio',
        'poster': 'Poster',
        'logo': 'Logo',
        'uiux': 'UI/UX'
    };
    
    return categories[category] || category;
}

// Format angka untuk display
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Fungsi untuk menambah view count
function incrementView(itemId) {
    // Tambah ke local storage
    if (!viewedItems[itemId]) {
        viewedItems[itemId] = 1;
    } else {
        viewedItems[itemId]++;
    }
    
    // Simpan ke local storage
    localStorage.setItem('designGalleryViews', JSON.stringify(viewedItems));
    
    // Update display jika elemen ada di halaman
    const viewElement = document.querySelector(`.view-count[data-id="${itemId}"]`);
    if (viewElement) {
        const currentViews = viewedItems[itemId];
        viewElement.textContent = formatNumber(currentViews);
        viewElement.classList.add('view-increase');
        setTimeout(() => viewElement.classList.remove('view-increase'), 500);
    }
    
    return viewedItems[itemId];
}

// Update trending views dari local storage
function updateTrendingViews() {
    // Update views untuk trending items
    const trendingViewElements = document.querySelectorAll('.trending-item .view-count');
    trendingViewElements.forEach(element => {
        const views = parseInt(element.getAttribute('data-views'));
        const itemTitle = element.closest('.trending-item').querySelector('h3').textContent;
        
        // Simpan trending views di local storage
        const storageKey = `trending_${itemTitle.replace(/\s+/g, '_')}`;
        if (!viewedItems[storageKey]) {
            viewedItems[storageKey] = views;
        }
        
        // Update display
        element.textContent = formatNumber(viewedItems[storageKey]);
    });
}

// Fungsi untuk membuka modal detail
function openDetailModal(item) {
    // Increment view count
    const newViewCount = incrementView(item.id);
    
    modalBody.innerHTML = `
        <div class="modal-detail">
            <div class="detail-header">
                <h2>${item.title}</h2>
                <span class="detail-category">${getCategoryName(item.category)}</span>
            </div>
            
            <div class="detail-content">
                <div class="detail-img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                
                <div class="detail-info">
                    <div class="detail-section">
                        <h3><i class="fas fa-info-circle"></i> Deskripsi</h3>
                        <p>${item.desc}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-comment"></i> Testimoni Klien</h3>
                        <div class="testimonial-box">
                            <p>"${item.testimoni}"</p>
                            <div class="testimonial-author">- ${item.client}</div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-chart-bar"></i> Statistik</h3>
                        <div class="stats-box">
                            <div class="stat">
                                <i class="fas fa-eye"></i>
                                <span>${formatNumber(newViewCount)} dilihat</span>
                            </div>
                            <div class="stat">
                                <i class="fas fa-heart"></i>
                                <span>${item.likes} suka</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-tags"></i> Harga</h3>
                        <div class="price-box">
                            <h4>${item.price}</h4>
                            <p>*Harga dapat berubah sesuai kompleksitas desain</p>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-phone-alt"></i> Pesan Desain Serupa</h3>
                        <p>Ingin desain seperti ini? Hubungi saya untuk diskusi lebih lanjut.</p>
                        <a href="https://wa.me/6285161808524?text=Halo,%20saya%20tertarik%20dengan%20desain%20${encodeURIComponent(item.title)}%20yang%20ada%20di%20website%20Anda" 
                           target="_blank" class="modal-whatsapp-btn">
                            <i class="fab fa-whatsapp"></i> Hubungi via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    detailModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk membuka modal klien
function openClientModal(client) {
    // Increment view count
    const newViewCount = incrementView(`client_${client.id}`);
    
    modalBody.innerHTML = `
        <div class="modal-detail">
            <div class="detail-header">
                <h2>${client.name}</h2>
                <span class="detail-category">Kerjasama</span>
            </div>
            
            <div class="detail-content">
                <div class="detail-img">
                    <img src="${client.img}" alt="${client.name}">
                </div>
                
                <div class="detail-info">
                    <div class="detail-section">
                        <h3><i class="fas fa-info-circle"></i> Deskripsi Kerjasama</h3>
                        <p>${client.desc}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-project-diagram"></i> Proyek</h3>
                        <p><strong>${client.project}</strong></p>
                        <p>Durasi: ${client.duration}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-comment"></i> Testimoni Klien</h3>
                        <div class="testimonial-box">
                            <p>"${client.testimoni}"</p>
                            <div class="testimonial-author">- ${client.name}</div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-chart-bar"></i> Statistik</h3>
                        <div class="stats-box">
                            <div class="stat">
                                <i class="fas fa-eye"></i>
                                <span>${formatNumber(newViewCount)} dilihat</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-handshake"></i> Ingin Bekerjasama?</h3>
                        <p>Jika Anda tertarik untuk bekerjasama dalam proyek desain, silakan hubungi saya.</p>
                        <a href="https://wa.me/6285161808524?text=Halo,%20saya%20tertarik%20untuk%20bekerjasama%20dalam%20proyek%20desain%20grafis" 
                           target="_blank" class="modal-whatsapp-btn">
                            <i class="fab fa-whatsapp"></i> Diskusi via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    detailModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk setup semua event listeners
function setupEventListeners() {
    // Mobile menu toggle - MUDAH DIKLIK
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('mobile-open');
    });
    
    // Sidebar toggle untuk desktop
    sidebarToggle.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.toggle('collapsed');
        } else {
            sidebar.classList.remove('mobile-open');
        }
    });
    
    // Tombol close modal - BESAR DAN MUDAH DIKLIK
    closeModalBtn.addEventListener('click', () => {
        detailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            detailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close sidebar when clicking outside on mobile
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            e.target !== mobileMenuBtn &&
            sidebar.classList.contains('mobile-open')) {
            sidebar.classList.remove('mobile-open');
        }
    });
    
    // Navigation items
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show corresponding page
            const pageId = item.getAttribute('data-page');
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === pageId) {
                    page.classList.add('active');
                }
            });
            
            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Filter buttons for gallery
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter gallery
            const filter = btn.getAttribute('data-filter');
            renderGallery(filter);
        });
    });
    
    // Sponsor form agreement
    agreeTerms.addEventListener('change', () => {
        submitBtn.disabled = !agreeTerms.checked;
    });
    
    // Sponsor form submission
    sponsorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            sponsorType: document.getElementById('sponsorType').value,
            projectDesc: document.getElementById('projectDesc').value,
            fileName: document.getElementById('proposalFile').files[0]?.name || 'Tidak ada file'
        };
        
        // Create WhatsApp message
        const message = `*PROPOSAL SPONSORSHIP*
        
Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone}
Perusahaan/Organisasi: ${formData.company}
Jenis Sponsor: ${formData.sponsorType}

*Deskripsi Proyek:*
${formData.projectDesc}

File Proposal: ${formData.fileName}

*Proposal ini dikirim melalui website DesignGallery*`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp
        window.open(`https://wa.me/6285161808524?text=${encodedMessage}`, '_blank');
        
        // Reset form
        sponsorForm.reset();
        agreeTerms.checked = false;
        submitBtn.disabled = true;
        
        // Show success message
        alert('Terima kasih! Proposal Anda telah dikirim. Anda akan diarahkan ke WhatsApp untuk melanjutkan komunikasi.');
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value
        };
        
        // Create WhatsApp message
        const message = `*PESAN DARI WEBSITE*
        
Nama: ${formData.name}
Email: ${formData.email}
Subjek: ${formData.subject}

*Pesan:*
${formData.message}`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp
        window.open(`https://wa.me/6285161808524?text=${encodedMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('Terima kasih! Pesan Anda telah dikirim. Anda akan diarahkan ke WhatsApp untuk melanjutkan komunikasi.');
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav item
                    navItems.forEach(nav => nav.classList.remove('active'));
                    const correspondingNav = document.querySelector(`.nav-item[data-page="${href.substring(1)}"]`);
                    if (correspondingNav) {
                        correspondingNav.classList.add('active');
                    }
                    
                    // Show corresponding page
                    pages.forEach(page => {
                        page.classList.remove('active');
                        if (page.id === href.substring(1)) {
                            page.classList.add('active');
                        }
                    });
                    
                    // Close sidebar on mobile
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('mobile-open');
                    }
                }
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // Reset sidebar state on resize to desktop
        if (window.innerWidth > 768) {
            sidebar.classList.remove('mobile-open');
            sidebar.classList.remove('collapsed');
        }
    });
    
    // Prevent body scroll when modal is open
    detailModal.addEventListener('touchmove', (e) => {
        if (detailModal.style.display === 'flex') {
            e.preventDefault();
        }
    }, { passive: false });
}

// Animasi saat scrolling
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.stat-card, .trending-item, .gallery-item, .client-card, .testimonial-card, .benefit').forEach(el => {
        observer.observe(el);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initPage();
    setupScrollAnimations();
    
    // Set initial sidebar state based on screen size
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('collapsed');
    }
    
    // Tambah efek hover pada mobile menu button
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.classList.add('pulse');
    }
});