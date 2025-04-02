# React Vite Test Task

## Project Description

This project is a web page layout that loads a list of users from an API. It is developed using React and Vite.

## Features

### Responsive Layout:
The main area (500-800px) is centered; if the window width is less than 500px, a horizontal scrollbar appears.
Background outside the main area is #eee, while inside it is #fff.

### Page Structure:
- Header (fixed at the top, disappears when scrolling up, 50px height, 1px border #999).
- Right Sidebar (300px width, shadow #333 with 15px radius and 50% transparency). Disappears when window width is reduced to 700px (animated in 250ms).
- Footer (fixed at the bottom of the window, 50px height, 1px border #999).
- Content Area (fills the remaining space, the entire page scrolls if content overflows).

### Dynamic Content:
Fetching user list from https://jsonplaceholder.typicode.com/users.
"Show Details" button to display user's email and phone number.

### Technologies

- **React** – A JavaScript library for building user interfaces using a component-based approach.
- **Vite** – A fast build tool and development server optimized for modern front-end frameworks like React.
- **TypeScript** – A superset of JavaScript that adds static typing for better code quality and maintainability.
- **CSS** - (Flexbox, media queries, animations) – Styling techniques for responsive layouts and smooth animations.
- **Fetch API** – A modern interface for making HTTP requests to interact with web servers asynchronously.

## Installation & Setup

Follow the steps below to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/elena-savitskaya/test.git
```

cd test

### 2. Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

### 3. Run in Development Mode

To start the development server with Hot Module Replacement (HMR), run:

```bash
npm run dev
```
