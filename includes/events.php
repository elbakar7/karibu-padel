<section id="events" class="relative py-32 bg-gradient-to-b from-[#001a3d] to-[#002B5B] overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1DB954]/10 rounded-full blur-3xl animate-float-1"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1DB954]/6 rounded-full blur-3xl animate-float-2" style="animation-delay: 2s"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20 reveal-on-scroll">
            <span class="text-[#1DB954] tracking-widest uppercase mb-4 block">Join The Community</span>
            <h2 class="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                <span class="bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent">Events & Community</span>
            </h2>
            <p class="text-white/70 max-w-2xl mx-auto">
                More than just a sport — it's a lifestyle. Join our vibrant community for tournaments, social gatherings, and unforgettable moments.
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            <?php
            $events = [
                [
                    'title' => 'Monthly Tournaments',
                    'description' => 'Compete with the best players in Zanzibar',
                    'date' => 'Every Last Saturday',
                    'image' => 'assets/originals/gallery/pexels-criticalimagery-32896996.jpg',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    // Trophy
                    'icon_path' => 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6 M18 9h1.5a2.5 2.5 0 0 0 0-5H18 M4 22h16 M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z M12 15v7'
                ],
                [
                    'title' => 'Social Mixers',
                    'description' => 'Meet fellow padel enthusiasts and make friends',
                    'date' => 'Every Friday Evening',
                    'image' => 'assets/originals/gallery/image00028.jpg',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    // Users
                    'icon_path' => 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'
                ],
                [
                    'title' => 'Pro Clinics',
                    'description' => 'Learn from international padel coaches',
                    'date' => 'Weekly Sessions',
                    'image' => 'assets/originals/gallery/image00097.jpg',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    // Calendar
                    'icon_path' => 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z'
                ],
                [
                    'title' => 'VIP Nights',
                    'description' => 'Exclusive events with cocktails and ocean views',
                    'date' => 'Monthly Special',
                    'image' => 'assets/originals/gallery/image00126.jpg',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    // Sparkles
                    'icon_path' => 'm12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z M5 3v4 M3 5h4'
                ]
            ];
            
            foreach ($events as $index => $event) {
                $delay = $index * 100;
                echo "<div class=\"relative group cursor-pointer reveal-on-scroll\" style=\"transition-delay: {$delay}ms\">
                    <div class=\"relative h-[400px] rounded-3xl overflow-hidden shadow-2xl\">
                        <div class=\"absolute inset-0 transition-transform duration-500 group-hover:scale-110\">
                             <img src=\"{$event['image']}\" alt=\"{$event['title']}\" class=\"w-full h-full object-cover\" loading=\"lazy\">
                        </div>
                        <div class=\"absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/60 to-transparent\"></div>
                        <div class=\"absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500 from-[#1DB954] to-[#1DB954]/80\"></div>

                        <div class=\"absolute top-6 left-6 right-6 flex justify-between items-start\">
                            <div class=\"p-4 bg-gradient-to-br {$event['color']} rounded-2xl group-hover:rotate-12 transition-transform duration-500\">
                                <svg class=\"text-white w-7 h-7\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"{$event['icon_path']}\"></path></svg>
                            </div>
                            <div class=\"px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full\">
                                <p class=\"text-white/90 text-sm font-medium\">{$event['date']}</p>
                            </div>
                        </div>

                        <div class=\"absolute bottom-0 left-0 right-0 p-8\">
                            <h3 class=\"text-white text-2xl mb-3 font-bold\">{$event['title']}</h3>
                            <p class=\"text-white/80 mb-6\">{$event['description']}</p>
                            <button class=\"flex items-center gap-2 text-[#1DB954] group/btn transition-all hover:gap-3\">
                                <span>Learn More</span>
                                <span>→</span>
                            </button>
                        </div>
                        
                        <div class=\"absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r {$event['color']} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left\"></div>
                    </div>
                </div>";
            }
            ?>
        </div>
        
        <div class="mt-16 text-center reveal-on-scroll" style="transition-delay: 0.8s">
             <a href="https://www.instagram.com/karibupadelclub" target="_blank" rel="noopener noreferrer" class="inline-block px-12 py-4 bg-[#1DB954] rounded-full text-white relative overflow-hidden group hover:shadow-[0_0_40px_rgba(29,185,84,0.4)] transition-shadow">
                  <div class="absolute inset-0 bg-[#1DB954]/90 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span class="relative z-10 font-medium">Join the Movement → DM us on Instagram</span>
             </a>
        </div>
    </div>
</section>
