/**
 * Vivaura Technologies - Common Layout Script
 * Handles Header/Footer injection and Global UI logic
 */

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    // 약간의 지연 후 이벤트 바인딩 (DOM 주입 대기)
    setTimeout(() => {
        initMobileMenu();
        highlightActiveLink();
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
                <span class="text-xl font-bold text-white tracking-wide">Vivaura <span class="text-aurora">Tech</span></span>
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="about.html" class="nav-link hover:text-white transition">About</a>
                
                <div class="relative group h-20 flex items-center cursor-pointer">
                    <span class="hover:text-white transition flex items-center gap-1">Solutions <i class="fa-solid fa-chevron-down text-xs"></i></span>
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

                <a href="event.html" class="nav-link hover:text-white transition">Events</a>
                <a href="contact.html" class="btn btn-primary px-5 py-2 text-sm text-navy">Contact Us</a>
            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="md:hidden text-white text-2xl focus:outline-none">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="hidden md:hidden glass-card absolute w-full border-x-0 border-t-0 rounded-none p-6 z-50">
            <div class="flex flex-col gap-6 text-lg font-bold text-white">
                <a href="about.html" class="hover:text-aurora">About</a>
                <a href="smartgym.html" class="hover:text-aurora">Smart Gym</a>
                <a href="vivasport.html" class="hover:text-aurora">VivaSport</a>
                <a href="event.html" class="hover:text-aurora">Events</a>
                <a href="contact.html" class="text-aurora">Contact Us</a>
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
                <a href="index.html" class="footer-link">Home</a>
                <a href="about.html" class="footer-link">About Us</a>
                <a href="privacy.html" class="footer-link">Privacy Policy</a>
                <a href="terms.html" class="footer-link">Terms of Service</a>
                <a href="contact.html" class="footer-link">Contact</a>
            </div>
            <p class="text-sm text-silver/60">© 2025 Vivaura Technologies. All rights reserved.</p>
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
