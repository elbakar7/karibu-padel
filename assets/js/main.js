document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-[#002B5B]/95', 'backdrop-blur-xl', 'shadow-lg', 'shadow-black/20');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-[#002B5B]/95', 'backdrop-blur-xl', 'shadow-lg', 'shadow-black/20');
            navbar.classList.add('bg-transparent');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 2. Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            requestAnimationFrame(() => {
                mobileMenu.classList.remove('h-0', 'opacity-0');
                mobileMenu.classList.add('h-auto', 'opacity-100');
            });
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            mobileMenu.classList.remove('h-auto', 'opacity-100');
            mobileMenu.classList.add('h-0', 'opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('h-auto', 'opacity-100');
            mobileMenu.classList.add('h-0', 'opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // 3. Hero Carousel
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentHeroSlide = 0;
    if (heroSlides.length > 0) {
        setInterval(() => {
            heroSlides[currentHeroSlide].classList.remove('opacity-100');
            heroSlides[currentHeroSlide].classList.add('opacity-0');
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            heroSlides[currentHeroSlide].classList.remove('opacity-0');
            heroSlides[currentHeroSlide].classList.add('opacity-100');
        }, 5000);
    }

    // 4. About Carousel
    const aboutSlides = document.querySelectorAll('.about-slide');
    const aboutIndicators = document.querySelectorAll('.about-indicator');
    let currentAboutSlide = 0;
    if (aboutSlides.length > 0) {
        setInterval(() => {
            // Hide current
            aboutSlides[currentAboutSlide].classList.remove('opacity-100');
            aboutSlides[currentAboutSlide].classList.add('opacity-0');
            aboutIndicators[currentAboutSlide].classList.remove('bg-[#1DB954]');
            aboutIndicators[currentAboutSlide].classList.add('bg-white/30');

            // Next
            currentAboutSlide = (currentAboutSlide + 1) % aboutSlides.length;

            // Show next
            aboutSlides[currentAboutSlide].classList.remove('opacity-0');
            aboutSlides[currentAboutSlide].classList.add('opacity-100');
            aboutIndicators[currentAboutSlide].classList.remove('bg-white/30');
            aboutIndicators[currentAboutSlide].classList.add('bg-[#1DB954]');
        }, 3000);
    }

    // 6. Scroll Reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // observer.unobserve(entry.target); // Keep observing if we want repeat (optional, user didn't specify, but usually nice to happen once)
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
});

// 5. Booking Dialog (Global functions)
function openBookingDialog() {
    const dialog = document.getElementById('booking-dialog');
    const backdrop = document.getElementById('booking-backdrop');
    const content = document.getElementById('booking-content');

    dialog.classList.remove('hidden');
    requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        content.classList.remove('opacity-0', 'scale-95');
        content.classList.add('opacity-100', 'scale-100');
    });
}

function closeBookingDialog() {
    const dialog = document.getElementById('booking-dialog');
    const backdrop = document.getElementById('booking-backdrop');
    const content = document.getElementById('booking-content');

    backdrop.classList.add('opacity-0');
    content.classList.remove('opacity-100', 'scale-100');
    content.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
        dialog.classList.add('hidden');
    }, 300);
}

function handleBookingSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const message = `Hi Karibu Padel! I'd like to book a padel session.

📋 Booking Details:
👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
📅 Date: ${data.date}
⏰ Time: ${data.time}
👥 Number of Players: ${data.players}

Looking forward to playing!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/255760777333?text=${encodedMessage}`, '_blank');
    closeBookingDialog();
}
