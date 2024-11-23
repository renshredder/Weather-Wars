// Initial values for drops
let drops = 1.0;
let exponent = 0;
let spawnRate = 100; // Drops per second (ms interval)

// Update the counter display
function updateCounter() {
    const dropCounter = document.getElementById("drop-counter");
    dropCounter.innerText = `${drops.toFixed(1)} * 10^${exponent}`;
}

// Spawn drops over time
function spawnDrops() {
    drops += 1;
    if (drops >= 10) {
        drops = 1.0;
        exponent += 1;
    }
    updateCounter();
}

// Start spawning drops
setInterval(spawnDrops, spawnRate);
