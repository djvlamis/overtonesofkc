# The Overtones of Kansas City Website

## Overview
This is the official website for The Overtones of Kansas City, a 16-piece big band that has been performing swing and dance music since 1997.

## Site Structure

### Current Pages
- **index.html** - Homepage with hero, about section, calendar, and features
- **members.html** - Band member roster organized by section
- **music.html** - (To be created) Song library with 180+ songs
- **styles.css** - Shared stylesheet for all pages

### Planned Features

#### 1. Music Library Page with Voting
- Display all 180+ songs from the repertoire
- Allow visitors to upvote songs they'd like to hear
- Search and filter functionality
- Integration with audio samples

#### 2. Live Setlist Voting (for gigs)
- QR code links to setlist for that night's performance
- Audience can vote on songs in real-time
- Band director sees live results
- Recommended tool: Slido or Mentimeter

#### 3. Google Calendar Integration
- **Public Calendar ID**: e8d9368c7d992192126a90022caf6944a62eb6b745c4e0e2ac2ba0b880fb6e2e@group.calendar.google.com
- Embedded in index.html #calendar section
- Shows public gigs only — rehearsals are on a separate internal calendar
- Band members update the Public Calendar for gigs; website updates automatically

##### Calendar Strategy: Two Calendars
The band uses two separate calendars in the overtonesofkc@gmail.com Google account:

1. **Public Calendar** — gigs and public events only. Fully public. Embedded on the website. Anyone in the world can see it.
2. **Rehearsals Calendar** (internal) — rehearsals and internal events. Shared privately with band members only. Never shown on the website.

##### Sharing the Rehearsals Calendar with Band Members
To give a band member access to the rehearsals calendar:
1. Go to [calendar.google.com](https://calendar.google.com) signed in as overtonesofkc@gmail.com
2. Click the three dots next to the Rehearsals calendar → **Settings and sharing**
3. Under **Share with specific people**, click **+ Add people**
4. Enter their email address and set permission to **"See all event details"**
5. Click Send — they will receive an email invitation

##### How Band Members Can View the Rehearsals Calendar
Band members do NOT need a Gmail address, but they do need some way to access it.
Ask the band which option they prefer:

**Option A — Google Account (recommended for best experience)**
- Works with any email address (Gmail, AOL, Yahoo, Outlook, etc.)
- Create a free Google account at [accounts.google.com/signup](https://accounts.google.com/signup)
- Choose "Use my current email address instead" to avoid needing a new Gmail address
- After accepting the share invitation, the rehearsal calendar appears in their Google Calendar app
- Best option: events sync automatically, works on phone and desktop

**Option B — Read-Only Browser Link (no account needed)**
- Get the shareable link from: Calendar Settings → "Integrate calendar" → **Public URL to this calendar**
- Anyone with the link can view the calendar in a browser without logging in
- They cannot add it to their own calendar app — view only in the browser
- Good for members who just want to check dates occasionally

**Option C — iCal Subscription Link (no Google account needed)**
- Get the iCal link from: Calendar Settings → "Integrate calendar" → **Secret address in iCal format**
- Works with Apple Calendar, Outlook, and most calendar apps on any device
- Members subscribe once and events sync automatically — no Google account required
- Good for members who use iPhone/Apple Calendar or Outlook
- Note: uses a "secret" URL — if you ever need to revoke access, you must reset the secret link

#### 4. Audio Integration
- **SoundCloud** embeds for song samples
- **YouTube** embeds for performance videos
- Add to music library page

#### 5. Photo Gallery
- Performance photos from Facebook
- Event galleries
- Band photos

### Future Enhancements
- Contact form (using Formspree or similar)
- Alumni section on members page
- Testimonials section
- Merch page (if needed)

## Technical Details

### GitHub Pages Setup
1. Create repository named \`overtonesofkc.github.io\` or use custom domain
2. Upload all files to main/master branch
3. Enable GitHub Pages in Settings → Pages
4. Set custom domain: overtonesofkc.com

### Custom Domain Configuration (GoDaddy)
Add these DNS records in GoDaddy:
- 1 CNAME record: www → yourusername.github.io

### File Management
- **To edit members**: Open members.html, find the relevant section, add/remove/edit member cards
- **To add alumni**: Uncomment the alumni section in members.html
- **To update calendar**: Update the Google Calendar
- **To change colors**: Edit the CSS color variables in styles.css

## Hosting Costs
- **GitHub Pages**: FREE
- **Domain (overtonesofkc.com)**: ~$15/year
- **Total**: $15/year

## Maintenance
- Calendar updates: As needed via Google Calendar
- Member roster: When band members change
- Photos: Quarterly or after major events
- Song library: Annually or when repertoire changes significantly

## Contact


## Last Updated
February 2026