// Shared footer for all pages - edit this file to update footer everywhere
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');
    if (!footer) return;
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h3>The Overtones of KC</h3>
                <p>Kansas City's Premier Big Band</p>
                <p>Playing swing and dance music since 1997</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="index.html">Home</a>
                <a href="musicians.html">Musicians</a>
                <a href="music.html">Music Repertoire</a>
                <a href="videos.html">Videos</a>
                <a href="index.html#calendar">Calendar</a>
                <a href="contact.html">Contact</a>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p><a href="mailto:overtonesofkc@gmail.com" target="_blank" style="color:#d4af37;">overtonesofkc@gmail.com</a></p>
                <p style="color:#ccc; margin-top:0.4rem;">Larry Fitzpatrick, Band Director</p>
                <p class="footer-phone" aria-label="Phone: 816-260-7869" style="color:#d4af37; font-weight:600;"><span data-d="("></span><span data-d="8"></span><span data-d="1"></span><span data-d="6"></span><span data-d=")"></span><span data-d=" "></span><span data-d="2"></span><span data-d="6"></span><span data-d="0"></span><span data-d="-"></span><span data-d="7"></span><span data-d="8"></span><span data-d="6"></span><span data-d="9"></span></p>
                <p><a href="https://facebook.com/OvertonesofKC" target="_blank" style="color:#d4af37;">Follow us on Facebook</a></p>
                <p style="margin-top:1rem;"><a href="contact.html" style="background:#d4af37; color:#1a1a2e; padding:0.5rem 1.2rem; border-radius:5px; font-weight:bold; text-decoration:none;">Book Us &rarr;</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 The Overtones of Kansas City. All rights reserved.</p>
        </div>
    `;
});
