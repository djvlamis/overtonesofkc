# Integration Roadmap for Overtones Website

## Current Status
✅ Static HTML pages with responsive design
✅ Google Calendar embed placeholder
✅ Navigation and basic structure

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

### 3. Audio Sample Integration 🎵
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

### 4. Live Gig Voting System 🎤
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

### 5. Photo Gallery 📸
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

### 6. Contact Form 📧
**Options**:

#### Option A: Formspree
- Add form to HTML
- Action points to Formspree endpoint
- Emails sent to overtonesofkc@gmail.com
- Free tier: 50 submissions/month
- **Effort**: 1 hour
- **Cost**: Free

#### Option B: Netlify Forms
- If you switch to Netlify hosting
- 100 submissions/month free
- **Effort**: 1 hour
- **Cost**: Free

#### Option C: Google Forms
- Embed Google Form on page
- Responses go to Google Sheets
- **Effort**: 30 minutes
- **Cost**: Free
- **Limitation**: Looks like Google Form

**Recommendation**: Option A (Formspree) - clean, simple, professional

---

### 7. Email Newsletter Signup 📬
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

### 8. Merchandise Store 🛒
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

### 9. Analytics 📊
**Google Analytics 4**
- See how many people visit
- Which pages are popular
- Where visitors come from
- Free forever
- **Effort**: 30 minutes setup
- **Privacy**: Add privacy policy page

**Action**: Add once site is live and getting traffic

---

### 10. SEO Optimization 🔍
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
2. 🔄 Music library page (basic version)
3. 📧 Contact form (Formspree)
4. 📸 Photo gallery (Google Photos embed)

### Should Have (Next)
5. 🎵 Audio samples (SoundCloud)
6. 🎤 Live voting system (Slido trial)
7. 📊 Google Analytics
8. 🔍 Basic SEO

### Nice to Have (Later)
9. 📬 Email newsletter
10. 🛒 Merchandise (if desired)
11. 🎥 YouTube video gallery
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