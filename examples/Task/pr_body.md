## Summary
Add a `task` folder containing a copy of `Index.js` and a minimal `README.md`. The script reads a CSV of users, parses each user's birth date/time in their timezone using Luxon, prints the ISO 8601 birth datetime and calculates the current age (in years).

## What changed
- Added `task/Index.js` — CSV parsing + timezone-aware DOB parsing and age calculation.
- Added `task/README.md` — brief notes about the task and file contents.

## Motivation
Provide a small, self-contained example for parsing user DOB/time with timezone awareness as part of Node.js practice exercises.

## How to test locally
1. Ensure dependencies are installed:
   ```powershell
   npm install
   ```
2. Ensure `file.csv` (root) is present and contains rows matching the script's expected layout.
3. Run the script:
   ```powershell
   node task/Index.js
   ```
4. Verify output prints ISO dates and age lines per user.

## Notes & caveats
- The script expects a timezone field in the CSV (currently referenced as `parts[9]`); confirm your CSV column order and adjust indexes if needed.
- Luxon accepts IANA names (e.g., `Europe/London`) and fixed-offset strings; `UTC+5` may need to be normalized to `UTC+05:00` or replaced with an IANA zone for consistent behavior.
- No additional validation or error handling was added; consider adding:
  - field presence checks,
  - invalid timezone handling,
  - rounding/truncating age to integer years if desired,
  - unit tests for parsing behavior.
