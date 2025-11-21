<section class="relative h-screen w-full overflow-hidden">
    <!-- Slides -->
    <div id="hero-carousel" class="absolute inset-0">
        <?php
        $heroImages = [
            'assets/originals/gallery/image00098.jpg',
            'assets/originals/gallery/image00041.jpg',
            'assets/originals/gallery/image00109.jpg'
        ];
        foreach ($heroImages as $index => $image) {
            $activeClass = $index === 0 ? 'opacity-100' : 'opacity-0';
            echo "<div class=\"hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out $activeClass\">
                <img src=\"$image\" alt=\"Karibu Padel Club - Slide " . ($index + 1) . "\" class=\"w-full h-full object-cover hover:scale-105 transition-transform duration-[10s] ease-linear\">
                <div class=\"absolute inset-0 bg-gradient-to-b from-[#001a3d]/70 via-[#001a3d]/30 to-[#002B5B]/85\"></div>
            </div>";
        }
        ?>
    </div>

    <!-- Content -->
    <div class="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <div class="mb-8">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
                <span class="block text-white animate-reveal" style="animation-delay: 0.3s">Karibu Padel Club</span>
            </h1>
        </div>

        <p class="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto px-4 animate-reveal" style="animation-delay: 0.6s">
            The No.1 Padel Court & Club in Zanzibar
        </p>

        <button onclick="openBookingDialog()" class="inline-block px-10 md:px-12 py-3 md:py-4 bg-[#1DB954] rounded-full text-[#002B5B] relative overflow-hidden group shadow-lg hover:shadow-[0_0_40px_rgba(29,185,84,0.5)] transition-shadow animate-reveal" style="animation-delay: 0.7s">
            <div class="absolute inset-0 bg-[#1DB954]/90 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span class="relative z-10 font-medium">Book Your Court</span>
        </button>

        <a href="#about" class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/70" aria-label="Scroll down">
            <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#002B5B] to-transparent z-10"></div>
</section>
