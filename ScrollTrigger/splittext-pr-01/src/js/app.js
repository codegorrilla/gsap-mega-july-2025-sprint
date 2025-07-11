import '../scss/app.scss';

import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

const heading = document.querySelector('.heading');
const stackImages = document.querySelectorAll('.stack-image');

// Set initial --img-index CSS variable for each image
// stackImages.forEach((img, index) => {
// 	img.style.setProperty('--img-index', index);
// });

//SplitText
const split = new SplitText(heading, {
	type: 'chars',
	propIndex: true,
});

// Animate the split characters
gsap.from(split.chars, {
	y: 50,
	opacity: 0,
	duration: 0.6,
	delay: 'var(--char) * 0.08', // Stagger based on character index
	ease: 'power1.in',
});

gsap.set('.image-stack', {
	perspective: 800,
});

stackImages.forEach((img, index) => {
	gsap.set(img, {
		x: gsap.utils.random(-15, 15),
		y: gsap.utils.random(-15, 15),
		rotation: gsap.utils.random(-15, 15),
		scale: 0.9,
		opacity: 0,
		zIndex: stackImages.length - index,
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
	});
});

gsap.to(stackImages, {
	opacity: 1,
	stagger: {
		each: 0.5,
		from: 'random',
	},
	duration: 0.5,
	ease: 'power2.in',
	delay: 1,
});
