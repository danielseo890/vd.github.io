document.addEventListener('DOMContentLoaded', () => {
    const numberOfMoney = 100; // Number of money elements to rain down
    const styleSheet = document.createElement('style');
    document.head.appendChild(styleSheet);
    styleSheet.sheet.insertRule(`
        @keyframes rain {
            0% { top: -100px; opacity: 1; }
            100% { top: 100vh; opacity: 0; }
        }
    `, 0);
    
    for (let i = 0; i < numberOfMoney; i++) {
        let money = document.createElement('div');
        money.classList.add('money');
        // Set the money background image to a GIF
        money.style.backgroundImage = "https://giphy.com/embed/l2YOp5fNAFMp63B3a";
        money.style.backgroundSize = "contain";
        money.style.backgroundRepeat = "no-repeat";
        document.body.appendChild(money);

        // Randomize the starting position and animation duration
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5 + 2;

        money.style.width = "50px"; // Set width of the GIF
        money.style.height = "50px"; // Set height of the GIF
        money.style.left = `${posX}px`;
        money.style.animation = `rain ${duration}s linear ${delay}s infinite`;

        // Keyframes for the rain animation
        let styleSheet = document.styleheets[0];
        styleSheet.insertRule(`
            @keyframes rain {
                0% { top: -100px; opacity: 1; }
                100% { top: ${window.innerHeight}px; opacity: 0; }
            }
        `, styleSheet.cssRules.length);
    }
});