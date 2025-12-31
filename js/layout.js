/**
 * Vivaura Technologies - Common Layout & i18n Script
 * Handles Header/Footer injection, Mobile Menu, and Internationalization
 */

// 다국어 데이터 (Common)
const commonTranslations = {
    ko: {
        nav_solutions: '솔루션', nav_about: '회사소개', nav_events: '이벤트', nav_contact: '문의하기',
        footer_home: '홈', footer_about: '회사소개', footer_privacy: '개인정보처리방침', footer_terms: '이용약관', footer_contact: '문의하기',
        footer_copyright: '© 2026 Vivaura Technologies. All rights reserved.',
        mobile_home: '홈', mobile_about: '회사소개', mobile_smartgym: '스마트 짐', mobile_vivasport: '비바 스포츠', mobile_events: '이벤트', mobile_contact: '문의하기'
    },
    en: {
        nav_solutions: 'Solutions', nav_about: 'About', nav_events: 'Events', nav_contact: 'Contact Us',
        footer_home: 'Home', footer_about: 'About Us', footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Service', footer_contact: 'Contact',
        footer_copyright: '© 2026 Vivaura Technologies. All rights reserved.',
        mobile_home: 'Home', mobile_about: 'About', mobile_smartgym: 'Smart Gym', mobile_vivasport: 'VivaSport', mobile_events: 'Events', mobile_contact: 'Contact Us'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    
    // DOM 주입 후 초기화
    setTimeout(() => {
        initMobileMenu();
        highlightActiveLink();
        initLanguage(); // 언어 설정 초기화
    }, 50);
});

function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
    <header class="header-glass">
        <div class="container mx-auto px-6 h-20 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                    <defs>
                        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3A7DFF"/><stop offset="100%" stop-color="#00D1B2"/></linearGradient>
                    </defs>
                    <rect width="512" height="512" fill="none"/>
                    <rect x="176" y="90" width="88" height="340" rx="44" fill="url(#g1)" transform="rotate(-28 220 260)"/>
                    <rect x="248" y="90" width="88" height="340" rx="44" fill="#A6FF3B" transform="rotate(28 292 260)"/>
                </svg>
                <span class="text-xl font-bold text-white tracking-wide">Vivaura <span class="text-aurora">Technologies</span></span>
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="about.html" class="nav-link hover:text-white transition" data-i18n="nav_about">About</a>
                
                <div class="relative group h-20 flex items-center cursor-pointer">
                    <span class="hover:text-white transition flex items-center gap-1"><span data-i18n="nav_solutions">Solutions</span> <i class="fa-solid fa-chevron-down text-xs"></i></span>
                    <!-- Dropdown -->
                    <div class="absolute top-16 left-1/2 -translate-x-1/2 w-64 glass-card p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                        <a href="smartgym.html" class="block p-3 rounded-lg hover:bg-white/5 transition">
                            <div class="font-bold text-white">Smart Gym</div>
                            <div class="text-xs text-silver mt-1">IoT Fitness Solution</div>
                        </a>
                        <a href="vivasport.html" class="block p-3 rounded-lg hover:bg-white/5 transition">
                            <div class="font-bold text-white">VivaSport</div>
                            <div class="text-xs text-silver mt-1">All-in-One Platform</div>
                        </a>
                    </div>
                </div>

                <a href="event.html" class="nav-link hover:text-white transition" data-i18n="nav_events">Events</a>
                
                <!-- Language Switcher -->
                <div class="flex items-center gap-2 text-xs border-l border-white/10 pl-4 ml-2">
                    <button onclick="setLanguage('ko')" class="lang-btn hover:text-white transition" id="lang-ko">KR</button>
                    <span class="text-white/20">|</span>
                    <button onclick="setLanguage('en')" class="lang-btn hover:text-white transition" id="lang-en">EN</button>
                </div>

                <a href="contact.html" class="btn btn-primary px-5 py-2 text-sm text-navy" data-i18n="nav_contact">Contact Us</a>
            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="md:hidden text-white text-2xl focus:outline-none">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="hidden md:hidden glass-card absolute w-full border-x-0 border-t-0 rounded-none p-6 z-50">
            <div class="flex flex-col gap-6 text-lg font-bold text-white">
                <a href="index.html" class="hover:text-aurora" data-i18n="mobile_home">Home</a>
                <a href="about.html" class="hover:text-aurora" data-i18n="mobile_about">About</a>
                <a href="smartgym.html" class="hover:text-aurora" data-i18n="mobile_smartgym">Smart Gym</a>
                <a href="vivasport.html" class="hover:text-aurora" data-i18n="mobile_vivasport">VivaSport</a>
                <a href="event.html" class="hover:text-aurora" data-i18n="mobile_events">Events</a>
                <a href="contact.html" class="text-aurora" data-i18n="mobile_contact">Contact Us</a>
                <div class="flex gap-4 pt-4 border-t border-white/10 mt-2">
                    <button onclick="setLanguage('ko')" class="text-sm font-bold">KR</button>
                    <button onclick="setLanguage('en')" class="text-sm font-bold text-silver">EN</button>
                </div>
            </div>
        </div>
    </header>
    `;
}

function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer class="footer-vivaura">
        <div class="container mx-auto px-6 text-center">
            <div class="flex justify-center items-center gap-3 mb-8">
                <span class="text-2xl font-bold text-white">Vivaura Technologies</span>
            </div>
            <div class="flex justify-center gap-8 mb-8 flex-wrap">
                <a href="index.html" class="footer-link" data-i18n="footer_home">Home</a>
                <a href="about.html" class="footer-link" data-i18n="footer_about">About Us</a>
                <a href="privacy.html" class="footer-link" data-i18n="footer_privacy">Privacy Policy</a>
                <a href="terms.html" class="footer-link" data-i18n="footer_terms">Terms of Service</a>
                <a href="contact.html" class="footer-link" data-i18n="footer_contact">Contact</a>
            </div>
            <p class="text-sm text-silver/60" data-i18n="footer_copyright">© 2026 Vivaura Technologies. All rights reserved.</p>
        </div>
    </footer>
    `;
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const icon = btn.querySelector('i');
            if (menu.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });
    }
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('text-white', 'font-bold');
            link.classList.remove('text-silver');
        }
    });
}

