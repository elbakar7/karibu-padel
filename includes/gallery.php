<section id="gallery" class="relative py-12 sm:py-20 md:py-32 pb-16 sm:pb-24 md:pb-40 bg-gradient-to-b from-[#002B5B] via-[#001a3d] to-[#002B5B] overflow-hidden">
    <div class="absolute top-20 left-10 w-[600px] h-[600px] bg-[#00BFA6]/5 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FFD479]/5 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s"></div>

    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-8 sm:mb-12 md:mb-20 reveal-on-scroll">
             <div class="inline-flex items-center gap-2 mb-4 sm:mb-6">
                 <svg class="w-5 h-5 text-[#00BFA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                 <span class="text-[#00BFA6] tracking-[0.3em] uppercase text-sm font-medium">Captured Moments</span>
             </div>

             <h2 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                Our <span class="bg-gradient-to-r from-[#00BFA6] via-[#FFD479] to-[#FF6B5A] bg-clip-text text-transparent">Gallery</span>
             </h2>

             <p class="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                Experience the energy, passion, and community that makes Karibu Padel Club extraordinary
             </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[280px] gap-3 sm:gap-4 md:gap-5">
             <?php
             $galleryImages = glob('assets/originals/gallery/*.{jpg,jpeg,png,webp,JPG}', GLOB_BRACE);
             
             $patterns = [
                 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
                 'col-span-1 row-span-1',
                 'col-span-1 row-span-1 md:col-span-1 md:row-span-2',
                 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
                 'col-span-1 row-span-1',
                 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
                 'col-span-1 row-span-1',
                 'col-span-1 row-span-1 md:col-span-1 md:row-span-2',
                 'col-span-1 row-span-1 md:col-span-3 md:row-span-1',
                 'col-span-1 row-span-1',
                 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
                 'col-span-1 row-span-1',
             ];

             foreach ($galleryImages as $index => $image) {
                 $class = $patterns[$index % count($patterns)];
                 $delay = ($index % 6) * 50;
                 
                 echo "<div class=\"relative group $class reveal-on-scroll\" style=\"transition-delay: {$delay}ms\">
                      <div class=\"relative h-full w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#001a3d] to-[#002B5B] shadow-xl transition-all duration-300\">
                           <img src=\"$image\" alt=\"Gallery $index\" class=\"w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75\" loading=\"lazy\">
                           <div class=\"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500\"></div>
                           <div class=\"absolute bottom-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500\">
                               <span class=\"text-white/90 text-xs sm:text-sm font-medium\">#".($index+1)."</span>
                           </div>
                      </div>
                 </div>";
             }
             ?>
        </div>
    </div>
</section>
