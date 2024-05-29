const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');
const coinCountDisplay = document.getElementById('coin-count');
const coinFrame = document.getElementById('coin-frame');
let score = 0;
let coinCount = 50;
const maxCoins = 50;
const refillInterval = 3000; // 3 seconds

function moveCoin() {
    const frameRect = coinFrame.getBoundingClientRect();
    const coinSize = 50; // Width and height of the coin

    const maxX = frameRect.width - coinSize;
    const maxY = frameRect.height - coinSize;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    coin.style.left = `${x}px`;
    coin.style.top = `${y}px`;
}

function updateScore() {
    if (coinCount > 0) {
        score += 1;
        coinCount -= 1;
        scoreDisplay.textContent = score;
        coinCountDisplay.textContent = coinCount;
        moveCoin();
    } else {
        alert("No more clicks left! Wait for refill.");
    }
}

function refillCoins() {
    if (coinCount < maxCoins) {
        coinCount += 1;
        coinCountDisplay.textContent = coinCount;
    }
}

coin.addEventListener('click', updateScore);

// Initialize coin position
moveCoin();

// Refill coins every 3 seconds
setInterval(refillCoins, refillInterval);