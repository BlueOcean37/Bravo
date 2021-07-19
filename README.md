<h1 align="center" style="font-size: 2.7rem;">Teatro
</h1>

<h2 align="center" style="font-size: 1.5rem;">A seamless, fun, community driven application to catch the latest productions and read the hottest reviews.<br><br>
  <img src="./client/assets/site-overview.gif" width="800" alt="site overview gif">
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

- User sessions managed via Google Firebase Authentication, and session data centralized via React Context providing application integrity and customized user experience
- Established client side routing utilizing React Router library coupled with Node Express server for Server Side routing
- Light and Dark mode implemented with SASS and CSS global variables and complied with Webpack
- Optimized PostgreSQL database queries with smart indexing and aggregate functions
- Model, View, Controller (MVC) architecture establishing separation of concerns and modularity, decreasing bugs, and increasing workflow
- Implemented agile methodologies with daily stand ups, code reviews, and GitHub workflow tools

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

- Initial team planning consisted of establishing minimum viable product requirements, critical core features, and separation of responsibilties. 

- A link

### Wire Diagram

- Utilized Figma to create a wire diagram for user design and user experience considerations. Wire framing was integral for early stage planning and provided a visual representation of how user stories were created.

- A photo

## Features

### Navigation Bar

- Bullet point 1

- Bullet point 2

![Navigation Bar](client/src/assets/searchbar.png 'Navigation bar feature')

---

### Authentication

- Firebase Authentication uses the industry standard OAuth 2. OAuth2 is a protocol that lets applications know who has access to a website by providing authorization tokens which act as the messenger to verify who you are to provide security and a customized user experience.

- Critical information such as email and password were captured by Firebase, and allowed our application to provides a persistent user session even after browser or application restarts.

- Utilized React Context to provide the entire application access to specific user session data in order to enable or disable certain features, providing a customized user experience.

- Features in the application requiring authentication such as add a review, up and down vote, and posting a show, prevents unauthorized users from accessing premium features, without disabling the core functionality of reading reviews and finding show information.

![Authentication](client/src/assets/authentication.png 'Authentication feature')

---

### Server Vs Client Routing

- Bullet point 1

- Bullet point 1

![favorite characters](client/assets/favorites.png 'favorite characters feature')

---

### Light and Dark Mode

- Bullet point 1

- Bullet point 2

![accessibility report](client/assets/accessibility-report.png 'accessibility report')

---

### Carousel

- Bullet point 1

- Bullet point 2

![Home Page Carousel](client/src/assets/homepagecarousel.png 'Home Page Carousel')

### Production Page

- Bullet point 1

- Bullet point 2

![Production Page](client/src/assets/showinfo.png 'Production Page')

---

### User Page

- Bullet point 1

- Bullet point 2

![User Page](client/src/assets/userpage.png 'User Page')

---

## Workflow

Our team utilized agile methodologies and best practices

### Trello

- Small blurb of workflow

![Trello Work Flow](client/src/assets/trello.png 'Trello Work Flow')

### Version Control

- Small blurb of workflow

![Git Work Flow](client/src/assets/gitworkflow.png 'Git Work Flow')

## Challenges and Learning

-
-
-
-
-
-

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
