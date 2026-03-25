// Shared footer for all pages - edit this file to update footer everywhere
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');
    if (!footer) return;
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h3>The Overtones of KC</h3>
                <p>Kansas City's Big Band</p>
                <p>Playing swing and dance music since 1997</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="musicians.html">Musicians</a>
                <a href="music.html">Music Repertoire</a>
                <a href="videos.html">Videos</a>
                <a href="photos.html">Photos</a>
                <a href="testimonials.html">Testimonials</a>
                <a href="calendar.html">Calendar</a>
                <a href="contact.html">Contact</a>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p><a href="mailto:overtonesofkc@gmail.com" target="_blank" style="color:#d4af37;">overtonesofkc@gmail.com</a></p>
                <p style="color:#ccc; margin-top:0.4rem;">Larry Fitzpatrick, Music Director</p>
                <p class="footer-phone" aria-label="Phone: 816-260-7869" style="color:#d4af37; font-weight:600;"><span data-d="("></span><span data-d="8"></span><span data-d="1"></span><span data-d="6"></span><span data-d=")"></span><span data-d=" "></span><span data-d="2"></span><span data-d="6"></span><span data-d="0"></span><span data-d="-"></span><span data-d="7"></span><span data-d="8"></span><span data-d="6"></span><span data-d="9"></span></p>
                <p><a href="https://facebook.com/OvertonesofKC" target="_blank" rel="noopener" style="color:#d4af37; display:inline-flex; align-items:center; gap:0.4rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" width="18" height="18"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg> Follow us on Facebook</a></p>
                <p><a href="https://www.youtube.com/@OvertonesofKC" target="_blank" rel="noopener" style="color:#d4af37; display:inline-flex; align-items:center; gap:0.4rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> Watch us on YouTube</a></p>
                <p style="margin-top:1rem;"><a href="contact.html" style="background:#d4af37; color:#1a1a2e; padding:0.5rem 1.2rem; border-radius:5px; font-weight:bold; text-decoration:none;">Book Us &rarr;</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 The Overtones of Kansas City. All rights reserved.</p>
        </div>
    `;
});
