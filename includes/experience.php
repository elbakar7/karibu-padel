<section id="experience" class="relative py-32 bg-[#001a3d] overflow-hidden">
    <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-[#001a3d] via-[#001a3d]/50 to-[#001a3d] z-10"></div>
        <div class="absolute inset-0">
            <img src="assets/generated/courtside/courtside-1280.jpg" alt="Padel Court" class="w-full h-full object-cover opacity-60">
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div class="text-center mb-20 reveal-on-scroll">
            <span class="text-[#1DB954] tracking-widest uppercase mb-4 block">Premium Facilities</span>
            <h2 class="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                <span class="bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent">The Court Experience</span>
            </h2>
            <p class="text-white/70 max-w-2xl mx-auto">
                From sunrise sessions to moonlit matches, experience padel in paradise
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php
            $features = [
                [
                    'title' => 'Oceanfront View',
                    'description' => 'Play with the Indian Ocean as your backdrop',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    'icon_path' => 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707'
                ],
                [
                    'title' => 'Professional Turf',
                    'description' => 'World-class playing surface for optimal performance',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    'icon_path' => 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                ],
                [
                    'title' => 'Night Matches',
                    'description' => 'Premium lighting for unforgettable evening games',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    'icon_path' => 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                ],
                [
                    'title' => 'VIP Lounge',
                    'description' => 'Relax in style with ocean-view refreshments',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    'icon_path' => 'M8 21h8m-4-8v8M4.929 4h14.142L12 13 4.929 4z'
                ]
            ];

            foreach ($features as $index => $feature) {
                $delay = $index * 100;
                echo "<div class=\"relative group reveal-on-scroll\" style=\"transition-delay: {$delay}ms\">
                    <div class=\"absolute inset-0 opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 bg-gradient-to-br {$feature['color']}\"></div>
                    <div class=\"relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/30 transition-all duration-500 hover:-translate-y-2\">
                        <div class=\"w-16 h-16 rounded-2xl bg-gradient-to-br {$feature['color']} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500\">
                            <svg class=\"text-white w-7 h-7\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"{$feature['icon_path']}\"></path></svg>
                        </div>
                        <h3 class=\"text-white mb-3 text-xl font-medium\">{$feature['title']}</h3>
                        <p class=\"text-white/60 leading-relaxed\">{$feature['description']}</p>
                    </div>
                </div>";
            }
            ?>
        </div>

        <div class="mt-20 text-center reveal-on-scroll" style="transition-delay: 0.6s">
            <div class="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-3xl hover:scale-105 transition-transform duration-300">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <?php
                    $stats = [
                        ['value' => '1', 'label' => 'Premium Courts'],
                        ['value' => '14', 'label' => 'Hours Daily'],
                        ['value' => '50+', 'label' => 'Happy Players'],
                        ['value' => '#1', 'label' => 'In Zanzibar']
                    ];
                    foreach ($stats as $stat) {
                        echo "<div>
                            <div class=\"text-3xl md:text-4xl bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent mb-2 font-bold\">{$stat['value']}</div>
                            <div class=\"text-white/60 text-sm\">{$stat['label']}</div>
                        </div>";
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
