const newsData = [
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai JKT48 Special Theater Show "Ramune no Nomikata - Cara Meminum Ramune" - Ladies and Kids Day',
        date: '25 Mei 2024',
        link: 'BERITADETAIL/berita1.html'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Pertunjukan Perdana "Pajama Drive" oleh Trainee JKT48',
        date: '24 Mei 2024',
        link: 'BERITADETAIL/berita2.html'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Video Call Pengganti Flora Shafiq',
        date: '24 Mei 2024',
        link: 'BERITADETAIL/berita3.html'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Jeane Victoria',
        date: '22 Mei 2024',
        link: 'BERITADETAIL/berita4.html'
    },
    {
        category: 'OTHER',
        title: 'Informasi Mengenai Refund Video Call Callista Alifia',
        date: '20 Mei 2024',
        link: 'BERITADETAIL/berita5.html'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Aktivitas Callista Alifia',
        date: '17 Mei 2024',
        link: 'BERITADETAIL/berita6.html'
    },
    {
        category: 'BIRTHDAY',
        title: 'Pengumuman Mengenai Birthday 2-Shot Azizi Asadel dengan Chekicha',
        date: '14 Mei 2024',
        link: 'BERITADETAIL/berita7.html'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Stage Activity dan Mini-Live Performance di Personal Meet & Greet Festival 2024 “Spring Has Come',
        date: '8 Mei 2024',
        link: 'BERITADETAIL/berita8.html'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Sesi Meet and Greet Pengganti Callista Alifia',
        date: '7 Mei 2024',
        link: 'BERITADETAIL/berita9.html'
    },
    {
        category: 'OTHER',
        title: 'Informasi Mengenai Refund Tiket Meet & Greet dan Two Shot Amanda Sukma dan Indira Seruni pada SPRING HAS COME - JKT48 Personal Meet and Greet & 2-Shot Festival 2024',
        date: '5 Mei 2024',
        link: 'BERITADETAIL/berita10.html'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Prosesi Pelepasan Kabesha Shani Indira Natio',
        date: '4 Mei 2024',
        link: 'BERITADETAIL/berita11.html'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Video Call Pengganti Jesslyn Elly',
        date: '4 Mei 2024',
        link: 'BERITADETAIL/berita12.html'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Pre-Order Digital Photobook “JKT48 LAST VOYAGE” dengan bonus Video Call with JKT48',
        date: '3 Mei 2024',
        link: 'BERITADETAIL/berita13.html'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai JKT48 OFC Event: Magic Hour Short Movie Premiere',
        date: '3 Mei 2024',
        link: 'BERITADETAIL/berita14.html'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Aktivitas Amanda Sukma dan Indira Seruni',
        date: '2 Mei 2024',
        link: 'BERITADETAIL/berita15.html'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai JKT48 Special Theater Show "Aitakatta - Ingin Bertemu" – Ladies and Kids Day',
        date: '29 April 2024',
        link: 'BERITADETAIL/berita16.html'
    },
    {
        category: 'GOODS',
        title: 'Pengumuman Mengenai Merchandise Spesial Shani Graduation Concert “LAST VOYAGE',
        date: '26 April 2024',
        link: 'BERITADETAIL/berita17.html'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Detail Pengambilan Benefit Tiket VIP & Penjualan Merchandise Graduation Concert “LAST VOYAGE',
        date: '23 April 2024',
        link: 'BERITADETAIL/berita18.html'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Detail Penukaran Tiket PACIFIC & CARIBBEAN Shani Graduation Concert “LAST VOYAGE',
        date: '23 April 2024',
        link: 'BERITADETAIL/berita19.html'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai OFC Event “SUDDEN VERSUS - Alien Invasion to the Earth!” with JKT48',
        date: '23 April 2024',
        link: 'BERITADETAIL/berita20.html'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Video Call Pengganti Pia Meraleo',
        date: '19 April 2024',
        link: 'link-to-news'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Live Streaming Shani Graduation Concert “Last Voyage”',
        date: '19 April 2024',
        link: 'link-to-news'
    },
    {
        category: 'BIRTHDAY',
        title: 'Pengumuman Mengenai Graduation 2-Shot Online Shani Indira Natio dengan Chekicha',
        date: '18 April 2024',
        link: 'link-to-news'
    },
    {
        category: 'BIRTHDAY',
        title: 'Pengumuman Mengenai Birthday 2-Shot Online Bulan April dengan Chekicha',
        date: '14 April 2024',
        link: 'link-to-news'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai akun SHOWROOM & IDN Live Member Generasi 12 JKT48',
        date: '7 April 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Penjualan Digital Wallpaper Pack “Ngangkring With Us” dengan bonus Video Call with JKT48 Virtual',
        date: '3 April 2024',
        link: 'link-to-news'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Pre-Order Digital Photobook “JKT48 Ramadhan Special Show 2024” dengan bonus Video Call with JKT48',
        date: '30 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Video Call Pengganti Azizi Asadel',
        date: '30 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Penambahan Tiket Shani Graduation Concert “LAST VOYAGE”',
        date: '28 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Video Call Pengganti Amanda Sukma',
        date: '27 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman mengenai 2024 JKT48 Ramadan Event Live stream Charity',
        date: '21 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Timetable Serta Peraturan SPRING HAS COME - JKT48 Personal Meet and Greet & 2-Shot Festival 2024',
        date: '21 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: 'Informasi Mengenai Perilisan Album BANZAI JKT48',
        date: '18 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'BIRTHDAY',
        title: 'Pengumuman Mengenai Birthday 2-Shot Online Bulan Maret dengan Chekicha',
        date: '13 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Detail Shani Graduation Concert “LAST VOYAGE"',
        date: '10 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Aktivitas Teater JKT48 Selama Bulan Ramadan 2024',
        date: '10 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Personal Meet & Greet Festival 2024 “Spring Has Come”',
        date: '5 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Pertunjukan Teater Kelulusan Shani Indira Natio',
        date: '5 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'EVENT',
        title: 'Pengumuman Mengenai Shani Graduation Concert “Last Voyage"',
        date: '5 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Pertunjukan Terakhir Setlist (Senshuuraku) “Banzai JKT48"',
        date: '2 Maret 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Penjualan Digital Wallpaper Pack “A Sweet Surprise” dengan bonus Video Call with JKT48 Virtual',
        date: '13 Februari 2024',
        link: 'link-to-news'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Prosesi Pelepasan Kabesha Adzana Shaliha',
        date: '9 Februari 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Benefit OFC: Trial Video Call bersama Member JKT48 Virtual',
        date: '9 Februari 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Penambahan Sesi pada Video Call with JKT48, Digital Photobook “JKT48 Love Letter”',
        date: '7 Februari 2024',
        link: 'link-to-news'
    },
    {
        category: 'BIRTHDAY',
        title: 'Pengumuman Mengenai Birthday 2-Shot Online Bulan Februari dengan Chekicha',
        date: '6 Februari 2024',
        link: 'link-to-news'
    },
    {
        category: 'BIRTHDAY',
        title: 'Pengumuman Mengenai Graduation 2-Shot Online Adzana Shaliha dengan Chekicha',
        date: '6 Februari 2024',
        link: 'link-to-news'
    },
    {
        category: 'THEATER',
        title: 'Pengumuman Mengenai Pre-Order Digital Photobook “JKT48 Love Letter” dengan bonus Video Call with JKT48',
        date: '2 Februari 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai Benefit OFC : Mengenai Trial Video Call bersama Member JKT48 Generasi 12',
        date: '31 Januari 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: 'Pengumuman Mengenai JKT48 Official Fan Club Renewal 2024',
        date: '30 Januari 2024',
        link: 'link-to-news'
    },
    {
        category: 'OTHER',
        title: '[ENGLISH] JKT48 BACK TO MALAYSIA!!',
        date: '24 Januari 2024',
        link: 'link-to-news'
    }
    


];

