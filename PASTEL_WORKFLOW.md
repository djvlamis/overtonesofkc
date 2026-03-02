# Pastel Review Workflow for Claude

## Overview
This document describes how to use Pastel (usepastel.com) feedback comments
as the basis for website changes made by Claude in future conversations.

## Pastel Link
https://usepastel.com/link/37j765r3/#/overtonesofkc/

## Workflow Steps

### 1. Reviewer leaves comments in Pastel
- Band members, Jim, or other reviewers add comments to the Pastel canvas
- Comments are tied to specific locations on the page
- Reviewers can be: Fitz (Larry Fitzpatrick), Dan (Dan Vlamis), Jim (Jim Leuschke),
  Sally, Marla, or others

### 2. Owner marks comments "In Progress"
- Before starting a Claude session, review the open comments in Pastel
- Change the status of comments you want acted on to **"In Progress"**
- Leave comments as "Open" if you are not ready to act on them yet
- This is the signal to Claude: "In Progress" = implement this change

### 3. Start a Claude session
Paste this prompt to begin:

> "Please read the Pastel comments at https://usepastel.com/link/37j765r3/#/overtonesofkc/
> and implement all comments marked 'In Progress'. The website files are at
> C:\Projects\Overtones\overtonesofkc. Check PASTEL_WORKFLOW.md for instructions."

### 4. Claude reads and implements
Claude will:
- Fetch the Pastel URL and read all comments
- Filter for comments marked "In Progress"
- Note the comment number, commenter name, and page (index, musicians, music)
- Make the corresponding changes to the local files
- Ask for clarification if a comment is ambiguous before making changes
- Report back with a summary of every change made, referencing comment numbers

### 5. Review changes
- Review the changes Claude made in your browser (use Live Server in VS Code,
  or push to GitHub Pages to preview)
- If something needs adjustment, tell Claude in the same conversation

### 6. Commit to GitHub
- Claude will provide a commit message and description referencing Pastel comment numbers
- Commit and push using GitHub Desktop

### 7. Mark comments resolved in Pastel
- Go back to Pastel and mark the implemented comments as **"Resolved"**
- If a new version of the site has been deployed, consider clicking
  **"New Version"** in Pastel to start a fresh review canvas
  (Note: free Pastel plan has a 3-day commenting window per canvas)

---

## Claude Drafting Pastel Responses
Pastel has no API, so Claude cannot post comments directly.
However, Claude can draft responses for you to paste manually:

- After implementing changes, ask Claude:
  > "Draft a brief Pastel response for each comment you acted on,
  > identified as 'Claude AI', that I can paste in manually."
- Review each draft, then copy/paste the ones you approve into Pastel
- You can post them under your own name or type "Claude AI" as the commenter name

---

## Comment Numbering
Pastel comments are numbered sequentially. Always reference comment numbers
in Git commit messages so the code history links back to the feedback.
Example commit message:
> "Fix roster per Pastel #16, #17, #18 (Fitz Feb 28)"

---

## Cache Busting for nav.js and footer.js
When changes are made to nav.js or footer.js, the version query string
must be incremented in all three HTML files to prevent browsers serving
stale cached versions.

Current version: ?v=2

Files to update (search for "nav.js?v=" and "footer.js?v="):
- index.html
- musicians.html
- music.html

Example: change ?v=2 to ?v=3 in all three files when nav.js or footer.js changes.

---

## Pastel Plan Notes (Free Tier)
- Single canvas, 3-day commenting window per canvas
- After 3 days, existing comments are readable but no new ones can be added
- "New Version" creates a new canvas (resets the 3-day window)
- Best practice: coordinate review sessions so feedback is collected
  within the 3-day window before it locks

---

## File Locations
- Website files: `C:\Projects\Overtones\overtonesofkc\`
- Project knowledge: `Project_Knowledge__Overtones_Website.md`
- Claude instructions: `CLAUDE.md`
- Integration notes: `INTEGRATION_NOTES.md`
- This file: `PASTEL_WORKFLOW.md`

---

## Key People / Pastel Commenters
- **Fitz** = Larry Fitzpatrick (Trumpet)
- **Dan** = Dan Vlamis (Trombone, Webmaster)
- **Jim** = Jim Leuschke (Band Director)
- **Marla** = Marla Jannings
- **Sally** = Sally (identity TBD)

---

*Created: March 2026*
*For: The Overtones of Kansas City website project*
