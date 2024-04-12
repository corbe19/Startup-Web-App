# Flip - Card Memory Game

### Elevator pitch

Have you ever been bored while attending one of your CS classes and said to yourself: "I wish I could play a game that tests my intellect and proves that I have a better memory than all my friends." Flip is a card memory game that tests your ability to remember symbols and their locations. Flip also tracks your preforamce and posts the best scores on a public leaderboard in order to compete with your freinds and satify your competitive itch.

### Design

![Mock](flipDesignDiagram.jpg)

### Key features

- Secure login over HTTPS
- Ability to view player stats and game instructions
- Ability to choose game difficulty
- Ability to play game at chosen difficulty
- Display of leaderboards and fastest times for each difficulty
- Notifications of players logging on and beating time records
- High scores for each user stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Four HTML pages. One for login, one for main menu, one for the game, and one for the leaderboard.
- **CSS** - Styling that is readable and minimal as to not become too congested or distracting. Uses appealing color choices and scales to different sized screens.
- **JavaScript** - Provides login, main menu functionality, and gameplay.
- **Service** - Backend service with endpoints for:
  - login
  - receiving scores
  - Tieing scores with correct users
- **DB/Login** - Stores users login info, scores, and stats. Login info is stored securily. 
- **WebSocket** - Users are notified of other players activity and scores in real-time.
- **React** - Application correctly ported to the React Framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - 4 pages total, a home page, leaderboard page, an about page, and a page to play the game.
- **Links** - Links will be on the top of each page to ensure consistency and ease of access.
- **Text** - Text represented in navigation links, headers, instructions, and about page.
- **Images** - Image in the about section will be a random image from a 3rd party service.
- **DB/Login** - Login page with username and password. Leaderboard and user stats pulled from database.
- **WebSocket** - Home page will display other user logins and scores real-time.

## CSS deliverable

- **Header, footer, and main content body**
- **Navigation elements** - I made a navigation bar that is consitsant through all pages, interacts with the mouse, and highlights which page you are viewing.
- **Responsive to window resizing** - Page resizes for all window/screen sizes.
- **Application elements** - Found a good theme for colors that is readable and apealing
- **Application text content** - Consistent fonts.
- **Application images** - Specified bounds of image in the about page.

## JavaScript deliverable

For this deliverable I implemented JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **login** - When you press enter or the login button it takes you to the home page.
- **database** - Displayed the leaderboard with username and time. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- **WebSocket** - I used the setInterval function to periodically increase a random status event. This will be replaced with WebSocket messages later.
- **application logic** - The memory card game works smoothley and the home page functions.

## Service deliverable

For this deliverable I added backend endpoints that receives votes and returns the voting totals.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - Quote and image calls.
- **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for scores.
- **Frontend calls service endpoints** - I did this using the fetch function.

## DB/Login deliverable

For this deliverable I associate the votes with the logged in user. I stored the votes in the database.

- **MongoDB Atlas database created** - done!
- **Stores data in MongoDB** - done!
- **User registration** - Creates a new account in the database.
- **existing user** - Stores the score under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their scores.
- **Restricts functionality** - You cannot play until you have logged in.

## WebSocket deliverable

For this deliverable I used webSocket to update the votes on the frontend in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - Displays message to leaderboard when another player connects to the leaderboard page. Yay!

## React deliverable

For this deliverable I converted the application over to use Vue. I know it is supposed to use React, but the instructor said I could use Vue because I already have extensive experience with React.

 - **Bundled and transpiled** - done!
 - **Components** - Login and About are components.
 - **Router** - Routing between login, home, and about.
 - **Hooks** - Used hoooks for Login and About!