// Function to update the breadcrumb trail
function updateBreadcrumb(section) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
        <span id="breadcrumb-home"><i class="fas fa-home"></i> Home</span> &nbsp; &gt; &nbsp;
        <span>${section}</span>
    `;
}

// Function to change the breadcrumb position
function changeBreadcrumbPosition(position) {
    const breadcrumbContainer = document.querySelector('.breadcrumb-container');

    switch (position) {
        case 'left':
            breadcrumbContainer.style.justifyContent = 'flex-start';
            break;
        case 'center':
            breadcrumbContainer.style.justifyContent = 'center';
            break;
        case 'right':
            breadcrumbContainer.style.justifyContent = 'flex-end';
            break;
    }
}



const itemsPerPage = 10;
let currentPage = 1;
const totalPages = Math.ceil(newsData.length / itemsPerPage);

function renderNews() {
    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = newsData.slice(startIndex, endIndex);

    currentNews.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <a href="${news.link}">
                <h3>${news.category}</h3>
                <p>${news.title}</p>
                <p>${news.date}</p>
            </a>
        `;
        newsContainer.appendChild(newsItem);
    });

    document.getElementById('page-info').innerText = `${currentPage} / ${totalPages}`;
}

function changePage(direction) {
    if (currentPage + direction > 0 && currentPage + direction <= totalPages) {
        currentPage += direction;
        renderNews();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderNews();
});

