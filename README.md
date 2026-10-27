# E-Commerce Inventory and Stock Management Dashboard

## Project Overview

This project is an E-Commerce Inventory and Stock Management Dashboard developed using React.js. It allows users to manage products, view inventory details, update stock quantities, and monitor low-stock products. The dashboard also provides Light Mode and Dark Mode for a better user experience.

## Technologies Used

- React.js
- JavaScript
- HTML and CSS
- React Hooks
- Browser Local Storage
- Vite

## Main Features

- Add new products with name, category, price, and stock quantity.
- Display products using reusable React components.
- Delete products and increase stock quantities.
- Show total products, total stock, and low-stock products.
- Switch between Light Mode and Dark Mode using React Context.
- Record dashboard activities using a class component.
- Store audit logs in browser Local Storage.
- Use React Hooks such as useState, useEffect, useContext, useRef, useMemo, and useCallback.

## Client-Side Rendering (CSR)

Client-Side Rendering means that the browser uses JavaScript to render the user interface. React commonly uses CSR to update the page when users interact with an application. For example, when a user adds a product to this inventory dashboard, React updates the product list and summary values without reloading the complete page. CSR can provide a fast and interactive user experience after the application has loaded. However, the initial loading time can be longer for some applications because the browser needs to download and execute JavaScript.

## Server-Side Rendering (SSR)

Server-Side Rendering means that the server generates the HTML for a page and sends it to the browser. The browser can display the generated HTML before client-side JavaScript completes its work. SSR can improve initial page display and help search engines understand page content. However, it requires additional server-side setup and resources. Frameworks such as Next.js support SSR with React.

## Conclusion

CSR is suitable for interactive dashboards such as this inventory management project. SSR is useful when initial page rendering and search engine visibility are important. Both approaches have advantages, and the choice depends on the application's requirements.