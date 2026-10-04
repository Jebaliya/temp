# Birthday Website

Next.js 14 + React + TypeScript + Tailwind. Mobile-first. Deploys on Vercel with no extra setup.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Test DOB (default): `2000-01-31`.

Check the production build before deploying:
```bash
npm run build && npm start
```

## What to edit (all in `src/data/`)
| File | What's in it |
|---|---|
| `config.ts` | Her name, gate text, welcome text, photo list + captions, **colors** |
| `private.ts` | **Date of birth**, the letter, the final message |
| `public/images/` | `photo1.jpg` to `photo4.jpg`. Replace the files, same names. |

Photo tips: portrait photos around 1200 to 1600px wide are plenty (Next.js resizes and converts to WebP/AVIF automatically). If a face is cut off, change that photo's `position` in `config.ts` (e.g. `"center 15%"` shows more of the top).

## About the privacy gate
This is a light gate, not real authentication.

- The DOB is checked on the **server** (`/api/verify`), not in the browser. It is not in the page's JavaScript or visible source.
- The letter and final message are only sent by the server after the right DOB is entered, so they are not in the downloaded JS either.
- Limits: anyone who knows her birthday can get in, and the guesses aren't rate-limited beyond a small delay. The photo files in `/images/` are also public if someone guesses the URL. Fine for keeping a surprise from random link-openers, not for secrets.
- To keep the DOB out of your code/GitHub, set `BIRTHDAY_DOB=YYYY-MM-DD` as an environment variable in Vercel. It overrides `private.ts`.

## Deploy to Vercel
1. Put the project on GitHub:
   ```bash
   git init && git add . && git commit -m "birthday site"
   git branch -M main
   git remote add origin https://github.com/<you>/birthday-website.git
   git push -u origin main
   ```
2. Go to vercel.com, sign in, click **Add New > Project**, and import the repo.
3. Framework is detected as Next.js. Leave the defaults.
4. (Optional) Under **Environment Variables** add `BIRTHDAY_DOB` = her DOB as `YYYY-MM-DD`.
5. Click **Deploy**. Share the `.vercel.app` link on WhatsApp.

Or with the CLI: `npm i -g vercel && vercel --prod`.

Changed the text or photos later? Push to GitHub and Vercel redeploys. If you change `BIRTHDAY_DOB`, redeploy once.
