<section id="events" class="relative py-32 bg-gradient-to-b from-[#001a3d] to-[#002B5B] overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1DB954]/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1DB954]/6 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s"></div>

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
                    'icon_path' => 'M19 11H5m14 0a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                ],
                [
                    'title' => 'Social Mixers',
                    'description' => 'Meet fellow padel enthusiasts and make friends',
                    'date' => 'Every Friday Evening',
                    'image' => 'assets/originals/gallery/image00028.jpg',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    'icon_path' => 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                ],
                [
                    'title' => 'Pro Clinics',
                    'description' => 'Learn from international padel coaches',
                    'date' => 'Weekly Sessions',
                    'image' => 'assets/originals/gallery/image00097.jpg',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    'icon_path' => 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                ],
                [
                    'title' => 'VIP Nights',
                    'description' => 'Exclusive events with cocktails and ocean views',
                    'date' => 'Monthly Special',
                    'image' => 'assets/originals/gallery/image00126.jpg',
                    'color' => 'from-[#1DB954] to-[#1DB954]/80',
                    'icon_path' => 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
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
