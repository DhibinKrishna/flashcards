/**
 * Sound Effects Handler for Kids Flash Cards App
 * Uses Web Audio API to generate sounds without external files
 */

// Audio context (created on first user interaction)
let audioContext = null;

// Initialize audio context on first interaction
function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

// Play a tone with specified parameters
function playTone(frequency, duration, type = 'sine', volume = 0.3) {
  try {
    const ctx = initAudio();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Envelope for smoother sound
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio not supported or blocked - fail silently
    console.log('Audio not available');
  }
}

// Click sound - short, soft pop
function playClickSound() {
  playTone(800, 0.1, 'sine', 0.2);
}

// Whoosh sound - slide effect for card transitions
function playWhooshSound() {
  try {
    const ctx = initAudio();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'sine';

    // Frequency sweep for whoosh effect
    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);

    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.15);
  } catch (e) {
    console.log('Audio not available');
  }
}

// Success sound - cheerful ascending notes
function playSuccessSound() {
  try {
    const ctx = initAudio();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const duration = 0.15;

    notes.forEach((freq, index) => {
      setTimeout(() => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, ctx.currentTime);

        gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + duration);
      }, index * 100);
    });
  } catch (e) {
    console.log('Audio not available');
  }
}

// Add click sound to all interactive elements on page load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize audio on first click anywhere
  document.addEventListener('click', initAudio, { once: true });
});
