import React from 'react';
import './about.css';

export function About(props) {
    const [imageUrl, setImageUrl] = React.useState('');
    const [quote, setQuote] = React.useState('Loading...');

    React.useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
          .then((response) => response.json())
          .then((data) => {
            const containerEl = document.querySelector('#picture');
    
            const width = containerEl.offsetWidth;
            const height = containerEl.offsetHeight;
            const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}`;
            setImageUrl(apiUrl);
          })
          .catch();
    
        fetch('https://api.quotable.io/random')
          .then((response) => response.json())
          .then((data) => {
            setQuote(data.content);
          })
          .catch();
      }, []);
    
      let imgEl = '';
    
      if (imageUrl) {
        imgEl = <img src={imageUrl} alt='stock background' />;
      }
    
      return (

        <body>
        <header>
        <h1>About</h1>

    </header>

    <div className="arrow" onclick="redirectToPage('home.html')">
        <span></span>
    </div>
            <main>
                <div id="picture" className="picture-box">
                    {imgEl}
                </div>

                <p>Have you ever been bored while attending one of your CS classes and said to yourself: "I wish I could play a game that tests my intellect and proves that I have a better memory than all my friends." 
                    Flip is a card memory game that tests your ability to remember symbols and their locations. Flip also tracks your performance and posts the best scores on a public leaderboard 
                    in order to compete with your friends and satisfy your competitive itch.</p>
                <div id="quote">
                    {quote}
                </div>

            </main>
        </body>
      );
    }
    