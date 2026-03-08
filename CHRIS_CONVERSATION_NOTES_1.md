# Notes from Chris Conversation — Overtones Website Ideas
*Captured: March 2026*

---

## Topics Discussed

### 1. Interactive Song Voting for Live Performances
- Build a voting system for live gigs (audience votes on setlist)
- Use **Firebase** as the backend for real-time data
- Consider **Strawpoll** (strawpoll.com) as a simpler no-code alternative
- Firebase requires an API key — see "API Key Documentation" section below

### 2. API Key — How to Document / Store Safely
- API keys (e.g. Firebase) must NEVER be committed to GitHub (repo is public)
- Options for safe storage:
  - Store in a `.env` file locally, add `.env` to `.gitignore`
  - For GitHub Pages (static), the Firebase config *is* public by design —
    Firebase security rules protect the data, not the key itself
  - Document the key location in a private note or password manager
  - Add a comment in `CLAUDE.md` noting which keys exist and where they live,
    without including the actual values

### 3. General Website Feedback (ongoing)
- Continue using Pastel workflow for structured feedback
- See `PASTEL_WORKFLOW.md` for the full process

### 4. Updating the Song Library — Use TSV Format
- Switch from JSON to **TSV (tab-separated values)** for the song library
- TSV is easier for Larry (or any band member) to edit in Excel or Google Sheets
- Workflow:
  1. Larry edits the spreadsheet (Excel / Google Sheets)
  2. Exports as TSV or CSV
  3. Sends to Dan, who replaces the file in the repo
- Dan to update `music.html` to parse TSV instead of JSON
  (JavaScript `fetch` + split on tabs — straightforward change)
- Use **RainbowCSV** VS Code extension to view/edit TSV files with color coding
  (install from VS Code Extensions marketplace)

### 5. Website Updates — Additional Pages Added
- Since initial build, more pages have been added to the site
- Keep `CLAUDE.md` and `Project_Knowledge__Overtones_Website.md` updated
  as new pages are created, so future Claude sessions have accurate context

### 6. Monitoring Claude Usage
- Keep conversations **short and focused** — one topic per session works best
- Avoid very long conversations; Claude's context window has limits
- If a session is getting long, start a new one and paste the relevant project files
- Too many requests in a day may hit rate limits on the plan being used

### 7. `.gitignore` — Isolating Large Files (e.g. MP4s)
- Chris noted Claude used `.gitignore` to keep MP4 video files out of the repo
- GitHub has a 100MB file size limit; MP4s can easily exceed this
- The `.gitignore` approach is correct: list `*.mp4` (or specific filenames)
  so they stay local but don't get pushed
- MP4s to be hosted on YouTube instead; embed on website via `<iframe>`

### 8. Tracking Where Leads Come From
- Goal: know whether inquiries came from the banner QR code, business cards,
  general web search, Facebook, Instagram, etc.
- **Recommended approach: Google Analytics + UTM parameters**
  - Add Google Analytics (free) to the website — one JS snippet in each HTML page
  - Create unique URLs with UTM tags for each source:
    - Banner QR code → `overtonesofkc.com?utm_source=banner`
    - Business cards → `overtonesofkc.com?utm_source=bizcard`
    - Facebook → `overtonesofkc.com?utm_source=facebook`
    - Instagram → `overtonesofkc.com?utm_source=instagram`
  - Use a **redirectable URL** (e.g. `overtonesofkc.com/qr`) for the banner
    so the printed QR code never goes stale
- **Talk to Katherine** — she may have experience with this
- **Chris is the technical contact** for analytics implementation
- **Strawpoll** was also mentioned in this context (possibly for audience polling
  at gigs as an alternative to Firebase-based voting)

### 9. Running a Local Web Server with Python
Instead of opening HTML files directly (which breaks some features like `fetch`),
run a local server:

```cmd
cd C:\Projects\Overtones\overtonesofkc
runserver.cmd
```

Then open `http://localhost:8000` in your browser.

- `runserver.cmd` lives inside the `overtonesofkc` project folder
- It runs Python's built-in HTTP server (`python -m http.server 8000`)
- This is needed for testing the song library (which uses `fetch` to load the JSON/TSV)
- If you ever need to run it manually without the script:
  ```cmd
  python -m http.server 8000
  ```

### 10. RainbowCSV — VS Code Extension for Viewing TSV/CSV
- Install **RainbowCSV** from the VS Code Extensions marketplace
- Color-codes columns in CSV and TSV files — makes them much easier to read
- Useful for reviewing the song library spreadsheet before committing changes

---

## Decisions / Next Steps

| Item | Owner | Notes |
|------|-------|-------|
| Evaluate Firebase vs Strawpoll for live voting | Dan / Chris | Start with Strawpoll free tier to test concept |
| Switch song library to TSV format | Dan | Update `music.html` fetch/parse logic |
| Add Google Analytics to all pages | Dan / Chris | One JS snippet per page |
| Set up UTM URLs for each lead source | Dan | Use redirectable `/qr` URL for banner |
| Document API key storage approach | Dan | Before adding Firebase |
| Update `.gitignore` if new MP4s added locally | Dan | Keep videos on YouTube only |
| Install RainbowCSV in VS Code | Dan | Quality-of-life for editing TSV |
| Keep Claude conversations short | Dan | One topic per session |

---

## Related Files
- `PASTEL_WORKFLOW.md` — feedback and review process
- `CLAUDE.md` — Claude Code instructions
- `INTEGRATION_NOTES.md` — full feature roadmap
- `Project_Knowledge__Overtones_Website.md` — master reference

---

*Notes captured from verbal conversation with Chris, March 2026*
