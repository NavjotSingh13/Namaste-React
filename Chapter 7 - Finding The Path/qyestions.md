Q1. What happens if there is no dependency array in useEffect?
Ans. If there is no dependency array then the useEffect will be called on every render

Q2. What happens if the dependency array is empty in useEffect?
Ans. If there is an empty dependency array, the usEffect will be called on initial render and just once.

Q3. Q2. What happens if the dependency array is present in useEffect?
Ans. If there is a dependencyarray, the useEffect will be called everytime the dependency updates.

Q4. What is the best place to add useState?
Ans. It should be added on the top or starting of functional component.

Q5. What is react router dom library?
Ans. React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.

Q6. What is createBrowserRouter?

Q7. What is RouterProvider?

Q8. How all he hooks name starts with?
Ans. All the hooks name starts with "use".

Q9. What is useRouteError hook in react-router-dom library?
Ans. This hook is used to display more details about an error.

Q10. What is outlet in react-router-dom?
Ans. An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

Q11. What is children routes?
Ans. A child route is like any other route, in that it needs both a path and a component . The one difference is that you place child routes in a children array within the parent route.

Q12. Why we should not use <a> tag for routing in react?
Ans. Because it will reload the entire page

Q13. What is link in react-router-dom?
Ans. A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom , a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to. This means that things like right-clicking a <Link> work as you'd expect.

Q14. What is SPA?
Ans. A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.

Q15. What is Client Side and Server Side Routing?
Ams. SSR - the app is making some network calls and reloading the page
     CSR - the app is neither making any network calls nor reloading the page 

Q16. What is Dynamic routing?
Ans. When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router.

Q17. What is useParams hook?
Ans. useParams is a Client Component hook that lets you read a route's dynamic params filled in by the current URL.