// Storage helper functions
function setStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error('LocalStorage not available:', e);
        // Fallback to cookie if localStorage fails
        setCookie(key, value);
    }
}

function getStorage(key) {
    try {
        const item = localStorage.getItem(key);
        if (item) return item;
    } catch (e) {
        console.error('LocalStorage not available:', e);
    }
    // Fallback to cookie
    return getCookie(key);
}

// Cookie helper functions (Fallback)
function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Disclaimer Modal Functions
function acceptDisclaimer() {
    setStorage('disclaimerAccepted', 'true');
    const modal = document.getElementById('disclaimerModal');
    if (modal) modal.style.display = 'none';
}

function rejectDisclaimer() {
    window.location.href = 'about:blank';
}

// Check disclaimer on page load
document.addEventListener('DOMContentLoaded', function() {
    const disclaimerAccepted = getStorage('disclaimerAccepted');
    const modal = document.getElementById('disclaimerModal');
    if (modal) {
        if (disclaimerAccepted === 'true') {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'flex';
        }
    }

    renderSharedLayout();
});

// Source Modal Functions
const SOURCE_URL = 'https://github.com/bronsonacoutts/nastynomenclature';
let sourceModalLastFocus = null;

function openSourceModal() {
    const modal = document.getElementById('sourceModal');
    if (!modal) return;
    sourceModalLastFocus = document.activeElement;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    const focusable = modal.querySelector('button, [href], [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
    document.addEventListener('keydown', handleSourceModalKeydown);
}

function closeSourceModal() {
    const modal = document.getElementById('sourceModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleSourceModalKeydown);
    if (sourceModalLastFocus && typeof sourceModalLastFocus.focus === 'function') {
        sourceModalLastFocus.focus();
    }
}

function handleSourceModalKeydown(event) {
    if (event.key === 'Escape') {
        closeSourceModal();
    }
}

function confirmSourceRedirect() {
    window.location.href = SOURCE_URL;
}

// Shared Layout Rendering
const NAV_ITEMS = [
    { key: 'intro', href: 'index.html', label: 'The Intro' },
    { key: 'styles', href: 'styles.html', label: 'The Styles' },
    { key: 'forbidden', href: 'forbidden.html', label: 'The Forbidden' },
    { key: 'exchanges', href: 'exchanges.html', label: 'Exchanges' },
    { key: 'toy', href: 'toy.html', label: 'The Toy' }
];

function buildNavLinks(currentPage) {
    return NAV_ITEMS.map(item => {
        const isCurrent = currentPage === item.key;
        const classes = isCurrent
            ? 'text-fuchsia-400 transition duration-300'
            : 'hover:text-fuchsia-400 transition duration-300 hover:scale-110 transform';
        const aria = isCurrent ? ' aria-current="page"' : '';
        return `<a href="${item.href}" class="${classes}"${aria}>${item.label}</a>`;
    }).join('\n');
}

function getHeaderHTML(currentPage) {
    const navLinks = buildNavLinks(currentPage);
    return `
        <header class="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-purple-900 animate-slide-down" role="banner">
            <div class="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
                <a href="index.html" class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300" aria-label="Nasty Nomenclature home">
                    <span class="material-symbols-outlined text-fuchsia-500 text-3xl" aria-hidden="true">terminal</span>
                    <h1 class="text-2xl md:text-3xl font-bold text-white tracking-wider font-brand">
                        Nasty
                        <span class="text-fuchsia-500 neon-text">Nomenclature</span>
                    </h1>
                </a>
                <div class="flex items-center gap-6">
                    <nav class="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest text-gray-400" role="navigation" aria-label="Main navigation">
                        ${navLinks}
                    </nav>
                    <button
                        type="button"
                        onclick="openSourceModal()"
                        class="flex items-center justify-center bg-fuchsia-900/50 hover:bg-fuchsia-600 border border-fuchsia-500 text-fuchsia-100 p-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] focus:outline-none focus:ring-2 focus:ring-fuchsia-500 hover:scale-110 transform"
                        aria-label="View source code on GitHub"
                    >
                        <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.24 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                        </svg>
                        <span class="sr-only">Open source modal</span>
                    </button>
                </div>
            </div>
        </header>`;
}

function getFooterHTML() {
    return `
        <footer class="bg-black py-8 text-center border-t border-purple-900/50 mt-auto animate-slide-up" role="contentinfo">
            <p class="text-gray-500 text-sm">
                &copy; 2026 Bit Gravy. Remember: Always sanitize your inputs.
                <br>
                <a href="privacy.html" class="text-fuchsia-500 hover:text-fuchsia-400 text-xs mt-2 inline-block transition-colors duration-300 hover:underline">Privacy Policy</a>
                <br>
                <span class="text-xs opacity-50">No actual developers were harmed in the making of these puns.</span>
            </p>
        </footer>`;
}

function getSourceModalHTML() {
    return `
        <div
            id="sourceModal"
            class="hidden fixed inset-0 bg-black/80 flex items-center justify-center z-[9500] backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sourceModalTitle"
        >
            <div class="bg-gradient-to-br from-[#2d1b4e] to-[#1a0f2e] border border-fuchsia-500/50 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 text-center animate-scale-in">
                <div class="mb-4 flex justify-center">
                    <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 fill-white">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.24 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                    </svg>
                </div>
                <h2 id="sourceModalTitle" class="text-2xl font-bold text-fuchsia-300 mb-4 font-brand">Head to GitHub?</h2>
                <p class="text-gray-200 mb-6 leading-relaxed">
                    You’re about to leave Nasty Nomenclature and view the source code on GitHub. Continue?
                </p>
                <div class="flex gap-4">
                    <button type="button" onclick="closeSourceModal()" class="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 hover:shadow-lg">
                        Stay Here
                    </button>
                    <button type="button" onclick="confirmSourceRedirect()" class="flex-1 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 hover:shadow-lg hover:shadow-fuchsia-600/50">
                        Continue
                    </button>
                </div>
            </div>
        </div>`;
}

function inferCurrentPage() {
    const datasetPage = document.body?.dataset?.page;
    if (datasetPage) return datasetPage;
    const path = window.location.pathname;
    if (path.endsWith('styles.html')) return 'styles';
    if (path.endsWith('forbidden.html')) return 'forbidden';
    if (path.endsWith('exchanges.html')) return 'exchanges';
    if (path.endsWith('toy.html')) return 'toy';
    return 'intro';
}

function renderSharedLayout() {
    const currentPage = inferCurrentPage();
    const headerHost = document.getElementById('site-header');
    if (headerHost) {
        headerHost.innerHTML = getHeaderHTML(currentPage);
    }

    const footerHost = document.getElementById('site-footer');
    if (footerHost) {
        footerHost.innerHTML = getFooterHTML();
    }

    if (!document.getElementById('sourceModal')) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = getSourceModalHTML();
        document.body.appendChild(wrapper.firstElementChild);
    }

    setupPageTransitions();
    animateOnScroll();
}

// Page Transition Animation
function setupPageTransitions() {
    // Intercept navigation links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || !link.href.endsWith('.html') || link.target === '_blank' || link.hasAttribute('data-no-transition')) {
            return;
        }

        // Check if it's an internal link
        const url = new URL(link.href, window.location.origin);
        if (url.origin !== window.location.origin) {
            return;
        }

        // Prevent default and animate out
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
            main.style.animation = 'fadeOut 0.4s ease-out forwards';
        }

        // Navigate after animation
        setTimeout(() => {
            window.location.href = link.href;
        }, 400);
    }, true);
}

// Scroll-triggered animations
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideUp 0.6s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe content sections
    const sections = document.querySelectorAll('section, .content-card, .grid > div');
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
}


