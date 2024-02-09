// document.addEventListener('DOMContentLoaded', () => {
//     const numberOfMoney = 100; // Number of money elements to rain down
//     const styleSheet = document.createElement('style');

//     document.head.appendChild(styleSheet);
//     styleSheet.sheet.insertRule(`
//         @keyframes rain {
//             0% { top: -100px; opacity: 1; }
//             100% { top: 100vh; opacity: 0; }
//         }
//     `, 0);

//     for (let i = 0; i < numberOfMoney; i++) {
//         let money = document.createElement('div');
//         money.classList.add('money');
//         // Set the money background image to a GIF
//         money.style.backgroundImage = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGVndGRjcTFsNzZsd3hiYXQxMzg0c3dvMzBlMDdxNzBsMXVlZmx0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l2YOp5fNAFMp63B3a/giphy.gif";
//         money.style.backgroundSize = "contain";
//         money.style.backgroundRepeat = "no-repeat";
//         document.body.appendChild(money);

//         // Randomize the starting position and animation duration
//         let posX = Math.floor(Math.random() * window.innerWidth);
//         let delay = Math.random() * -20;
//         let duration = Math.random() * 5 + 2;

//         money.style.width = "50px"; // Set width of the GIF
//         money.style.height = "50px"; // Set height of the GIF
//         money.style.position = 'absolute';
//         money.style.top = '-100px'; 
//         money.style.left = `${posX}px`;
//         money.style.animation = `rain ${duration}s linear ${delay}s infinite`;
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    let money = document.createElement('div');
    money.classList.add('money');
    document.body.appendChild(money);

    money.style.left = '50%'; // Position in the middle for visibility
    money.style.top = '-100px'; // Start above the viewport

    // Apply a simple continuous falling animation
    money.style.animation = 'fall 5s linear infinite';

    // Define the keyframes for the falling animation
    const styleSheet = document.createElement('style');
    document.head.appendChild(styleSheet);
    styleSheet.sheet.insertRule(`
        @keyframes fall {
            0% { top: -100px; }
            100% { top: 100vh; }
        }
    `, 0);
});