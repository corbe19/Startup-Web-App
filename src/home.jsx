import React from 'react';
import './style.css'; // Import your CSS file here

function Home() {
  // Define your redirectToPage function
  const redirectToPage = (targetPage) => {
    window.location.href = targetPage;
  };

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script src="script.js" type="text/javascript"></script>
        <title>Flip - Card Memory Game</title>
      </head>

      <body>
        <div className="logo">
          <p className="info"><a href="about.html">About</a></p>
          <div id="g"></div>

          {/* Card 1 */}
          <div className="card left">
            <div className="flipper">
              <div className="f c1">F</div>
              <div className="b contentbox" id="stats">
                <div className="padded">
                  <h2>Figures</h2>
                  Looks like you haven't FLIPped yet.
                  <a href="javascript:;" className="playnow">Play now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card active twist">
            <div className="flipper">
              <div className="b f">
                <div className="b f c2" onClick={() => redirectToPage('leaderboard.html')}>L</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card left">
            <div className="flipper">
              <div className="f c3">I</div>
              <div className="b contentbox instructions">
                <div className="padded">
                  <h2>Instructions</h2>
                  <p>Press [p] to pause, or [ESC] to abandon game.</p>
                  <p>Flip is a timed card memory game. Click the green cards to see what symbol they uncover and try to find the matching symbol underneath the other cards.</p>
                  <p>Uncover two matching symbols at once to eliminate them from the game.</p>
                  <p>Eliminate all cards as fast as you can to win the game. Have fun FLIPing!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="flipper">
              <div className="f c4">P</div>
              <div className="b contentbox levels">
                <a href="javascript:;" data-level="8" className="play">Casual</a>
                <a href="javascript:;" data-level="18" className="play">Medium</a>
                <a href="javascript:;" data-level="32" className="play">Hard</a>
              </div>
            </div>
          </div>

          <p className="info">Author <a href="https://github.com/corbe19">Github</a></p>
        </div>
      </body>
    </div>
  );
}

export default Home;
