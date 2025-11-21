<div id="booking-dialog" class="fixed inset-0 z-50 hidden" aria-labelledby="booking-dialog-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 opacity-0" id="booking-backdrop"></div>
    <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 px-4 transition-all duration-300 opacity-0 scale-95" id="booking-content">
        <div class="bg-gradient-to-b from-[#002B5B] to-[#001a3d] rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div class="relative p-6 border-b border-white/10">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 id="booking-dialog-title" class="text-white text-2xl">Book Your Court</h2>
                        <p class="text-white/60 text-sm mt-1">Fill in your details to reserve</p>
                    </div>
                    <button onclick="closeBookingDialog()" class="text-white/60 hover:text-white transition-colors" type="button" aria-label="Close booking dialog">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>

            <form onsubmit="handleBookingSubmit(event)" class="p-6 space-y-4">
                <div class="space-y-2">
                    <label for="name" class="text-white/80 flex items-center gap-2 font-medium">
                        <svg class="w-4 h-4 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Full Name
                    </label>
                    <input id="name" name="name" type="text" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:border-[#1DB954] focus:outline-none" placeholder="John Doe">
                </div>

                <div class="space-y-2">
                    <label for="email" class="text-white/80 flex items-center gap-2 font-medium">
                         <svg class="w-4 h-4 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Email
                    </label>
                    <input id="email" name="email" type="email" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:border-[#1DB954] focus:outline-none" placeholder="john@example.com">
                </div>

                <div class="space-y-2">
                    <label for="phone" class="text-white/80 flex items-center gap-2 font-medium">
                        <svg class="w-4 h-4 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81 .7A2 2 0 0 1 22 16.92z"></path></svg>
                        Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:border-[#1DB954] focus:outline-none" placeholder="+255 XXX XXX XXX">
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <label for="date" class="text-white/80 flex items-center gap-2 font-medium">
                             <svg class="w-4 h-4 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            Date
                        </label>
                        <input id="date" name="date" type="date" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:border-[#1DB954] focus:outline-none">
                    </div>
                    <div class="space-y-2">
                        <label for="time" class="text-white/80 flex items-center gap-2 font-medium">
                            <svg class="w-4 h-4 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            Time
                        </label>
                        <input id="time" name="time" type="time" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:border-[#1DB954] focus:outline-none">
                    </div>
                </div>

                <div class="space-y-2">
                    <label for="players" class="text-white/80 flex items-center gap-2 font-medium">
                        <svg class="w-4 h-4 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        Number of Players
                    </label>
                    <select id="players" name="players" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:border-[#1DB954] focus:outline-none">
                        <option value="2" class="bg-[#002B5B]">2 Players</option>
                        <option value="4" class="bg-[#002B5B]">4 Players</option>
                        <option value="6" class="bg-[#002B5B]">6+ Players</option>
                    </select>
                </div>

                <button type="submit" class="w-full mt-6 px-6 py-3 bg-[#1DB954] rounded-full text-[#002B5B] font-bold hover:bg-[#1DB954]/90 transition-colors flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Confirm Booking
                </button>

                <p class="text-white/50 text-xs text-center mt-4">
                    You'll be redirected to WhatsApp to complete your booking
                </p>
            </form>
        </div>
    </div>
</div>
