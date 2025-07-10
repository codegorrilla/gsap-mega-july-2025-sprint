import '../scss/app2.scss';

import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

const heading = document.querySelector('.hover-heading');
const hoverImages = document.querySelectorAll('.hover-image');

// Split the text into characters and enable propIndex
const split = SplitText.create(heading, {
	type: 'chars',
	charsClass: 'char', //class for characters
	propIndex: true, // Adds --char CSS variable to each character
});

// Store image animations to control them easily
const imageAnimations = [];

// Initialize image animations (set initial state for the stack)
hoverImages.forEach((img, index) => {
	// Set initial state for images (hidden and stacked)
	gsap.set(img, {
		opacity: 0,
		scale: 0.8,
		x: 'random(-50, 50)',
		y: 'random(-50, 50)',
		rotation: 'random(-20, 20)',
		zIndex: index, // Ensure stacking order
	});

	// Create a timeline for each image's reveal animation on hover
	const imageTL = gsap.timeline({ paused: true }); // Start paused
	imageTL.to(img, {
		opacity: 1,
		scale: 1,
		x: 0,
		y: 0,
		rotation: 'random(-10, 10)',
		duration: 0.4,
		ease: 'back.out(1.7)',
	});
	imageAnimations.push(imageTL);
});

// Attach hover listeners to each character
split.chars.forEach((char, index) => {
	char.addEventListener('mouseenter', () => {
		// Play the animation of the corresponding image
		if (imageAnimations[index]) {
			imageAnimations[index].play(); // Play the specific image's timeline
		}
		// Optional: Animate the character itself
		gsap.to(char, { y: -10, duration: 0.2, ease: 'power2.in' });
	});

	char.addEventListener('mouseleave', () => {
		// Reverse the animation of the corresponding image
		if (imageAnimations[index]) {
			imageAnimations[index].reverse(); // Reverse the specific image's timeline
		}
		// Optional: Animate the character back
		gsap.to(char, { y: 0, duration: 0.2, ease: 'power2.out' });
	});
});

// Initial animation for the text (optional, but good for a starting point)
gsap.from(split.chars, {
	y: 100,
	opacity: 0,
	duration: 0.8,
	//delay: 'var(--char) * 0.05', // Use propIndex for staggered delay
	stagger: {
		amount: 0.9,
		from: 'start',
		ease: 'back.out(1.7)',
	},
	ease: 'power3.out',
});
