<section id="contact" class="relative py-20 md:py-32 overflow-hidden min-h-screen flex flex-col">
    <div class="absolute inset-0 z-0">
        <img src="assets/generated/walkway/walkway-1400.jpg" alt="Karibu Padel walkway" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-[#002B5B]/90 via-[#002B5B]/80 to-[#002B5B]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 pb-16 md:pb-24">
         <div class="text-center mb-12 md:mb-20 reveal-on-scroll">
             <span class="text-[#1DB954] tracking-widest uppercase mb-4 block">Get In Touch</span>
             <h2 class="text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
                 <span class="bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent">Book Your Session</span>
             </h2>
             <p class="text-white/70 max-w-2xl mx-auto mb-8 md:mb-12 px-4">
                 Ready to experience the best padel in Zanzibar? Reach out and let's get you on the court.
             </p>
             <a href="https://wa.me/255760777333?text=Hi%20Karibu%20Padel!%20I'd%20like%20to%20book%20a%20padel%20session." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-[#1DB954] rounded-full text-[#002B5B] shadow-lg hover:shadow-[0_0_40px_rgba(29,185,84,0.5)] transition-shadow hover:scale-105 transform duration-200">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                 <span>Book via WhatsApp</span>
             </a>
         </div>

         <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
             <?php
             $contactInfo = [
                 ['title' => 'Location', 'value' => 'Shangani, Zanzibar', 'detail' => 'Inside Africa House Garden', 'link' => 'https://maps.google.com/?q=Africa+House+Garden+Zanzibar'],
                 ['title' => 'Phone', 'value' => '+255 760 777 333', 'detail' => 'Call or WhatsApp', 'link' => 'tel:+255760777333'],
                 ['title' => 'Instagram', 'value' => '@karibupadelclub', 'detail' => 'Follow our journey', 'link' => 'https://www.instagram.com/karibupadelclub']
             ];
             foreach ($contactInfo as $index => $item) {
                 $delay = $index * 100;
                 echo "<a href=\"{$item['link']}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"relative group reveal-on-scroll\" style=\"transition-delay: {$delay}ms\">
                      <div class=\"relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/30 transition-all duration-300 h-full hover:-translate-y-2\">
                          <h3 class=\"text-white mb-2\">{$item['title']}</h3>
                          <p class=\"text-[#1DB954] mb-1 break-words\">{$item['value']}</p>
                          <p class=\"text-white/60 text-sm\">{$item['detail']}</p>
                      </div>
                 </a>";
             }
             ?>
         </div>

         <div class="relative z-10 mt-8 md:mt-12 border-t border-white/10 bg-[#002B5B]/60 backdrop-blur-sm reveal-on-scroll">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                  <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div class="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                          <p class="text-white/50 text-xs md:text-sm">© 2025 Karibu Padel. All rights reserved.</p>
                          <a href="https://islandtechsolution.com/" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors text-xs md:text-sm">designed by island tech solution</a>
                      </div>
                  </div>
              </div>
         </div>
    </div>
</section>
