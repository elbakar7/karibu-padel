<section id="about" class="relative py-32 bg-gradient-to-b from-[#002B5B] to-[#001a3d] overflow-hidden">
    <div class="absolute top-20 right-10 w-72 h-72 bg-[#1DB954]/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-[#1DB954]/5 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="reveal-on-scroll">
                <div class="inline-block mb-4">
                    <span class="text-[#1DB954] tracking-widest uppercase">Welcome to Paradise</span>
                </div>

                <h2 class="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                    <span class="bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent">
                        No.1 Padel Club
                    </span>
                    <br />
                    <span class="text-white/90">in Zanzibar</span>
                </h2>

                <p class="text-white/70 mb-6 leading-relaxed">
                    Nestled inside the iconic Africa House Garden, Karibu Padel combines world-class sport, vibrant lifestyle, and the unmistakable Zanzibar spirit. From expert-led lessons to competitive tournaments and unforgettable social vibes, we're more than a club — we're a community.
                </p>

                <p class="text-white/70 mb-8 leading-relaxed">
                    Experience padel like never before, with breathtaking ocean views, premium facilities, and the warm Karibu welcome that makes every visit special.
                </p>

                <div class="flex flex-wrap gap-4">
                    <?php
                    $features = [
                        ['icon' => '🌅', 'text' => 'Ocean Views'],
                        ['icon' => '🎾', 'text' => 'Pro Coaching'],
                        ['icon' => '🌴', 'text' => 'Tropical Vibe'],
                        ['icon' => '🏆', 'text' => 'Tournaments']
                    ];
                    foreach ($features as $feature) {
                        echo "<div class=\"flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:scale-105 transition-transform duration-200\">
                            <span>{$feature['icon']}</span>
                            <span class=\"text-white/80\">{$feature['text']}</span>
                        </div>";
                    }
                    ?>
                </div>
            </div>

            <div class="relative reveal-on-scroll" style="transition-delay: 0.2s">
                <div class="relative h-[600px] rounded-3xl overflow-hidden" id="about-carousel">
                    <?php
                    $aboutImages = [
                        'assets/originals/gallery/image00060.jpg',
                        'assets/originals/gallery/image00109.jpg',
                        'assets/originals/gallery/IMG_3051.jpg'
                    ];
                    foreach ($aboutImages as $index => $image) {
                         $opacity = $index === 0 ? 'opacity-100' : 'opacity-0';
                         echo "<div class=\"about-slide absolute inset-0 transition-opacity duration-1000 ease-in-out $opacity\">
                            <img src=\"$image\" alt=\"Karibu Padel\" class=\"w-full h-full object-cover\">
                         </div>";
                    }
                    ?>
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-[#002B5B]/80 via-transparent to-transparent"></div>
                    
                    <div class="absolute top-6 right-6 bg-[#1DB954] px-6 py-3 rounded-full animate-bounce-slow">
                        <p class="text-[#002B5B]">#1 in Zanzibar</p>
                    </div>

                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                            <div class="flex gap-2 mb-4">
                                <?php foreach ($aboutImages as $index => $_): ?>
                                    <div class="about-indicator h-1 rounded-full flex-1 <?php echo $index === 0 ? 'bg-[#1DB954]' : 'bg-white/30'; ?>" data-index="<?php echo $index; ?>"></div>
                                <?php endforeach; ?>
                            </div>
                            <p class="text-white/90">Swipe to explore our facilities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
