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
                <a href="index.html#calendar">Calendar</a>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p><a href="mailto:overtonesofkc@gmail.com" target="_blank" style="color:#d4af37;">overtonesofkc@gmail.com</a></p>
                <p><a href="https://facebook.com/OvertonesofKC" target="_blank" style="color:#d4af37;">Follow us on Facebook</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 The Overtones of Kansas City. All rights reserved.</p>
        </div>
    `;
});
