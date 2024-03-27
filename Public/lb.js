const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';

class Game {
    constructor() {
        this.configureWebSocket(); // Automatically set up WebSocket connection
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
        tableBodyEl.innerHTML = ''; // Clear existing scores

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
        };

        this.socket.onclose = () => {
            console.log('WebSocket disconnected.');
        };

        this.socket.onmessage = async (event) => {
            const msg = JSON.parse(event.data);
            if (msg.type === GameEndEvent) {
                this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
                this.loadScores(); // Reload scores to display the updated scores
            } else if (msg.type === GameStartEvent) {
                this.displayMsg('player', msg.from, 'started a new game');
            }
        };
    }

    displayMsg(cls, from, msg) {
        const chatText = document.querySelector('#player-messages');
        chatText.innerHTML = `<div class="${cls}-event"><span>${from}</span> ${msg}</div>` + chatText.innerHTML;
    }

    broadcastEvent(from, type, value) {
        const event = { from, type, value };
        this.socket.send(JSON.stringify(event));
    }
}

// Usage
const game = new Game();
game.loadScores(); // To load and display scores initially

