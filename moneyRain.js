document.addEventListener('DOMContentLoaded', () => {
    const numberOfMoney = 100; // Adjust the number of falling money elements here

    // Define the keyframes for the falling animation
    const styleSheet = document.createElement('style');
    document.head.appendChild(styleSheet);
    styleSheet.sheet.insertRule(`
        @keyframes fall {
            0% { top: -100px; }
            100% { top: 100vh; }
        }
    `, 0);

    for (let i = 0; i < numberOfMoney; i++) {
        let money = document.createElement('div');
        money.classList.add('money');
        document.body.appendChild(money);

        // Randomize the starting horizontal position
        let posX = Math.floor(Math.random() * window.innerWidth);
        money.style.left = `${posX}px`;

        // Start above the viewport
        money.style.top = '-100px';

        // Apply the falling animation with random durations and delays for variety
        let animationDuration = Math.random() * 5 + 3; // Between 3 and 8 seconds
        let animationDelay = Math.random() * -20; // Start animation at different times
        money.style.animation = `fall ${animationDuration}s linear ${animationDelay}s infinite`;
    }
});