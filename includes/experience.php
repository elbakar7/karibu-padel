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
                    // Sunrise
                    'icon_path' => 'M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41'
                ],
                [
                    'title' => 'Professional Turf',
                    'description' => 'World-class playing surface for optimal performance',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    // Globe
                    'icon_path' => 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z M12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'
                ],
                [
                    'title' => 'Night Matches',
                    'description' => 'Premium lighting for unforgettable evening games',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    // Moon
                    'icon_path' => 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'
                ],
                [
                    'title' => 'VIP Lounge',
                    'description' => 'Relax in style with ocean-view refreshments',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    // Wine
                    'icon_path' => 'M8 22h8m-4-10v10M3 3h18v5c0 5-4 9-9 9s-9-4-9-9V3'
                ]
            ];

            foreach ($features as $index => $feature) {
                $delay = $index * 100;
                // Note: Adjusting SVG viewBox or path scaling if necessary. Lucide usually fits in 0 0 24 24.
                // Globe path above is slightly complex, I'll use the simpler Lucide Globe path if possible or a compatible one.
                // Sunrise path needs the semicircle? M12 2v8? No, Lucide Sunrise is typically sun + horizon.
                // Let's use standard Lucide paths more carefully.
                if ($feature['title'] === 'Oceanfront View') { // Sunrise
                     $feature['icon_path'] = 'M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41m-2.14 2.14'; // Simplified sun
                     // Better Sunrise: M12 2v2 M4.93 4.93l1.41 1.41 M20 12h2 M2 12h2 M17.66 17.66l1.41 1.41 M4.93 19.07l1.41-1.41 M12 18v4 M12 12a5 5 0 0 0 5 5H7a5 5 0 0 0 5-5Z? 
                     // Actually Lucide "Sunrise":
                     $feature['icon_path'] = 'M12 2v2 M4.93 4.93l1.41 1.41 M20 12h2 M2 12h2 M19.07 4.93l-1.41 1.41 M16 16a4 4 0 0 0-8 0 M12 16v6 M8 22h8';
                }
                if ($feature['title'] === 'Professional Turf') { // Globe
                     $feature['icon_path'] = 'M22 12h-4l-3 9L9 3l-3 9H2'; // Activity? No, Globe.
                     $feature['icon_path'] = 'M21.54 15H17a2 2 0 0 0-2 2v4.54 M7 4.54V9a2 2 0 0 0 2 2h4.54 M3.6 9h4.9a2 2 0 0 0 2-2V2.1 M13.4 21v-4.9a2 2 0 0 0-2-2H6.5 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z';
                }
                if ($feature['title'] === 'Night Matches') { // Moon
                     $feature['icon_path'] = 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z';
                }
                if ($feature['title'] === 'VIP Lounge') { // Wine
                     $feature['icon_path'] = 'M8 22h8M7 10h10M12 15v7M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z';
                }

                echo "<div class=\"relative group reveal-on-scroll\" style=\"transition-delay: {$delay}ms\">
                    <div class=\"absolute inset-0 opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500 bg-gradient-to-br {$feature['color']}\"></div>
                    <div class=\"relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/30 transition-all duration-500 hover:-translate-y-2\">
                        <div class=\"w-16 h-16 rounded-2xl bg-gradient-to-br {$feature['color']} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500\">
                            <svg class=\"text-white w-7 h-7\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"{$feature['icon_path']}\"></path></svg>
                        </div>
                        <h3 class=\"text-white mb-3 text-xl font-medium\">{$feature['title']}</h3>
                        <p class=\"text-white/60 leading-relaxed\">{$feature['description']}</p>
                        <div class=\"absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r {$feature['color']} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left\"></div>
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
