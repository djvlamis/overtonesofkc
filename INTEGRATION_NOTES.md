# Integration Roadmap for Overtones Website

## Current Status
✅ Static HTML pages with responsive design
✅ Google Calendar embed (live, using overtonesofkc@gmail.com)
✅ Navigation (nav.js) and footer (footer.js) — shared across all pages
✅ Music library page (music.html) — 182 songs, search/filter/sort
✅ Videos page (videos.html) — auto-loads from YouTube playlist via API
✅ Contact page (contact.html) — booking inquiry form via Formspree

## Phase 1: Core Integrations (Next 2-4 weeks)

### 1. Google Calendar ✅ (Ready to activate)
**Status**: Embed code already in index.html
**Action needed**: 
1. Set calendar overtonesofkc@gmail.com to public
2. Verify embed works
3. Test on mobile

**Benefits**:
- Automatic updates when gigs are added
- No manual HTML editing needed
- Mobile-friendly display

---

### 2. Music Library with Voting 🔄 (In progress)
**Technology options**:

#### Option A: Client-side only (Simplest)
- JavaScript with localStorage
- ⚠️ Warning: localStorage not available in Claude artifacts
- Votes reset if browser cache cleared
- **Effort**: 2-3 hours
- **Cost**: $0

#### Option B: Firebase Realtime Database
- Persistent votes across all users
- Real-time updates
- Free tier: 1GB storage, 10GB/month bandwidth
- **Effort**: 4-6 hours (learning + setup)
- **Cost**: Free for band website traffic

#### Option C: Supabase
- Similar to Firebase
- PostgreSQL backend
- Free tier: 500MB database, 2GB bandwidth/month
- **Effort**: 4-6 hours
- **Cost**: Free

**Recommendation**: Start with Option A, upgrade to Option B if voting becomes popular

---

### 3. YouTube Video Gallery ✅ COMPLETE
**Status**: Live at videos.html
**How it works**: Fetches videos automatically from YouTube playlist via YouTube Data API v3
**To add a video**: Add it to the "OvertonesofKC website playlist" on YouTube — no code changes needed
**API details**: See CLAUDE.md → API Keys & External Services

---

### 4. Audio Sample Integration 🎵
**Platforms to integrate**:

