# Claude Code Instructions for Overtones Website

## Project Context
You are helping build a website for The Overtones of Kansas City, a 16-piece big band. The site is hosted on GitHub Pages with a custom domain (overtonesofkc.com).

## Current Status
- ✅ Homepage (index.html) - Complete with hero, about, calendar embed, features
- ✅ Members page (members.html) - Band roster by section (no birthdays!)
- ✅ Shared styles (styles.css) - Responsive design, navy/gold theme
- ⏳ Music library page - Needs to be built
- ⏳ Photos page - Not started
- ⏳ Contact form - Not started

## Key Requirements

### Design Principles
1. **Color scheme**: Navy (#1a1a2e, #16213e), Gold (#d4af37), White
2. **Mobile-first**: All pages must be fully responsive
3. **Static HTML only**: No server-side code (GitHub Pages limitation)
4. **Performance**: Keep it fast, optimize images, minimal JS
5. **Maintainability**: Future band members should be able to update easily

### Technical Constraints
- **GitHub Pages compatible** - static HTML/CSS/JS only
- **No localStorage/sessionStorage** for artifacts (in-memory state only)
- **Custom domain**: overtonesofkc.com
- **Google Calendar embed** using overtonesofkc@gmail.com
- **All assets hosted in repo** or via CDN

### Content Guidelines
- **NO personal information**: No birthdays, addresses, personal emails, or phone numbers
- **Public contact only**: Band email (overtonesofkc@gmail.com)
- **Professional tone**: Sophisticated but approachable
- **Inclusive**: Easy for non-technical people to update - **IMPORTANT**

## Specific Components to Build

### 1. Music Library Page (music.html)
**Features needed:**
- Display all 182 songs from repertoire
- Search by title or artist
- Filter by vocal/instrumental
- Sort by alphabetical, year, or votes
- Upvote buttons for each song
- Note: Use in-memory state for votes (or localStorage with warning)
- Responsive grid layout
- Integration points for future SoundCloud/YouTube embeds

**Data source:** Overtones Library List (182 songs)
- Include: Title, Artist, Year, Vocal indicator
- Format: Clean, scannable list with good typography
- Call to action: "Book us to hear these live!"

### 2. Photo Gallery Page
**Features needed:**
- Grid layout of performance photos
- Lightbox/modal for full-size viewing
- Organized by event or date
- Mobile-friendly
- Lazy loading for performance

### 3. Contact Form
**Recommended approach:**
- Use Formspree (free tier) or similar service
- Fields: Name, Email, Phone, Event Date, Message
- Success/error messaging
- Mobile-friendly layout

## Member Roster Management

### Adding New Members
```html
<div class="member-card">
    <div class="member-photo [section-class]">🎺</div>
    <div class="member-info">
        <h3>Member Name</h3>
        <div class="member-instrument">Instrument</div>
    </div>
</div>
```

Section classes: `.sax`, `.trombone`, `.trumpet`, `.rhythm`, `.alumni`

### Instrument Emoji Reference
- Saxophone: 🎷
- Trombone: 🎺 (same emoji, different CSS class for color)
- Trumpet: 🎺 (same emoji, different CSS class for color)
- Drums: 🥁
- Piano: 🎹
- Bass: 🎸

### Alumni Section
Uncomment the alumni section in members.html when needed. Add years active:
```html
<div class="member-instrument">Trumpet • 1997-2015</div>
```

## Future Integration Notes

### SoundCloud Embeds
```html
<iframe width="100%" height="166" scrolling="no" frameborder="no"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID">
</iframe>
```

### YouTube Embeds
```html
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" allowfullscreen>
</iframe>
```

### Google Calendar
Already embedded in index.html. To update calendar ID:
```html
<iframe src="https://calendar.google.com/calendar/embed?src=NEW_CALENDAR_ID%40gmail.com&ctz=America%2FChicago">
</iframe>
```

## Voting Systems

### Option 1: In-Memory (Current Implementation)
- Votes reset on page refresh
- Simple, no backend needed
- Good for demos and testing

### Option 2: Persistent Voting (Future)
Options to consider:
- Firebase Realtime Database (free tier)
- Supabase (free tier)
- GitHub Issues as database (creative hack)
- External service (Slido, Mentimeter for live voting)

### Option 3: Live Gig Voting
Use **Slido** or **Mentimeter** for real-time setlist voting:
1. Create poll with that night's 30 songs
2. Generate QR code
3. Print sign for gig
4. Band director watches results live
5. Cost: Free tier or $15/month

## Testing Checklist

Before deploying any changes:
- [ ] Test on mobile (iPhone and Android sizes)
- [ ] Test on tablet
- [ ] Test on desktop (various screen sizes)
- [ ] Check all navigation links work
- [ ] Verify responsive design (no horizontal scroll)
- [ ] Test form submissions (if applicable)
- [ ] Check calendar embed loads
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Check for console errors
- [ ] Test page load speed

## Git Workflow

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit: Overtones website"
git branch -M main
git remote add origin https://github.com/USERNAME/overtonesofkc.github.io.git
git push -u origin main
```

### Making Updates
```bash
git add .
git commit -m "Description of changes"
git push
```

### GitHub Pages Setup
1. Go to repository Settings → Pages
2. Source: Deploy from branch
3. Branch: main, folder: / (root)
4. Custom domain: overtonesofkc.com
5. Wait ~5 minutes for DNS propagation

## Style Customization

### Changing Colors
In styles.css, find these and replace:
- Primary dark: `#1a1a2e` and `#16213e`
- Gold accent: `#d4af37`
- Hover gold: `#b8941f`

### Changing Fonts
Update the font-family in body style:
```css
body {
    font-family: 'Your Font', 'Segoe UI', sans-serif;
}
```

### Adding Google Fonts
Add to HTML <head>:
```html
<link href="https://fonts.googleapis.com/css2?family=Font+Name" rel="stylesheet">
```

## Common Tasks

### Update Band Member
1. Open members.html
2. Find the member's card
3. Edit name, instrument, or remove card entirely
4. Commit and push

### Add Performance to Calendar
1. Go to Google Calendar (overtonesofkc@gmail.com)
2. Create event with venue, date, time
3. Save - website automatically updates

### Add Song to Library
1. Open music.html (once created)
2. Add to songs array:
```javascript
{ title: "Song Name", artist: "Artist", year: 2020, vocal: true }
```
3. Commit and push

## Troubleshooting

### Site not updating after push
- Wait 5-10 minutes for GitHub Pages to rebuild
- Check Actions tab for build status
- Clear browser cache (Ctrl+Shift+R)

### Custom domain not working
- Verify DNS records in GoDaddy
- Check CNAME file in repository root
- Wait 24-48 hours for DNS propagation

### Images not loading
- Check file paths (case-sensitive on GitHub Pages)
- Ensure images are in /images folder
- Verify image files were committed and pushed

### Calendar not displaying
- Check calendar privacy settings (must be public)
- Verify calendar ID in embed code
- Check iframe isn't blocked by ad blockers

## Security & Privacy

### What to NEVER commit to GitHub
- Personal band member email addresses
- Any passwords
- API keys (if you add any services)
- Personal phone numbers or addresses
- Member birthdates
- Any sensitive contact information

### What's OK to publish
- Band contact email and phone
- Performance schedule
- Song list
- Public photos
- Band member names and instruments

## Questions to Ask User
When implementing new features, always clarify:
1. Should this work on mobile?
2. Is this data public or private?
3. Who needs to be able to update this?
4. What happens if someone leaves the band?
5. Do we need to track analytics?

## Resources
- GitHub Pages Docs: https://docs.github.com/pages
- HTML Validator: https://validator.w3.org/
- Mobile Testing: Chrome DevTools Device Mode
- Color Picker: https://coolors.co/
- Icons: https://lucide.dev/ or Font Awesome

## Support
For questions about the band or content:
- Contact Jim Leuschke, band leader: overtonesofkc@gmail.com
- Or Dan Vlamis, webmaster (and trombone player)

For technical questions:
- GitHub Pages support: https://support.github.com/
- Stack Overflow: https://stackoverflow.com/