function searchNews(keyword) {
    const searchTerm = keyword.toLowerCase();
    const filteredNews = newsData.filter(news => news.title.toLowerCase().includes(searchTerm));
    return filteredNews;
}

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('navbar-form');
    searchForm.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim();
        const filteredNews = searchNews(searchTerm);

        
        currentPage = 1; 
        renderNews(filteredNews);
    });

    renderNews();
});

function renderNews(filteredNews) {
    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = '';

    const newsToRender = filteredNews || getCurrentPageNews();

    newsToRender.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <a href="${news.link}">
                <h3>${news.category}</h3>
                <p>${news.title}</p>
                <p>${news.date}</p>
            </a>
        `;
        newsContainer.appendChild(newsItem);
    });

    updatePagination();
}

function getCurrentPageNews() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return newsData.slice(startIndex, endIndex);
}

function updatePagination() {
    document.getElementById('page-info').innerText = `${currentPage} / ${totalPages}`;
}

//schedule

const scheduleData = {
    "2024-1": [
        { date: "1 January 2024", day: "Monday", event: '' },
        { date: "2 January 2024", day: "Tuesday", event: '' },
        { date: "3 January 2024", day: "Wednesday", event: '' },
        { date: "4 January 2024", day: "Thursday", event: '' },
        { date: "5 January 2024", day: "Friday", event: '<span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { date: "6 January 2024", day: "Saturday", event: '<span class="event-label event-jkt48">JKT48</span> 14:00 Aturan Anti Cinta' },
        { date: "7 January 2024", day: "Sunday", event: '<span class="event-label event-jkt48">JKT48</span> 14:00 Cara Meminum Ramune<br><span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { date: "8 January 2024", day: "Monday", event: '' },
        { date: "9 January 2024", day: "Tuesday", event: '' },
        { date: "10 January 2024", day: "Wednesday", event: '<span class="event-label event-event">Event</span> 12:30 JKT48 OFC Event FUN ON BOARD #2 - Sesi 1<br><span class="event-label event-event">Event</span> 15:00 JKT48 OFC Event FUN ON BOARD #2 - Sesi 2' },
        { date: "11 January 2024", day: "Thursday", event: '' },
        { date: "12 January 2024", day: "Friday", event: '<span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { date: "13 January 2024", day: "Saturday", event: '<span class="event-label event-event">Event</span> FESTIVE FEST<br><span class="event-label event-jkt48">JKT48</span> 19:00 Aturan Anti Cinta' },
        { date: "14 January 2024", day: "Sunday", event: '<span class="event-label event-jkt48">JKT48</span> 19:00 Cara Meminum Ramune' },
        { date: "15 January 2024", day: "Monday", event: '' },
        { date: "16 January 2024", day: "Tuesday", event: '' },
        { date: "17 January 2024", day: "Wednesday", event: '' },
        { date: "18 January 2024", day: "Thursday", event: '' },
        { date: "19 January 2024", day: "Friday", event: '<span class="event-label event-jkt48">JKT48</span> 19:00 Aturan Anti Cinta' },
        { date: "20 January 2024", day: "Saturday", event: '<span class="event-label event-jkt48">JKT48</span> 15:00 Cara Meminum Ramune' },
        { date: "21 January 2024", day: "Sunday", event: '<span class="event-label event-jkt48">JKT48</span> 14:00 Ingin Bertemu<br><span class="event-label event-trainee">Trainee</span> 19:00 Pajama Drive' },
        { date: "22 January 2024", day: "Monday", event: '' },
        { date: "23 January 2024", day: "Tuesday", event: '' },
        { date: "24 January 2024", day: "Wednesday", event: '' },
        { date: "25 January 2024", day: "Thursday", event: '<span class="event-label event-jkt48">JKT48</span> 19:00 Aturan Anti Cinta' },
        { date: "26 January 2024", day: "Friday", event: '<span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { date: "27 January 2024", day: "Saturday", event: '<span class="event-label event-trainee">Trainee</span> 19:00 Pajama Drive' },
        { date: "28 January 2024", day: "Sunday", event: '' },
        { date: "29 January 2024", day: "Monday", event: '' },
        { date: "30 January 2024", day: "Tuesday", event: '' },
        { date: "31 January 2024", day: "Wednesday", event: '' }
    ],

    "2024-2": [
        { "date": "1 February 2024", "day": "Thursday", "event": "" },
        { "date": "2 February 2024", "day": "Friday", "event": "" },
        { "date": "3 February 2024", "day": "Saturday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Pajama Drive' },
        { "date": "4 February 2024", "day": "Sunday", "event": '<span class="event-label event-trainee">Trainee</span> 14:00 Ingin Bertemu<br><span class="event-label event-jkt48">JKT48</span> 19:00 Aturan Anti Cinta' },
        { "date": "5 February 2024", "day": "Monday", "event": "" },
        { "date": "6 February 2024", "day": "Tuesday", "event": "" },
        { "date": "7 February 2024", "day": "Wednesday", "event": "" },
        { "date": "8 February 2024", "day": "Thursday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Cara Meminum Ramune' },
        { "date": "9 February 2024", "day": "Friday", "event": '<span class="event-label event-trainee">Trainee</span> 19:00 Ingin Bertemu' },
        { "date": "10 February 2024", "day": "Saturday", "event": "" },
        { "date": "11 February 2024", "day": "Sunday", "event": '<span class="event-label event-jkt48">JKT48</span> 15:00 Tunas di Balik Seragam' },
        { "date": "12 February 2024", "day": "Monday", "event": '<span class="event-label event-event">Event</span> 16:30 Trial Video Call - Pia Meraleo' },
        { "date": "13 February 2024", "day": "Tuesday", "event": '<span class="event-label event-event">Event</span> 16:30 Trial Video Call - Tana Nona' },
        { "date": "14 February 2024", "day": "Wednesday", "event": "" },
        { "date": "15 February 2024", "day": "Thursday", "event": '<span class="event-label event-event">Event</span> 16:30 Trial Video Call - Kanaia Asa' },
        { "date": "16 February 2024", "day": "Friday", "event": '<span class="event-label event-trainee">Trainee</span> 19:00 Ingin Bertemu' },
        { "date": "17 February 2024", "day": "Saturday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Tunas di Balik Seragam' },
        { "date": "18 February 2024", "day": "Sunday", "event": '<span class="event-label event-trainee">Trainee</span> 14:00 Ingin Bertemu<br><span class="event-label event-jkt48">JKT48</span> 19:00 Cara Meminum Ramune' },
        { "date": "19 February 2024", "day": "Monday", "event": "" },
        { "date": "20 February 2024", "day": "Tuesday", "event": "" },
        { "date": "21 February 2024", "day": "Wednesday", "event": "" },
        { "date": "22 February 2024", "day": "Thursday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Cara Meminum Ramune' },
        { "date": "23 February 2024", "day": "Friday", "event": '<span class="event-label event-event">Event</span> Mahoni Championship XXI - The Art Of Tangled' },
        { "date": "24 February 2024", "day": "Saturday", "event": '<span class="event-label event-event">Event</span> GIS 2 Festival 2024<br><span class="event-label event-trainee">Trainee</span> 19:00 Ingin Bertemu' },
        { "date": "25 February 2024", "day": "Sunday", "event": '<span class="event-label event-jkt48">JKT48</span> 16:00 Aturan Anti Cinta' },
        { "date": "26 February 2024", "day": "Monday", "event": "" },
        { "date": "27 February 2024", "day": "Tuesday", "event": "" },
        { "date": "28 February 2024", "day": "Wednesday", "event": "" },
        { "date": "29 February 2024", "day": "Thursday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Tunas di Balik Seragam' }
    ],

    "2024-3": [
        { "date": "1 March 2024", "day": "Friday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { "date": "2 March 2024", "day": "Saturday", "event": '<span class="event-label event-event">Event</span> F2WL 2024<br><span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { "date": "3 March 2024", "day": "Sunday", "event": '<span class="event-label event-event">Event</span> Playlist Live Festival 2024<br><span class="event-label event-event">Event</span> Pikachu’s Indonesia Journey' },
        { "date": "4 March 2024", "day": "Monday", "event": "" },
        { "date": "5 March 2024", "day": "Tuesday", "event": "" },
        { "date": "6 March 2024", "day": "Wednesday", "event": "" },
        { "date": "7 March 2024", "day": "Thursday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { "date": "8 March 2024", "day": "Friday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { "date": "9 March 2024", "day": "Saturday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 BANZAI JKT48' },
        { "date": "10 March 2024", "day": "Sunday", "event": '<span class="event-label event-jkt48">JKT48</span> 15:00 BANZAI JKT48' },
        { "date": "11 March 2024", "day": "Monday", "event": "" },
        { "date": "12 March 2024", "day": "Tuesday", "event": "" },
        { "date": "13 March 2024", "day": "Wednesday", "event": "" },
        { "date": "14 March 2024", "day": "Thursday", "event": "" },
        { "date": "15 March 2024", "day": "Friday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:30 SUP3R GENERAT10N' },
        { "date": "16 March 2024", "day": "Saturday", "event": '<span class="event-label event-event">Event</span> 14:00 REALM RUMBLE<br><span class="event-label event-jkt48">JKT48</span> 19:30 JKT48 School' },
        { "date": "17 March 2024", "day": "Sunday", "event": '<span class="event-label event-event">Event</span> 14:00 ANAK KING - A Journey of Misunderstanding' },
        { "date": "18 March 2024", "day": "Monday", "event": "" },
        { "date": "19 March 2024", "day": "Tuesday", "event": "" },
        { "date": "20 March 2024", "day": "Wednesday", "event": "" },
        { "date": "21 March 2024", "day": "Thursday", "event": "" },
        { "date": "22 March 2024", "day": "Friday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:30 ELITE ROOM' },
        { "date": "23 March 2024", "day": "Saturday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:30 REALM RUMBLE<br><span class="event-label event-event">Event</span> KapanLagi Buka Bareng Festival' },
        { "date": "24 March 2024", "day": "Sunday", "event": '<span class="event-label event-jkt48">JKT48</span> 14:00 JKT48 SCHOOL<br><span class="event-label event-jkt48">JKT48</span> 19:30 ANAK KING' },
        { "date": "25 March 2024", "day": "Monday", "event": "" },
        { "date": "26 March 2024", "day": "Tuesday", "event": "" },
        { "date": "27 March 2024", "day": "Wednesday", "event": "" },
        { "date": "28 March 2024", "day": "Thursday", "event": '<span class="event-label event-jkt48">JKT48</span> 19:30 JKT48 SCHOOL' },
        { "date": "29 March 2024", "day": "Friday", "event": "" },
        { "date": "30 March 2024", "day": "Saturday", "event": '<span class="event-label event-jkt48">JKT48</span> 14:00 ELITE ROOM<br><span class="event-label event-jkt48">JKT48</span> 19:30 ANAK KING' },
        { "date": "31 March 2024", "day": "Sunday", "event": "" }
    ],

    "2024-4": [
        { "date": "1 April 2024", "day": "Senin", "event": "" },
        { "date": "2 April 2024", "day": "Selasa", "event": "" },
        { "date": "3 April 2024", "day": "Rabu", "event": "" },
        { "date": "4 April 2024", "day": "Kamis", "event": "" },
        { "date": "5 April 2024", "day": "Jumat", "event": '<span class="event-label event-jkt48">JKT48</span> 19:30 ELITE ROOM' },
        { "date": "6 April 2024", "day": "Sabtu", "event": '<span class="event-label event-jkt48">JKT48</span> 14:00 JKT48 SCHOOL<br><span class="event-label event-jkt48">JKT48</span> 19:30 ELITE ROOM' },
        { "date": "7 April 2024", "day": "Minggu", "event": '<span class="event-label event-jkt48">JKT48</span> 15:00 ANAK KING' },
        { "date": "8 April 2024", "day": "Senin", "event": "" },
        { "date": "9 April 2024", "day": "Selasa", "event": "" },
        { "date": "10 April 2024", "day": "Rabu", "event": "" },
        { "date": "11 April 2024", "day": "Kamis", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Aturan Anti Cinta' },
        { "date": "12 April 2024", "day": "Jumat", "event": '<span class="event-label event-jkt48">JKT48</span> 19:00 Ingin Bertemu' },
        { "date": "13 April 2024", "day": "Sabtu", "event": '<span class="event-label event-event">Event</span> Mukashi Fest Vol.3 Back To Spark 2024<br><span class="event-label event-jkt48">JKT48</span> 14:00 Cara Meminum Ramune<br>Fun Volley Ball' },
        { "date": "14 April 2024", "day": "Minggu", "event": "" },
        { "date": "15 April 2024", "day": "Senin", "event": "" },
        { "date": "16 April 2024", "day": "Selasa", "event": "" },
        { "date": "17 April 2024", "day": "Rabu", "event": "" },
        { "date": "18 April 2024", "day": "Kamis", "event": "" },
        { "date": "19 April 2024", "day": "Jumat", "event": "" },
        { "date": "20 April 2024", "day": "Sabtu", "event": "" },
        { "date": "21 April 2024", "day": "Minggu", "event": "" },
        { "date": "22 April 2024", "day": "Senin", "event": "" },
        { "date": "23 April 2024", "day": "Selasa", "event": "" },
        { "date": "24 April 2024", "day": "Rabu", "event": "" },
        { "date": "25 April 2024", "day": "Kamis", "event": "" },
        { "date": "26 April 2024", "day": "Jumat", "event": "" },
        { "date": "27 April 2024", "day": "Sabtu", "event": "" },
        { "date": "28 April 2024", "day": "Minggu", "event": "" },
        { "date": "29 April 2024", "day": "Senin", "event": "" },
        { "date": "30 April 2024", "day": "Selasa", "event": '<span class="event-label event-jkt48">JKT48</span> 11:00 JKT48 OFC Event - SUDDEN VERSUS' }
    ],

    "2024-5": [
        { "date": "1 May 2024", "day": "Wednesday", "event": "<span class='event-label event-trainee'>Trainee</span> 19:00 Ingin Bertemu" },
        { "date": "2 May 2024", "day": "Thursday", "event": "<span class='event-label event-jkt48'>JKT48</span> 19:00 Tunas di Balik Seragam" },
        { "date": "3 May 2024", "day": "Friday", "event": "<span class='event-label event-event'>Event</span> Sabiphoria Fest<br><span class='event-label event-jkt48'>JKT48</span> 19:00 Cara Meminum Ramune" },
        { "date": "4 May 2024", "day": "Saturday", "event": "<span class='event-label event-event'>Event</span> Panggung Panas - Pekanbaru<br><span class='event-label event-event'>Event</span> Japan Fest, SMP Global Mandiri Cakung<br><span class='event-label event-trainee'>Trainee</span> 19:00 Ingin Bertemu" },
        { "date": "5 May 2024", "day": "Sunday", "event": "<span class='event-label event-event'>Event</span> Naraya Fes - Tegal<br><span class='event-label event-jkt48'>JKT48</span> 15:00 Aturan Anti Cinta" },
        { "date": "6 May 2024", "day": "Monday", "event": "" },
        { "date": "7 May 2024", "day": "Tuesday", "event": "" },
        { "date": "8 May 2024", "day": "Wednesday", "event": "<span class='event-label event-event'>Event</span> 18:30 JKT48 OFC Event: Magic Hour Short Movie Premiere" },
        { "date": "9 May 2024", "day": "Thursday", "event": "<span class='event-label event-event'>Event</span> Cilacap Fair 2024<br><span class='event-label event-event'>Event</span> Betang Fest 2024<br><span class='event-label event-trainee'>Trainee</span> 16:00 Ingin Bertemu" },
        { "date": "10 May 2024", "day": "Friday", "event": "" },
        { "date": "11 May 2024", "day": "Saturday", "event": "" },
        { "date": "12 May 2024", "day": "Sunday", "event": "<span class='event-label event-trainee'>Trainee</span> 19:00 Ingin Bertemu" },
        { "date": "13 May 2024", "day": "Monday", "event": "" },
        { "date": "14 May 2024", "day": "Tuesday", "event": "" },
        { "date": "15 May 2024", "day": "Wednesday", "event": "" },
        { "date": "16 May 2024", "day": "Thursday", "event": "" },
        { "date": "17 May 2024", "day": "Friday", "event": "<span class='event-label event-trainee'>Trainee</span> 19:00 Ingin Bertemu" },
        { "date": "18 May 2024", "day": "Saturday", "event": "<span class='event-label event-event'>Event</span> My Fest 2024 - Pekanbaru<br><span class='event-label event-jkt48'>JKT48</span> 19:00 Ingin Bertemu" },
        { "date": "19 May 2024", "day": "Sunday", "event": "<span class='event-label event-event'>Event</span> Bang Road To R-1 Fest<br><span class='event-label event-jkt48'>JKT48</span> 19:00 Aturan Anti Cinta" },
        { "date": "20 May 2024", "day": "Monday", "event": "" },
        { "date": "21 May 2024", "day": "Tuesday", "event": "" },
        { "date": "22 May 2024", "day": "Wednesday", "event": "" },
        { "date": "23 May 2024", "day": "Thursday", "event": "<span class='event-label event-jkt48'>JKT48</span> 16:00 Tunas di Balik Seragam" },
        { "date": "24 May 2024", "day": "Friday", "event": "<span class='event-label event-event'>Event</span> Pesta Suka Cita - Surabaya<br><span class='event-label event-trainee'>Trainee</span> 19:00 Ingin Bertemu" },
        { "date": "25 May 2024", "day": "Saturday", "event": "<span class='event-label event-event'>Event</span> Semesta Bergoyang Jilid 2<br><span class='event-label event-jkt48'>JKT48</span> 16:00 Aturan Anti Cinta" },
        { "date": "26 May 2024", "day": "Sunday", "event": "<span class='event-label event-event'>Event</span> Semilir Japan Festival<br><span class='event-label event-event'>Event</span> Waku Waku Festival Vol.3<br><span class='event-label event-trainee'>Trainee</span> 14:00 Ingin Bertemu" },
        { "date": "27 May 2024", "day": "Monday", "event": "" },
        { "date": "28 May 2024", "day": "Tuesday", "event": "" },
        { "date": "29 May 2024", "day": "Wednesday", "event": "" },
        { "date": "30 May 2024", "day": "Thursday", "event": "<span class='event-label event-trainee'>Trainee</span> 19:00 Pajama Drive" },
        { "date": "31 May 2024", "day": "Friday", "event": "<span class='event-label event-event'>Event</span> D SOCIAL FEST<br><span class='event-label event-trainee'>Trainee</span> 19:00 Pajama Drive" }
    ],
    
    "2024-6": [
        { date: "1 June 2024", day: "Saturday", event: '<span class="event-label event-jkt48">JKT48</span> 19:00 Cara Meminum Ramune' },
        { date: "2 June 2024", day: "Sunday", event: '<span class="event-label event-jkt48">JKT48</span> 14:00 Cara Meminum Ramune' },
        { date: "3 June 2024", day: "Monday", event: '' },
        { date: "4 June 2024", day: "Tuesday", event: '' },
        { date: "5 June 2024", day: "Wednesday", event: '' },
        { date: "6 June 2024", day: "Thursday", event: '<span class="event-label event-jkt48">JKT48</span> 19:00 Aturan Anti Cinta' },
        { date: "7 June 2024", day: "Friday", event: '<span class="event-label event-event">Event</span> Nyeni Fest<br><span class="event-label event-trainee">Trainee</span> 19:00 Pajama Drive' },
        { date: "8 June 2024", day: "Saturday", event: '<span class="event-label event-event">Event</span> Ekspectanica 2024<br><span class="event-label event-trainee">Trainee</span> 19:00 Pajama Drive' },
        { date: "9 June 2024", day: "Sunday", event: '<span class="event-label event-event">Event</span> Vocanight<br><span class="event-label event-trainee">Trainee</span> 16:00 Ingin Bertemu' },
        { date: "10 June 2024", day: "Monday", event: '' },
        { date: "11 June 2024", day: "Tuesday", event: '' },
        { date: "12 June 2024", day: "Wednesday", event: '' },
        { date: "13 June 2024", day: "Thursday", event: '' },
        { date: "14 June 2024", day: "Friday", event: '' },
        { date: "15 June 2024", day: "Saturday", event: '<span class="event-label event-event">Event</span> Pesta Bebas Berselancar 2024<br><span class="event-label event-event">Event</span> Latihan Pestapora, Solo' },
        { date: "16 June 2024", day: "Sunday", event: '<span class="event-label event-event">Event</span> Q-One Music 2024' },
        { date: "17 June 2024", day: "Monday", event: '' },
        { date: "18 June 2024", day: "Tuesday", event: '' },
        { date: "19 June 2024", day: "Wednesday", event: '' },
        { date: "20 June 2024", day: "Thursday", event: '' },
        { date: "21 June 2024", day: "Friday", event: '' },
        { date: "22 June 2024", day: "Saturday", event: '' },
        { date: "23 June 2024", day: "Sunday", event: '' },
        { date: "24 June 2024", day: "Monday", event: '' },
        { date: "25 June 2024", day: "Tuesday", event: '' },
        { date: "26 June 2024", day: "Wednesday", event: '' },
        { date: "27 June 2024", day: "Thursday", event: '' },
        { date: "28 June 2024", day: "Friday", event: '' },
        { date: "29 June 2024", day: "Saturday", event: '' },
        { date: "30 June 2024", day: "Sunday", event: '' },
    ],
    
};

let currentYear = 2024;
let currentMonth = 6;


function loadSchedule() {
    const scheduleBody = document.getElementById("schedule-body");
    scheduleBody.innerHTML = "";

    const key = `${currentYear}-${currentMonth}`;
    const monthSchedule = scheduleData[key] || [];

    monthSchedule.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.day}</td>
            <td>${item.event}</td>
        `;
        scheduleBody.appendChild(row);
    });

    const currentMonthYear = document.getElementById("currentMonthYear");
    currentMonthYear.textContent = new Date(currentYear, currentMonth - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
}

function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
    } else if (currentMonth < 1) {
        currentMonth = 12;
        currentYear--;
    }
    loadSchedule();
}

document.addEventListener("DOMContentLoaded", () => {
    loadSchedule();

    
});
