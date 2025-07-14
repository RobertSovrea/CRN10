class SlotMachine {
    constructor() {
        this.symbols = ['🍒', '💎', '7️⃣', '🍋', '🔔'];
        this.reels = [];
        this.isSpinning = false;
        this.spinButton = document.getElementById('spinButton');
        this.messageElement = document.getElementById('message');
        
        // Mesaje de consoloare
        this.consolationMessages = [
            "😅 Ghinion! Nu e salariu dublu de data asta... dar hei, te așteaptă tortul!",
            "😅 Oops! Jackpot-ul a scăpat din nou... dar nu-ți face griji, te așteaptă tortul!",
            "😅 Atât de aproape! Nu e salariu dublu azi... dar hei, te așteaptă tortul!",
            "😅 Nu de data asta! Salariul rămâne la fel... dar hei, te așteaptă tortul!",
            "😅 Aproape acolo! Nu e jackpot... dar nu-ți face griji, te așteaptă tortul!"
        ];
        
        this.initializeReels();
        this.setupEventListeners();
    }
    
    initializeReels() {
        for (let i = 1; i <= 5; i++) {
            const reel = document.getElementById(`reel${i}`);
            this.reels.push(reel);
        }
    }
    
    setupEventListeners() {
        this.spinButton.addEventListener('click', () => {
            if (!this.isSpinning) {
                this.spin();
            }
        });
        
        // Touch support for mobile
        this.spinButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!this.isSpinning) {
                this.spin();
            }
        });
    }
    
    spin() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        this.spinButton.disabled = true;
        this.spinButton.innerHTML = '<span class="button-text">🎰 SE ÎNVÂRTE... 🎰</span>';
        
        // Show spinning message
        this.messageElement.innerHTML = "🎰 Rolele se învârt pentru Crina! 🎰";
        
        // Start spinning animation for all reels
        this.reels.forEach(reel => {
            reel.classList.add('spinning');
        });
        
        // Stop reels with staggered delays
        this.reels.forEach((reel, index) => {
            setTimeout(() => {
                this.stopReel(reel, index);
                
                // If this is the last reel, show result
                if (index === this.reels.length - 1) {
                    setTimeout(() => {
                        this.showResult();
                    }, 500);
                }
            }, 1000 + (index * 300)); // Staggered delays
        });
    }
    
    stopReel(reel, reelIndex) {
        reel.classList.remove('spinning');
        
        // Generate a guaranteed non-winning combination
        const finalSymbols = this.generateLosingCombination(reelIndex);
        
        // Update the reel symbols
        const symbolElements = reel.querySelectorAll('.symbol');
        symbolElements.forEach((symbolElement, index) => {
            if (index < 3) { // Only update the visible symbols
                symbolElement.textContent = finalSymbols[index];
            }
        });
    }
    
    generateLosingCombination(reelIndex) {
        // Ensure we never get 5 matching symbols
        let symbols = [];
        
        if (reelIndex === 0) {
            // First reel - can be any symbol
            const randomSymbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
            symbols = [randomSymbol, randomSymbol, randomSymbol];
        } else {
            // For subsequent reels, ensure we don't create a winning line
            const firstReelSymbol = this.getMiddleSymbol(0);
            let availableSymbols = this.symbols.filter(symbol => symbol !== firstReelSymbol);
            
            // Mix it up - sometimes match the first reel (but not all 5)
            if (reelIndex < 4 && Math.random() < 0.3) {
                symbols = [firstReelSymbol, firstReelSymbol, firstReelSymbol];
            } else {
                const randomSymbol = availableSymbols[Math.floor(Math.random() * availableSymbols.length)];
                symbols = [randomSymbol, randomSymbol, randomSymbol];
            }
        }
        
        return symbols;
    }
    
    getMiddleSymbol(reelIndex) {
        const reel = this.reels[reelIndex];
        const symbolElements = reel.querySelectorAll('.symbol');
        return symbolElements[1].textContent; // Middle symbol (index 1)
    }
    
    showResult() {
        // Always show a consolation message since we guarantee losses
        const randomMessage = this.consolationMessages[Math.floor(Math.random() * this.consolationMessages.length)];
        this.messageElement.innerHTML = randomMessage;
        
        // Reset spin button
        this.spinButton.disabled = false;
        this.spinButton.innerHTML = '<span class="button-text">🎰 ÎNVÂRTE DIN NOU 🎰</span>';
        this.isSpinning = false;
        
        // Add some celebration effects
        this.addCelebrationEffects();
    }
    
    addCelebrationEffects() {
        // Add a temporary glow effect to the machine
        const machine = document.querySelector('.slot-machine');
        machine.style.boxShadow = `
            0 0 30px rgba(255, 215, 0, 0.3),
            inset 0 0 20px rgba(0, 0, 0, 0.5),
            0 0 50px rgba(255, 107, 107, 0.4)
        `;
        
        setTimeout(() => {
            machine.style.boxShadow = `
                0 0 30px rgba(255, 215, 0, 0.3),
                inset 0 0 20px rgba(0, 0, 0, 0.5)
            `;
        }, 2000);
        
        // Make lights twinkle faster temporarily
        const lights = document.querySelectorAll('.light');
        lights.forEach(light => {
            light.style.animationDuration = '0.5s';
        });
        
        setTimeout(() => {
            lights.forEach(light => {
                light.style.animationDuration = '1.5s';
            });
        }, 3000);
    }
}

// Initialize the slot machine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SlotMachine();
    
    // Add some initial celebration
    setTimeout(() => {
        const message = document.getElementById('message');
        message.style.animation = 'messageGlow 2s ease-in-out infinite alternate';
    }, 1000);
});

// Add some festive background effects
function createFloatingEmoji() {
    const emojis = ['🎉', '🎊', '⭐', '💎', '🎈'];
    const emoji = document.createElement('div');
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = '100vh';
    emoji.style.fontSize = '2rem';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = '-1';
    emoji.style.animation = 'float 8s linear forwards';
    
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 8000);
}

// Add floating emoji animation
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes float {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatingStyle);

// Create floating emojis periodically
setInterval(createFloatingEmoji, 3000);

// Add touch feedback for mobile
document.addEventListener('touchstart', function() {}, {passive: true});
