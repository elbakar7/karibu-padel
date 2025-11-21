<section id="contact" class="relative py-20 md:py-32 overflow-hidden min-h-screen flex flex-col">
    <div class="absolute inset-0 z-0">
        <img src="assets/generated/walkway/walkway-1400.jpg" alt="Karibu Padel walkway" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-[#002B5B]/90 via-[#002B5B]/80 to-[#002B5B]"></div>
    </div>

    <!-- Animated background elements -->
    <div class="absolute top-20 right-20 w-96 h-96 bg-[#1DB954]/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
    <div class="absolute bottom-20 left-20 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style="animation-delay: 2s"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 pb-16 md:pb-24">
         <div class="text-center mb-12 md:mb-20 reveal-on-scroll">
             <span class="text-[#1DB954] tracking-widest uppercase mb-4 block">Get In Touch</span>
             <h2 class="text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
                 <span class="bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent">Book Your Session</span>
             </h2>
             <p class="text-white/70 max-w-2xl mx-auto mb-8 md:mb-12 px-4">
                 Ready to experience the best padel in Zanzibar? Reach out and let's get you on the court.
             </p>
             <a href="https://wa.me/255760777333?text=Hi%20Karibu%20Padel!%20I'd%20like%20to%20book%20a%20padel%20session." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-[#1DB954] rounded-full text-[#002B5B] shadow-lg hover:shadow-[0_0_40px_rgba(29,185,84,0.5)] transition-shadow hover:scale-105 transform duration-200 group">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                 <span>Book via WhatsApp</span>
             </a>
         </div>

         <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
             <?php
             $contactInfo = [
                 [
                     'title' => 'Location', 
                     'value' => 'Shangani, Zanzibar', 
                     'detail' => 'Inside Africa House Garden', 
                     'link' => 'https://maps.google.com/?q=Africa+House+Garden+Zanzibar',
                     'icon_path' => 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a3 3 0 110-6 3 3 0 010 6z'
                 ],
                 [
                     'title' => 'Phone', 
                     'value' => '+255 760 777 333', 
                     'detail' => 'Call or WhatsApp', 
                     'link' => 'tel:+255760777333',
                     'icon_path' => 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.12 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
                 ],
                 [
                     'title' => 'Instagram', 
                     'value' => '@karibupadelclub', 
                     'detail' => 'Follow our journey', 
                     'link' => 'https://www.instagram.com/karibupadelclub',
                     'icon_path' => 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01 M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6z'
                 ]
             ];
             foreach ($contactInfo as $index => $item) {
                 $delay = $index * 100;
                 echo "<a href=\"{$item['link']}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"relative group reveal-on-scroll\" style=\"transition-delay: {$delay}ms\">
                      <div class=\"relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/30 transition-all duration-300 h-full hover:-translate-y-2\">
                          <div class=\"w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1DB954] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300\">
                                <svg class=\"text-white w-6 h-6 md:w-8 md:h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"{$item['icon_path']}\"></path></svg>
                          </div>
                          <h3 class=\"text-white mb-2\">{$item['title']}</h3>
                          <p class=\"text-[#1DB954] mb-1 break-words\">{$item['value']}</p>
                          <p class=\"text-white/60 text-sm\">{$item['detail']}</p>
                          
                          <div class=\"absolute bottom-0 left-0 right-0 h-1 bg-[#1DB954] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300\"></div>
                      </div>
                 </a>";
             }
             ?>
         </div>

         <div class="text-center reveal-on-scroll" style="transition-delay: 0.5s">
              <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                   <div class="mb-6 md:mb-8">
                       <div class="inline-flex items-center gap-3 px-6 md:px-8 py-3 bg-[#1DB954]/15 border border-white/10 rounded-full">
                           <span class="text-2xl md:text-3xl" role="img" aria-label="Tropical island">🏝️</span>
                           <span class="text-white text-sm md:text-base">Zanzibar's Premier Padel Destination</span>
                       </div>
                   </div>
                   
                   <p class="text-white/60 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4">
                        Whether you're a seasoned pro or picking up a paddle for the first time, Karibu Padel welcomes you to experience the perfect blend of world-class sport and island paradise.
                   </p>

                   <div class="flex flex-wrap justify-center gap-3 md:gap-6">
                        <?php
                        $tags = ['Beginner Friendly', 'Pro Coaching', 'Equipment Rental', 'Ocean Views'];
                        foreach ($tags as $tag) {
                            echo "<div class=\"px-4 md:px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs md:text-sm hover:scale-105 transition-transform\">$tag</div>";
                        }
                        ?>
                   </div>
              </div>
         </div>

         <div class="relative z-10 mt-8 md:mt-12 border-t border-white/10 bg-[#002B5B]/60 backdrop-blur-sm reveal-on-scroll">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                  <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div class="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                          <p class="text-white/50 text-xs md:text-sm">© 2025 Karibu Padel. All rights reserved.</p>
                          <a href="https://islandtechsolution.com/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors text-xs md:text-sm">designed by island tech solution</a>
                      </div>
                      <div class="flex items-center gap-6">
                           <a href="https://www.instagram.com/karibupadelclub" target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-[#1DB954] transition-colors hover:scale-110 transform duration-200">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01 M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6z"></path></svg>
                           </a>
                           <a href="https://wa.me/255760777333" target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-[#1DB954] transition-colors hover:scale-110 transform duration-200">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                           </a>
                      </div>
                  </div>
              </div>
         </div>
    </div>
</section>
