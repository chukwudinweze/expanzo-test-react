# Expanzo Test React

This two-page web application is designed to showcase my nextjs dev capabilities. Dive into the details of the project structure, components, and configuration below.

## Project Structure

### App Directory

The `app` directory comprises the root page (Dashboard) and the contact page.

### Components Folder

Inside the `components` folder, you'll find:

#### Category Menubar

The `category-menubar` component is responsible for displaying the menubar on the dashboard. It showcases three categories, and clicking on each button triggers a rerender of the category component upon state update.

### Nav

The `nav` component includes the hamburger menu bar, the light Expanzo logo, and the authentication component. The light Expanzo logo renders only when the pathname contains "contact," ensuring it displays exclusively on the contact page.

### Lib Folder

The `lib` folder contains a utility function named `cn`. This function is used to merge Tailwind classes and override classes in the event of conflicting CSS classes. It ensures that the last CSS rule overrides the older one, prioritizing specificity.

### Public Folder

The `public` folder houses the two Expanzo logos used throughout the project.

### Tailwind Config

In the tailwind config, we've added a custom color:

```javascript
colors: {
  brandColor: "#129576",
  lightGreen: "#00c29D",
},
```

## Getting Started

To run the development server, execute one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to preview the application. The page automatically updates as you modify the `app/page.tsx` file.

This project utilizes [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to optimize and load Inter, a custom Google Font.

## Feedback

Your feedback is invaluable! Feel free to reach out with any comments, questions, or suggestions via email at chukwudinwez@gmail.com. I look forward to hearing from you and discussing the next steps from here.