#### SoundCloud
- Embed player for each song
- Example: \`<iframe src="soundcloud.com/player/?url=..."></iframe>\`
- **Requirements**: 
  - Upload song samples to SoundCloud account
  - Get embed code for each track
  - Add to music library page
- **Effort**: 1 hour setup + time per song
- **Cost**: Free tier (3 hours of uploads)

#### YouTube
- Performance videos
- Rehearsal clips
- Behind-the-scenes content
- **Effort**: 2-3 hours for gallery page
- **Cost**: Free

**Action items**:
1. Decide which songs to feature (10-20 samples)
2. Create SoundCloud account: overtonesofkc
3. Upload 30-second clips
4. Add embed codes to music.html

---

### 5. Live Gig Voting System 🎤
**Recommended tool**: Slido or Mentimeter

#### Slido Setup
1. Create account at slido.com
2. Before each gig:
   - Create new poll with that night's setlist (~30 songs)
   - Enable multiple choice voting
   - Generate QR code
   - Print 8.5x11" sign: "Vote for the songs you want to hear!"
3. During gig:
   - Display QR code near band
   - Band director monitors results on tablet
   - Skip less popular songs if needed
4. After gig:
   - Review analytics
   - Archive results

**Cost**: 
- Free tier: 3 polls, 100 participants (probably enough)
- Paid: $15/month if you need more

**Alternative - Custom Build**:
- Build voting page that loads from URL parameter
- Example: overtonesofkc.com/vote?gig=2026-02-15
- Use Firebase for real-time votes
- **Effort**: 10-15 hours
- **Cost**: Free (Firebase tier)
- **Benefit**: No monthly fee, full control

**Recommendation**: Start with Slido free tier to test concept

---

## Phase 2: Enhanced Features (1-3 months out)

### 6. Photo Gallery 📸
**Options**:

#### Option A: Simple HTML Grid
- Create /images folder in repo
- photos.html with responsive grid
- Lightbox with JavaScript
- **Effort**: 3-4 hours
- **Cost**: Free
- **Limitation**: GitHub repo size (1GB total)

#### Option B: Google Photos Embed
- Host photos in Google Photos album
- Embed album on website
- **Effort**: 1 hour
- **Cost**: Free (Google Photos storage)
- **Benefit**: Unlimited photos, anyone can add

#### Option C: Cloudinary
- Image hosting and optimization
- Automatic responsive images
- Free tier: 25GB storage, 25GB bandwidth/month
- **Effort**: 4-5 hours setup
- **Cost**: Free

**Recommendation**: Option B (Google Photos) for easiest updates

---

### 7. Contact Form ✅ COMPLETE
**Status**: Live at contact.html

#### Implementation: Formspree
- **Endpoint**: https://formspree.io/f/mgolgrvk
- **Formspree account**: dvlamis@gmail.com
- **Notifications sent to**: overtonesofkc@gmail.com
- **Reply-To**: set to submitter's email address (name="email" field)
  so Larry can reply directly to inquiries from his inbox
- **Free tier**: 50 submissions/month (plenty for band website)
- **Spam protection**: Formshield enabled (default)
- **CAPTCHA**: off (Turnstile available if spam becomes an issue)
- **Form fields**: Name, Email, Phone, Event Date, Event Type, Message
- **Submission handling**: fetch() API, no page redirect
- **Success screen**: shown after successful submission
- **Error handling**: fallback alert with direct email address

#### What was tried first (and why abandoned)
1. **Google Forms hidden iframe POST**: Built a custom-styled form that
   POSTed silently to Google Forms via a hidden iframe. Google blocks
   cross-origin POSTs so submissions never arrived. Abandoned.

2. **Google Forms direct embed**: Would have worked but loses all
   custom styling. Not pursued.

#### Gmail auto-reply attempt (abandoned)
Goal: Have Gmail auto-reply to form submitters confirming receipt.

What was tried:
- Enabled Gmail Templates (Settings → Advanced)
- Created template "Overtones Auto Reply" (still exists in Gmail,
  can be reused later)
- Created Gmail filter: subject contains "New submission from
  Overtones Interest" → Send template "Overtones Auto Reply"
- Filter screenshot saved (March 2026)

Why it failed:
- Gmail's auto-reply honors the **From** address, not the **Reply-To**
- Formspree sends notifications From: noreply@formspree.io
- Gmail auto-reply fired but went to Formspree's bounce address,
  not to the person who submitted the form
- Filter has been deleted from Gmail to prevent misfires
- Template "Overtones Auto Reply" left in Gmail for potential future use

Future options if auto-reply is needed:
- **Formspree paid plan** (~$10/month): includes built-in auto-responder
  that sends directly to submitter, bypassing the Reply-To issue entirely
- **Web3Forms** (free): includes auto-reply, works with static sites
- **EmailJS** (free tier): sends email directly from JavaScript

---

### 8. Email Newsletter Signup 📬
**Integration**: Mailchimp or Buttondown

#### Mailchimp
- Free tier: 500 subscribers, 1,000 emails/month
- Embed signup form on website
- **Effort**: 2 hours
- **Cost**: Free initially

#### Buttondown
- Markdown-based newsletters
- Free tier: 100 subscribers
- Clean, simple interface
- **Effort**: 2 hours
- **Cost**: Free

**Action**:
1. Choose platform
2. Create account
3. Design signup form
4. Add to footer of every page
5. Send quarterly updates about gigs, new songs, etc.

---

## Phase 3: Advanced Features (3-6 months)

### 9. Merchandise Store 🛒
**Only if band decides to sell t-shirts, CDs, etc.**

#### Printful + Shopify Lite
- Print-on-demand (no inventory)
- Shopify handles payments
- **Cost**: $5/month + per-item cost

#### Square Online
- Free store
- Payment processing: 2.9% + 30¢
- Good for CDs, downloads
- **Cost**: Free + processing fees

**Decision**: Wait until band confirms interest

---

### 10. Analytics 📊
**Google Analytics 4**
- See how many people visit
- Which pages are popular
- Where visitors come from
- Free forever
- **Effort**: 30 minutes setup
- **Privacy**: Add privacy policy page

**Action**: Add once site is live and getting traffic

---

### 11. SEO Optimization 🔍
**Make site findable on Google**

Actions needed:
1. Add meta descriptions to all pages
2. Create sitemap.xml
3. Submit to Google Search Console
4. Add structured data (JSON-LD) for local business
5. Optimize images (alt tags, file size)
6. Add Open Graph tags for Facebook sharing

**Effort**: 3-4 hours
**Cost**: Free
**Benefit**: Show up when people search "big band Kansas City"

---

## Priority Ranking

### Must Have (Do first)
1. ✅ Google Calendar embed
2. ✅ Music library page
3. ✅ YouTube video gallery
4. 📧 Contact form (Formspree)
5. 📸 Photo gallery

### Should Have (Next)
6. 🎵 Audio samples (SoundCloud)
7. 🎤 Live voting system (Slido trial)
8. 📊 Google Analytics
9. 🔍 Basic SEO

### Nice to Have (Later)
10. 📬 Email newsletter
11. 🛒 Merchandise (if desired)
12. 🏆 Testimonials section

---

## Integration Effort Summary

| Feature | Effort | Cost/Year | Priority |
|---------|--------|-----------|----------|
| Google Calendar | ✅ Done | $0 | HIGH |
| Music Library (basic) | 2-3 hrs | $0 | HIGH |
| Contact Form | 1 hr | $0 | HIGH |
| Photo Gallery | 1 hr | $0 | HIGH |
| Audio Samples | 3-4 hrs | $0 | MEDIUM |
| Live Voting | 2 hrs | $0-180 | MEDIUM |
| Analytics | 30 min | $0 | MEDIUM |
| SEO | 3-4 hrs | $0 | MEDIUM |
| Newsletter | 2 hrs | $0-60 | LOW |
| Merch Store | 8-10 hrs | $60+ | LOW |

**Total estimated cost**: $0-240/year depending on features chosen

---

## Testing Plan

For each integration:
1. Test on desktop Chrome
2. Test on mobile Safari
3. Test on mobile Chrome
4. Test with slow internet (3G simulation)
5. Test with ad blocker enabled
6. Test accessibility (screen reader)
7. Check console for errors
8. Verify analytics tracking

---

## Rollback Plan

If any integration breaks:
1. Git revert to previous commit
2. Push to GitHub
3. Site automatically reverts in 5-10 minutes
4. Debug locally before re-deploying

---

## Questions for Band Director

Before implementing paid features:
1. Budget for annual website costs?
2. Who will manage email newsletter (if we add one)?
3. Interest in selling merchandise?
4. Preferred method for audience engagement?
5. Priority: more gigs or more community presence?

---

## Next Steps

1. Review this document with band director
2. Prioritize which integrations to implement first
3. Create accounts for chosen services
4. Build music.html page
5. Test thoroughly
6. Deploy to GitHub Pages
7. Monitor usage and iterate