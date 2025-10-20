QR Menu Application
🚀 Overview

live : https://menuuqrr.netlify.app/index.html

This project is a web-based menu application designed for cafés, restaurants or similar food & beverage venues. Visitors can browse menu items under categories (Breakfast, Lunch, Drinks etc.), view details for each item, and access the menu quickly via a QR link.

🖥 Features

Displays a menu with multiple categories (e.g., “Breakfast”, “Lunch”, “Drinks”).

Each menu item includes a title, image, description, and price.

Detail-view functionality: clicking/tapping a menu item shows full details.

Responsive design: works across devices (desktop, tablet, mobile).

Exported modules for clean code structure (e.g., elements, rendering functions).

Uses modern JavaScript features including async/await, modules, fetch(), etc.

🧩 Project Structure

Here’s a typical file/ folder layout:

/ (root)
│– index.html
│– detail.html
│– js/
│   ├– data.js         # menu items data (array of objects)
│   ├– ui.js           # UI utilities (elements, render functions)
│   └– main.js         # entry point (loads data, handles events)
│– css/
│   └– styles.css      # styling
└– assets/
    ├– images/         # menu item images
    └– icons/          # icons if needed

🧑‍💻 Getting Started
Prerequisites

A modern web browser (Chrome, Firefox, Edge, Safari)

Basic knowledge of HTML, CSS and JavaScript

Running Locally

Clone or download the repository to your machine.

Ensure the file structure is maintained (images under assets/images, etc.).

Serve the files — for example:

npx http-server .


or open index.html directly in your browser.

The menu should load and you can click items to view detail pages.

🛠️ How It Works

On page load (DOMContentLoaded), main.js fetches the menu data from data.js.

It finds an item by id when navigating to the detail page and calls a function like renderDetailPage(product, targetElement) which takes two parameters:

product → the menu item object

targetElement → the HTML element into which the detail view will be rendered

The UI module keeps references to key DOM elements via the elements object:

const elements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll('input'),
  detailPage: document.querySelector("#detail-page")
};
export { elements, renderCard, renderDetailPage };

🎨 Customization

You can easily modify the following:

Add or remove menu categories in data.js.

Edit menu items (title, description, image path, price).

Change styling via styles.css — colors, fonts, layout.

Extend functionality: add search, filter, order/cart features.

✅ Considerations for Deployment

Optimize images for fast loading (e.g., WebP format, compress size).

Minify JS and CSS for production.

Ensure QR code (if you generate one) points to the correct deployment URL.

Consider accessibility (ALT tags on images, proper semantic HTML).

📄 License

This project is open-source and available for use and modification. Please include attribution if you reuse large portions of code.
