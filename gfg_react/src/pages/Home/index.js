import React from "react";

function Home() {
  return <h1>This is Home page</h1>;
}

export default Home;

//a, href -
//creates navigation - click - full page reload - navie HTML tag - SPA ❌
//use: link external urls, mail to:, downloadable links

//Link to - react router component - internal navigation - full page reload ❌ - SPA  ✅
//use: faster than <a>, can send state as props

//Routes - define the mapping between a URL path and a React component.
//Tells the app which component to render when the URL matches the path
//use: render component based on current path, nested routes, indexed routes

//Nav Link - add extra info to link - style or highlight the link
// use: navigation menus sidebars or navbars, supports className, style

//useNavigate() - React Router hook Programmatic Navigation Hook - Imperative Navigation Hook
//can Navigate frwd or backwrd
// use:form submission, button click, authentication, eventHandlers, useEffect

//<Navigate /> - Declarative Redirect Component
// use: inside your component’s render/return logic, Conditional redirects on render
