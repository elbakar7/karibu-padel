<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300 bg-transparent" aria-label="Primary navigation">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <div class="flex items-center opacity-0 -translate-x-5 animate-reveal">
                <img src="assets/logo.png" alt="Karibu Padel Club logo" loading="eager" class="h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
            </div>

            <div class="hidden md:flex items-center gap-8">
                <?php
                $menuItems = ['About', 'Experience', 'Events', 'Gallery', 'Contact'];
                foreach ($menuItems as $index => $item) {
                    $lowerItem = strtolower($item);
                    // Using inline styles for stagger delay purely for migration speed, better in CSS
                    $delay = $index * 100;
                    echo "<a href=\"#$lowerItem\" class=\"text-white/80 hover:text-[#1DB954] transition-colors duration-200 relative group opacity-0 -translate-y-2 animate-reveal\" style=\"animation-delay: {$delay}ms\">
                        $item
                        <div class=\"absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1DB954] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200\"></div>
                    </a>";
                }
                ?>
                <button onclick="openBookingDialog()" class="px-6 py-2.5 bg-[#1DB954] rounded-full text-[#002B5B] relative overflow-hidden group opacity-0 scale-90 animate-reveal" style="animation-delay: 300ms">
                    <span class="relative z-10">Book Now</span>
                    <div class="absolute inset-0 bg-[#1DB954]/90 transform translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
                </button>
            </div>

            <button id="mobile-menu-btn" class="md:hidden text-white" type="button" aria-label="Open navigation menu" aria-expanded="false">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-[#002B5B]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden h-0 opacity-0">
        <div class="px-4 py-6 space-y-4">
            <?php foreach ($menuItems as $item): ?>
                <a href="#<?php echo strtolower($item); ?>" class="block text-white/80 hover:text-[#1DB954] transition-colors py-2 mobile-menu-link">
                    <?php echo $item; ?>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</nav>