// --- i18n Logic ---

function initLanguage() {
    const savedLang = localStorage.getItem('vivaLang') || 'ko';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    localStorage.setItem('vivaLang', lang);
    document.documentElement.lang = lang;
    
    // 1. 공통 텍스트 업데이트 (헤더/푸터)
    updateText(commonTranslations[lang]);

    // 2. 페이지별 텍스트 업데이트 (각 페이지 HTML 내 pageTranslations 변수 참조)
    if (typeof pageTranslations !== 'undefined' && pageTranslations[lang]) {
        updateText(pageTranslations[lang]);
    }

    // 3. 언어 버튼 스타일 업데이트
    updateLangButtons(lang);
}

function updateText(translations) {
    if (!translations) return;
    for (const key in translations) {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        elements.forEach(el => {
            // HTML 태그가 포함된 경우 innerHTML, 아니면 textContent
            if (translations[key].includes('<')) {
                el.innerHTML = translations[key];
            } else {
                el.textContent = translations[key];
            }
        });
    }
}

function updateLangButtons(lang) {
    const btnKo = document.getElementById('lang-ko');
    const btnEn = document.getElementById('lang-en');
    
    if (btnKo && btnEn) {
        if (lang === 'ko') {
            btnKo.classList.add('text-aurora', 'font-bold');
            btnKo.classList.remove('text-silver');
            btnEn.classList.remove('text-aurora', 'font-bold');
            btnEn.classList.add('text-silver');
        } else {
            btnEn.classList.add('text-aurora', 'font-bold');
            btnEn.classList.remove('text-silver');
            btnKo.classList.remove('text-aurora', 'font-bold');
            btnKo.classList.add('text-silver');
        }
    }
}
