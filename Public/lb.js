class Game {
    socket;
    constructor() {
        this.userName = this.getPlayerName(); 
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
        this.configureWebSocket(); // Automatically set up WebSocket connection
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
      }

    async loadScores() {
        let scores = [];
        try {
            const response = await fetch('/api/scores');
            scores = await response.json();
            localStorage.setItem('scores', JSON.stringify(scores));
        } catch {
            const scoresText = localStorage.getItem('scores');
            if (scoresText) {
                scores = JSON.parse(scoresText);
            }
        }
        this.displayScores(scores);
    }

    displayScores(scores) {
        const tableBodyEl = document.querySelector('#scores');
        tableBodyEl.innerHTML = '';

        if (scores.length) {
            scores.forEach((score, i) => {
                const rowEl = document.createElement('tr');
                rowEl.innerHTML = `<td>${i + 1}</td><td>${score.name}</td><td>${score.score}</td>`;
                tableBodyEl.appendChild(rowEl);
            });
        } else {
            tableBodyEl.innerHTML = '<tr><td colspan="3">Be the first to score!</td></tr>';
        }
    }

    configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    
        this.socket.onopen = () => {
            console.log('WebSocket connected.');
            // Broadcast that the user has connected, as before
            this.broadcastEvent(this.userName, 'UserConnected', { message: `${this.userName} has connected.` });
        };
    
        this.socket.onclose = () => {
            console.log('WebSocket disconnected.');
        };
    
        this.socket.onmessage = async (event) => {
            let msg;
            if (event.data instanceof Blob) {
                const text = await event.data.text();
                try {
                    msg = JSON.parse(text);
                } catch (e) {
                    console.error('Failed to parse the message as JSON:', text);
                    return;
                }
            } else {
                try {
                    msg = JSON.parse(event.data);
                } catch (e) {
                    console.error('Failed to parse the message as JSON:', event.data);
                    return;
                }
            }
        
            if (msg.type === 'UserConnected') {
                // Use displayMsg to insert the 'UserConnected' event into the page
                // Assuming `msg.from` is the username and `msg.message` is the text to display
                // If your message structure is different, adjust the properties accordingly
                this.displayMsg('player-event', msg.from, 'connected');
            }
            // Add more conditions here for other message types you might be interested in
        };
    }
        

    displayMsg(cls, from, msg) {
        const chatText = document.querySelector('#player-messages');
        const messageElement = document.createElement('div');
        messageElement.className = cls; // This applies the CSS class for styling
        messageElement.innerHTML = `<span> ${from}</span> ${msg}`;
        chatText.prepend(messageElement); // Use prepend to add the new message at the top
    }
    

    broadcastEvent(from, type, value) {
        const event = { from, type, value };
        this.socket.send(JSON.stringify(event));
    }
}

// Usage
const game = new Game();
game.loadScores(); // To load and display scores initially
