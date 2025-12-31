/**
 * Vivaura Technologies - Common Layout & i18n Script
 * Handles Header/Footer injection, Mobile Menu, and Internationalization
 */

// 다국어 데이터 (Common)
const commonTranslations = {
    ko: {
        nav_home: '홈', nav_solutions: '솔루션', nav_about: '회사소개', nav_contact: '고객지원',
        sub_smartgym: '저비용 레트로핏 솔루션', sub_vivasport: '올인원 스포츠 앱',
        mobile_home: '홈', mobile_solutions: '솔루션', mobile_about: '회사소개', mobile_contact: '고객지원',
        footer_home: '홈', footer_privacy: '개인정보처리방침', footer_terms: '이용약관', footer_inquiry: '문의하기',
        footer_copyright: '© 2025 Vivaura Technologies. All rights reserved.'
    },
    en: {
        nav_home: 'Home', nav_solutions: 'Solutions', nav_about: 'About', nav_contact: 'Support',
        sub_smartgym: 'Low-cost Retrofit Solution', sub_vivasport: 'All-in-One Sports App',
        mobile_home: 'Home', mobile_solutions: 'Solutions', mobile_about: 'About', mobile_contact: 'Support',
        footer_home: 'Home', footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Service', footer_inquiry: 'Inquiry',
        footer_copyright: '© 2025 Vivaura Technologies. All rights reserved.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    
    setTimeout(() => {
        initMobileMenu();
        highlightActiveLink();
        initLanguage(); 
    }, 50);
});

function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
    <header class="header-glass">
        <div class="container mx-auto px-6 h-20 flex justify-between items-center">
            <!-- Logo -->
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
                <a href="index.html" class="nav-link hover:text-white transition" data-i18n="nav_home">홈</a>
                
                <div class="relative group h-20 flex items-center cursor-pointer">
                    <button class="flex items-center gap-1 text-white font-bold transition hover:text-[#00D1B2]">
                        <span data-i18n="nav_solutions">솔루션</span> <i class="fa-solid fa-chevron-down text-xs mt-0.5 text-slate-500 group-hover:text-[#00D1B2]"></i>
                    </button>
                    <!-- Dropdown with Icons -->
                    <div class="absolute top-16 left-1/2 -translate-x-1/2 w-80 glass-card p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 text-left">
                        <div class="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Hardware</div>
                        <a href="smartgym.html" class="block p-3 rounded-xl hover:bg-white/5 transition group/item">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-[#00D1B2]/20 flex items-center justify-center text-[#00D1B2] group-hover/item:scale-110 transition"><i class="fa-solid fa-dumbbell"></i></div>
                                <div><span class="block font-bold text-white text-sm group-hover/item:text-[#00D1B2] transition">Smart Gym</span><span class="block text-xs text-[#AEB4C2] mt-0.5" data-i18n="sub_smartgym">저비용 레트로핏 솔루션</span></div>
                            </div>
                        </a>
                        <div class="px-3 py-2 pt-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Software</div>
                        <a href="vivasport.html" class="block p-3 rounded-xl hover:bg-white/5 transition group/item">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-[#3A7DFF]/20 flex items-center justify-center text-[#3A7DFF] group-hover/item:scale-110 transition"><i class="fa-solid fa-mobile-screen"></i></div>
                                <div><span class="block font-bold text-white text-sm group-hover/item:text-[#3A7DFF] transition">VivaSport Platform</span><span class="block text-xs text-[#AEB4C2] mt-0.5" data-i18n="sub_vivasport">올인원 스포츠 앱</span></div>
                            </div>
                        </a>
                    </div>
                </div>

                <a href="about.html" class="nav-link text-[#AEB4C2] hover:text-white transition" data-i18n="nav_about">회사소개</a>
                <a href="partnership.html" class="nav-link text-[#AEB4C2] hover:text-white transition" data-i18n="nav_contact">고객지원</a>
            </nav>

            <!-- Language & Mobile Toggle -->
            <div class="flex items-center gap-5">
                <!-- 원본 스타일 복원: gap-2, pr-4, mr-2 -->
                <div class="hidden md:flex gap-2 text-sm text-[#AEB4C2] font-medium border-r border-white/10 pr-4 mr-2">
                    <button onclick="setLanguage('ko')" class="lang-btn hover:text-white transition" id="lang-ko">KR</button>
                    <button onclick="setLanguage('en')" class="lang-btn hover:text-white transition" id="lang-en">EN</button>
                </div>
                <button id="mobile-menu-btn" class="md:hidden text-white text-2xl focus:outline-none">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="hidden md:hidden glass-card absolute w-full border-x-0 border-t-0 rounded-none p-6 z-50 bg-[#0B1020]">
            <div class="flex flex-col gap-6">
                <div class="text-xs font-bold text-slate-500 uppercase tracking-widest" data-i18n="mobile_solutions">Solutions</div>
                <a href="smartgym.html" class="flex items-center gap-3 text-xl text-white font-bold"><i class="fa-solid fa-dumbbell text-[#00D1B2] w-6"></i> Smart Gym</a>
                <a href="vivasport.html" class="flex items-center gap-3 text-xl text-white font-bold"><i class="fa-solid fa-mobile-screen text-[#3A7DFF] w-6"></i> VivaSport</a>
                <hr class="border-white/10 my-2">
                <a href="index.html" class="text-[#AEB4C2] text-lg" data-i18n="mobile_home">홈</a>
                <a href="about.html" class="text-[#AEB4C2] text-lg" data-i18n="mobile_about">회사소개</a>
                <a href="partnership.html" class="text-[#AEB4C2] text-lg" data-i18n="mobile_contact">고객지원</a>
                <div class="flex gap-4 pt-4">
                    <button onclick="setLanguage('ko')" class="text-white font-bold">KR</button>
                    <button onclick="setLanguage('en')" class="text-[#AEB4C2]">EN</button>
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
            <!-- Logo 제거 (푸터 심플하게) -->
            <div class="flex justify-center gap-8 mb-8 flex-wrap">
                <a href="index.html" class="footer-link" data-i18n="footer_home">홈</a>
                <a href="privacy.html" class="footer-link" data-i18n="footer_privacy">개인정보처리방침</a>
                <a href="terms.html" class="footer-link" data-i18n="footer_terms">이용약관</a>
                <a href="partnership.html" class="footer-link" data-i18n="footer_inquiry">문의하기</a>
            </div>
            <p class="text-sm text-silver/60" data-i18n="footer_copyright">© 2025 Vivaura Technologies. All rights reserved.</p>
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
            link.classList.remove('text-[#AEB4C2]');
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
    
    updateText(commonTranslations[lang]);

    if (typeof pageTranslations !== 'undefined' && pageTranslations[lang]) {
        updateText(pageTranslations[lang]);
    }

    updateLangButtons(lang);
}

function updateText(translations) {
    if (!translations) return;
    for (const key in translations) {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        elements.forEach(el => {
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
    
    // 원본 스타일 복원: 활성화 시 흰색+Bold (이전 버전: text-aurora 제거)
    if (btnKo && btnEn) {
        if (lang === 'ko') {
            btnKo.classList.add('text-white', 'font-bold');
            btnKo.classList.remove('text-[#AEB4C2]');
            btnEn.classList.remove('text-white', 'font-bold');
            btnEn.classList.add('text-[#AEB4C2]');
        } else {
            btnEn.classList.add('text-white', 'font-bold');
            btnEn.classList.remove('text-[#AEB4C2]');
            btnKo.classList.remove('text-white', 'font-bold');
            btnKo.classList.add('text-[#AEB4C2]');
        }
    }
}
