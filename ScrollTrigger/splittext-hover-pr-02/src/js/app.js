import '../scss/app.scss';

import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

//text animation
const heading = document.querySelector('.heading');

const split = new SplitText(heading, {
	type: 'lines,chars',
	mask: 'lines',
	propIndex: true,
});

gsap.fromTo(
	split.chars,
	{
		yPercent: 100,
	},
	{
		yPercent: 0,
		stagger: 0.05,
	}
);

// gsap.set(split.chars, {
// 	yPercent: 'random(-50, 50)',
// 	zPercent: 'random(-50, 50)',
// 	opacity: 0,
// 	fontSize: '0rem',
// 	ease: 'power2.out',
// });

// gsap.to(split.chars, {
// 	yPercent: 'random(0, 0)',
// 	zPercent: 'random(0, 0)',
// 	duration: 1,
// 	stagger: {
// 		amount: 0.2,
// 		from: 'random',
// 	},
// 	opacity: 1,
// 	fontSize: '6rem',
// });

//hover animation
const imgs = document.querySelectorAll('.img-item');

imgs.forEach((img, i) => {
	gsap.set(img, {
		xPercent: 'random(-2,2)',
		yPercent: 'random(-2,2)',
		rotation: 'random(-15,15)',
		scale: Math.random() * 0.4,
		opacity: 0,
		visibility: 'hidden',
		zIndex: imgs.length - i,
	});

	// tl.to(img, {
	// 	xPercent: 0,
	// 	yPercent: 0,
	// 	rotation: 'random(-45,45)',
	// 	scale: 1,
	// 	opacity: 1,
	// 	duration: 0.5,
	// 	delay: 1,
	// 	stagger: {
	// 		each: 0.5,
	// 		from: 'random',
	// 	},
	// 	zIndex: imgs.length + i,
	// 	ease: 'power1.in',
	// });
});

// gsap.to(imgs, {
// 	opacity: 1,
// 	stagger: {
// 		each: 0.5,
// 		from: 'random',
// 	},
// 	duration: 0.5,
// 	ease: 'power2.in',
// 	delay: 1,
// });

const tl = gsap.timeline({
	paused: true,
	ease: 'power2.inOut',
});

tl.to(imgs, {
	opacity: 1,
	visibility: 'visible',
	scale: 1,
	stagger: {
		each: 0.1,
		from: 'random',
	},
	duration: 0.1,
	delay: 0.1,
});

heading.addEventListener('mouseenter', () => {
	tl.play();
});

heading.addEventListener('mouseleave', () => {
	tl.reverse();
});
