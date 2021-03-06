<h1 align="center" style="font-size: 2.7rem;">Teatro
</h1>

<h2 align="center" style="font-size: 1.5rem;">A seamless, fun, community driven application to catch the latest productions and read the hottest reviews.<br><br>
  <img src="./client/src/assets/site-overview.gif" width="800" alt="site overview gif">
  <br></h2>

## Table of Contents

- [Overview](#Overview)
- [Installation](#Installation)
- [Technologies Used](#Technologies-Used)
- [Planning](#Planning)
- [Features](#Features)
- [Workflow](#Workflow)
- [Challenges and Learning](#Challenges-and-Learning)
- [Contributors](#Contributors)

## Overview

- User sessions managed via **Google Firebase Authentication**, and session data centralized via **React Context** providing application integrity and customized user experience
- Established client side routing utilizing **React Router** library coupled with Node Express server for **Server Side routing**
- Light and Dark mode implemented with **SASS** and CSS global variables and complied with Webpack
- Optimized **PostgreSQL** database queries with **smart indexing** and **aggregate functions**
- **Model, View, Controller (MVC)** architecture establishing separation of concerns and modularity, decreasing bugs, and increasing workflow
- Implemented **agile methodologies** with daily stand ups, code reviews, and GitHub workflow tools

## Installation

```
npm install

npm build

npm start

```

![readme dependency logos](client/src/assets/readme-logo.png 'readme dependency logos')

## Technologies Used

- [React](https://reactjs.org/)
- [SASS](https://sass-lang.com/)
- [Material-UI](https://material-ui.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Firebase](https://firebase.google.com/)
- [AWS](https://aws.amazon.com/)

## Planning

### Scope of Work

- Initial team planning consisted of establishing minimum viable product requirements, critical core features, and separation of responsibilities.

![business requirement document](client/src/assets/business-requirement-document.png 'business requirement document')

### Wire Diagram

- Utilized **Figma** to create a wire diagram for user design and user experience considerations. Wire framing was integral for early stage planning and provided a visual representation of how user stories were created.

![Wire Diagram](client/src/assets/wirediagram.png 'Wire Diagram')

## Features

### Navigation Bar

- Utilizing React Router with Material-UI, the header was composed of a dynamic search bar to help users find any show or username in our database asynchronously
- The user signup/login drop-down was conditionally rendered based on the state of an user being logged in or not. This helped in providing/limiting the use of certain global functionality and access to other pages, for example, the use of the show creation page. 

![Navigation Bar](client/src/assets/searchbar.png 'Navigation bar feature')

---

### Authentication

- Firebase Authentication uses the industry standard **OAuth 2**. OAuth 2 is a protocol that lets applications know who has access to a website by providing authorization tokens which act as the messenger to verify who you are to provide security and a customized user experience.

- Critical information such as email and password were captured by Firebase, and allowed our application to provides a persistent user session even after browser or application restarts.

- Utilized React Context to provide the entire application access to specific user session data in order to enable or disable certain features, providing a **customized user experience**.

- Features in the application requiring authentication such as add a review, up and down vote, and posting a show, prevents unauthorized users from accessing premium features, without disabling the core functionality of reading reviews and finding show information.

![Authentication](client/src/assets/authentication.png 'Authentication feature')

---

### Server Vs Client Routing

- Leveraged React Router library to setup dynamic client side routing in order to build a Single Page Application with sleek UI and fast page load speeds.

- Built a dynamic Node Express server utilizing RESTful API endpoints for server side routing, providing a complete user experience with back and forward functionalities on the browser. 

---

### Light and Dark Mode

- Configured Webpack in order to utilize Sass and CSS global variables that could be manipulated alongside the CSS DOM in order to product light and dark mode functionality.

- The proper use of global variables proved to be a challenge at the start of the project as there were issues in compatability of Sass and Material-UI along with finding a work around with using a root CSS file. 

---

### Carousel

- The carousel feature provides the user a way to access all the latest productions, sorted by popularity and those that are most recent. Productions are updated in real time as more shows are added to the database. 

![Home Page Carousel](client/src/assets/carousel.gif 'Home Page Carousel')

### Production Page

- The production page provides detailed info on the clicked show. Accompanied with the details are user reviews that are sorted by popularity, which is determined by up votes and down votes. 

- On the selected show a user can add a review, which provides verified users a change to create their own review and rate the show by a rating system of 5 stars. These data points are collected utilizing a PostgreSQL database management system and retrieved through a Node Express server that provides instant re-render of the added review onto the page.

![Production Page](client/src/assets/showinfo.png 'Production Page')

---

### User Page

- The user page can be accessed through the search bar if a user wants to search for a specific user's reviews or through clicking on a user photo of a currently viewed review. The user page lists all of the most popular reviews a user has written along with the comments created by other users reading their reviews.

![User Page](client/src/assets/userpage.png 'User Page')

---

## Workflow

Our team utilized agile methodologies and best practices

### Trello

- A Trello board was utilized to create and track tickets for feature implementation. Daily scrum meetings were held and conducted by the Product Manager to discuss progress, challenges, accomplishment, and goals. Each team member ensured a ticket corresponded to the the current sprint and coordinated with each other to prevent conflicts and streamline workflow.

![Trello Work Flow](client/src/assets/trello.png 'Trello Work Flow')

### Version Control

- Our team utilized GitHub's tools to conduct version control and ensure code uniformity, and reduce bugs. Each feature was linked to a separate branch and pull request. Each team member conducted code reviews prior to approving changes and merging code. A development branch was established to test for functionality as a final check, before ultimately merging to the main branch for production.

![Git Work Flow](client/src/assets/gitworkflow.png 'Git Work Flow')

## Challenges and Learning

- Utilizing SASS proved to be a challenge when implementing Light and Dark mode due to it being complied as CSS. In order to circumvent this, and properly configure a work around for accessing the CSS DOM to establish global variables, we utilized a CSS root file as a work around.
- Firebase authentication led to managed sessions by Google's own servers, leading to a disconnect with our services own PostgreSQL database. In order to make sure our service's database was tracking user data specific to users with current accounts was important and not caught initially due to lack of knowledge on Firebase Auth.
- **Technical debt** was accrued from not utilizing reusable components, leading to duplicate code and requiring refactor and consolidation later down the road. Prior planning could have avoided this issue.
- Database **environment setup issues** were compounded due to team's different development configurations. In order to streamline database seeding, the team created a single source of truth to seed our database and ensure all endpoints were tested and working prior to moving to building the front end application. This problem could have been avoided by deploying a Dockerized database to handle uniformity.
- Lacking code uniformity initially due to different or missing linting configurations with Eslint, Prettier, and Airbnb JavaScript Style Guide not properly implemented. After catching this mistake, we were able to clean up the code and enforce the style guide.

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/WarrenWongCodes"><img src="https://avatars.githubusercontent.com/u/8570718?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Warren Wong</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/timapar"><img src="https://avatars.githubusercontent.com/u/80130247?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Timothy Parrish</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/diegochamilton"><img src="https://avatars.githubusercontent.com/u/80371371?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Diego Coronel</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/lerisse"><img src="https://avatars.githubusercontent.com/u/10137509?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Tristan Lerisse</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/AndrewHuang123"><img src="https://avatars.githubusercontent.com/u/72996015?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Huang</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/ivapier"><img src="https://avatars.githubusercontent.com/u/71906102?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Iva Pierotic</b></sub></a><br /></td>
  </tr>
</table>
