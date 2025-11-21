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
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>

            <form onsubmit="handleBookingSubmit(event)" class="p-6 space-y-4">
                <div class="space-y-2">
                    <label for="name" class="text-white/80 flex items-center gap-2 font-medium">Full Name</label>
                    <input id="name" name="name" type="text" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:border-[#1DB954] focus:outline-none" placeholder="John Doe">
                </div>

                <div class="space-y-2">
                    <label for="email" class="text-white/80 flex items-center gap-2 font-medium">Email</label>
                    <input id="email" name="email" type="email" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:border-[#1DB954] focus:outline-none" placeholder="john@example.com">
                </div>

                <div class="space-y-2">
                    <label for="phone" class="text-white/80 flex items-center gap-2 font-medium">Phone Number</label>
                    <input id="phone" name="phone" type="tel" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40 focus:border-[#1DB954] focus:outline-none" placeholder="+255 XXX XXX XXX">
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <label for="date" class="text-white/80 flex items-center gap-2 font-medium">Date</label>
                        <input id="date" name="date" type="date" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:border-[#1DB954] focus:outline-none">
                    </div>
                    <div class="space-y-2">
                        <label for="time" class="text-white/80 flex items-center gap-2 font-medium">Time</label>
                        <input id="time" name="time" type="time" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:border-[#1DB954] focus:outline-none">
                    </div>
                </div>

                <div class="space-y-2">
                    <label for="players" class="text-white/80 flex items-center gap-2 font-medium">Number of Players</label>
                    <select id="players" name="players" required class="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:border-[#1DB954] focus:outline-none">
                        <option value="2" class="bg-[#002B5B]">2 Players</option>
                        <option value="4" class="bg-[#002B5B]">4 Players</option>
                        <option value="6" class="bg-[#002B5B]">6+ Players</option>
                    </select>
                </div>

                <button type="submit" class="w-full mt-6 px-6 py-3 bg-[#1DB954] rounded-full text-[#002B5B] font-bold hover:bg-[#1DB954]/90 transition-colors flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                    Confirm Booking
                </button>

                <p class="text-white/50 text-xs text-center mt-4">
                    You'll be redirected to WhatsApp to complete your booking
                </p>
            </form>
        </div>
    </div>
</div>
