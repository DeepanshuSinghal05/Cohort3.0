const bird = document.querySelector(".bird-png");
const game = document.querySelector(".game");
const scoreDisplay = document.querySelector(".score");
const gameOverOverlay = document.querySelector(".game-over-overlay");
const finalScoreText = document.querySelector(".final-score");
const restartBtn = document.querySelector(".restart-btn");

// ---- Sounds ----
const bgMusic = new Audio("bg-music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.4;

const flapSound = new Audio("flap.mp3");
flapSound.volume = 0.8;

const scoreSound = new Audio("score.mp3");
scoreSound.volume = 0.7;

const gameOverSound = new Audio("gameover.mp3");
gameOverSound.volume = 0.8;

let musicStarted = false;

function startBgMusic() {
    if (musicStarted) return;
    musicStarted = true;
    bgMusic.play().catch(() => {
        // Autoplay might be blocked until user interacts; it will
        // start on the first keydown/click instead.
    });
}

let isGameOver = false;
let score = 0;

let birdTop = 200;
const gravity = 2;

// Gravity
const gravityInterval = setInterval(() => {
    if (isGameOver) return;

    birdTop += gravity;

    // Ground collision
    if (birdTop >= game.clientHeight - bird.clientHeight) {
        birdTop = game.clientHeight - bird.clientHeight;
        bird.style.top = birdTop + "px";
        gameOver();
        return;
    }

    bird.style.top = birdTop + "px";
}, 20);

// Jump
document.addEventListener("keydown", (e) => {
    startBgMusic();

    if (isGameOver) return;

    if (e.code === "Space") {
        e.preventDefault();

        birdTop = Math.max(0, birdTop - 55);
        bird.style.top = birdTop + "px";

        flapSound.currentTime = 0;
        flapSound.play().catch(() => {});
    }
});

function updateScore() {
    score++;
    scoreDisplay.textContent = score;

    scoreSound.currentTime = 0;
    scoreSound.play().catch(() => {});
}

function createPipe() {

    if (isGameOver) return;

    const pipeTop = document.createElement("div");
    const pipeBottom = document.createElement("div");

    pipeTop.classList.add("pipe");
    pipeBottom.classList.add("pipe");

    // Bigger gap for larger bird
    const gap = 230;
    const minPipeHeight = 60;

    const gameHeight = game.clientHeight;

    const topHeight =
        Math.random() *
        (gameHeight - gap - minPipeHeight * 2) +
        minPipeHeight;

    const bottomHeight = gameHeight - gap - topHeight;

    pipeTop.style.height = topHeight + "px";
    pipeBottom.style.height = bottomHeight + "px";

    pipeTop.style.top = "0px";
    pipeBottom.style.bottom = "0px";

    let pipeLeft = game.clientWidth;

    pipeTop.style.left = pipeLeft + "px";
    pipeBottom.style.left = pipeLeft + "px";

    game.append(pipeTop, pipeBottom);

    // Tracks whether this pipe pair has already awarded a point
    let scored = false;

    const move = setInterval(() => {

        if (isGameOver) {
            clearInterval(move);
            return;
        }

        pipeLeft -= 2;

        pipeTop.style.left = pipeLeft + "px";
        pipeBottom.style.left = pipeLeft + "px";

        // Smaller hitbox for bird
        const rect = bird.getBoundingClientRect();

        const birdRect = {
            left: rect.left + 12,
            right: rect.right - 12,
            top: rect.top + 10,
            bottom: rect.bottom - 10
        };

        const topRect = pipeTop.getBoundingClientRect();
        const bottomRect = pipeBottom.getBoundingClientRect();

        // Collision
        if (
            birdRect.right > topRect.left &&
            birdRect.left < topRect.right &&
            (
                birdRect.top < topRect.bottom ||
                birdRect.bottom > bottomRect.top
            )
        ) {
            clearInterval(move);
            gameOver();
            return;
        }

        // Score: bird has fully passed the pipe pair
        if (!scored && topRect.right < birdRect.left) {
            scored = true;
            updateScore();
        }

        // Remove pipes after leaving screen
        if (pipeLeft < -pipeTop.offsetWidth) {
            pipeTop.remove();
            pipeBottom.remove();
            clearInterval(move);
        }

    }, 20);
}

const pipeInterval = setInterval(createPipe, 2000);

function gameOver() {

    if (isGameOver) return;

    isGameOver = true;

    clearInterval(pipeInterval);
    clearInterval(gravityInterval);

    bgMusic.pause();
    gameOverSound.currentTime = 0;
    gameOverSound.play().catch(() => {});

    finalScoreText.textContent = "Score: " + score;
    gameOverOverlay.classList.add("show");
}

restartBtn.addEventListener("click", () => {
    location.reload();
});
