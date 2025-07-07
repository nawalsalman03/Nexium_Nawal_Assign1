# Quote Generator – Nexium Assignment 1

This is a basic quote generator built using **Next.js**, **TypeScript**, and **ShadCN UI**. The app allows users to select a topic and view quotes related to it. A background video was added to improve the UI.

---

## Features

- Quotes by topic (like motivation, success, life)
- Background video for visual appeal
- Clean UI with ShadCN components
- Responsive and user-friendly

---

## 🌐 Live Demo
```bash
Check out the deployed project here:
https://nexium-nawal-assign1.vercel.app/

## How to Run

1. Clone the repo:

```bash
git clone https://github.com/nawalsalman03/Nexium_Nawal_Assign1.git
```

2. Go to the project directory:

```bash
cd Nexium_Nawal_Assign1
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Project Structure

```
public/               → static files like background video
src/
├── app/              → Main Next.js app (page.tsx)
├── components/       → QuoteForm, QuoteList, QuoteSkeleton
├── lib/              → Quote topics and mock data
styles/               → Global styles and variables
```

---

## Notes

- Quotes are fetched locally from a predefined set.
- Background video (`public/spacebg.mp4`) loops and auto-plays.
- Designed as part of the Nexium internship assignment.
- UI is styled using **ShadCN** with custom CSS variables.

---

## Author

Made by **Nawal Salman**  
GitHub: [@nawalsalman03](https://github.com/nawalsalman03)
