# 🌐 English জানালা — English Learning Platform

A vocabulary-focused English learning web app built to practice core frontend skills — 
especially API fetching, dynamic DOM rendering, and responsive UI design.

🔗 **Live Site:** [View Project](https://ahmedragibhasan.github.io/English-Learning-Platform/)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| Tailwind CSS | Utility-first responsive styling |
| DaisyUI | Pre-built Tailwind component library |
| Font Awesome | Icons throughout the UI |
| Google Fonts | Custom typography |
| Vanilla JavaScript | Logic, API calls, DOM manipulation |

---

## 🔑 Key Features

- Lesson-based vocabulary browser (Lesson 1–7)
- Search vocabulary functionality
- Dynamic content loaded from external API
- Responsive layout for all screen sizes
- Hero section with name input and get started flow

---

## 🧠 What I Learned

### Fetch API & Displaying Data
- How to call an external API using `fetch()`
- Handling the `Promise` returned by fetch using `.then()` and `async/await`
- Parsing JSON response with `.json()`
- Two-function pattern for clean data flow:
  - `loadData()` — fetches data from the API
  - `displayData()` — renders the data into the HTML

```js
// Pattern used in this project
const loadData = async () => {
  const res = await fetch('API_URL');
  const data = await res.json();
  displayData(data);
}

const displayData = (data) => {
  // loop and inject into DOM
}
```

### Conditional Rendering
- Showing/hiding elements based on data or user interaction
- Rendering different UI states (e.g. empty search, results found)

### DOM Manipulation
- Using `innerHTML` to inject dynamic cards
- Using `addEventListener` with callback functions to respond to user actions
- Selecting elements with `querySelector` and `getElementById`

### Tailwind CSS Practical Usage
- Responsive classes (`md:flex-row`, `md:text-left`)
- Arbitrary values for pixel-perfect sizing (`w-[340px]`, `h-[40px]`)
- Flexbox layout with `flex`, `flex-col`, `gap`, `justify-between`, `items-center`
- `whitespace-nowrap` to prevent text wrapping in buttons

### Component Thinking
- Separating concerns: structure (HTML), style (Tailwind), logic (JS)
- Keeping JS functions small and single-purpose

---

## 📁 Project Structure



