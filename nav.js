// Shared navigation for all pages - edit this file to update the nav everywhere
// To add/remove pages, edit the navLinks array below.
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Determine which page is active based on current URL
    const page = window.location.pathname.split('/').pop() || 'index.html';

    const navLinks = [
        { href: 'index.html',    label: 'Home' },
        { href: 'musicians.html', label: 'Musicians' },
        { href: 'music.html',    label: 'Music' },
        { href: 'index.html#calendar', label: 'Calendar' },
        { href: 'index.html#contact',  label: 'Contact' },
    ];

    const linkItems = navLinks.map(link => {
        const isActive = link.href === page || link.href.startsWith(page + '#');
        return `<li><a href="${link.href}"${isActive ? ' class="active"' : ''}>${link.label}</a></li>`;
    }).join('\n                ');

    nav.innerHTML = `
            <div class="logo">The Overtones of KC</div>
            <button class="menu-toggle" onclick="toggleMenu()">☰</button>
            <ul class="nav-links" id="navLinks">
                ${linkItems}
            </ul>`;

    // Close mobile menu when a link is clicked
    nav.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('active');
        });
    });
});

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}
