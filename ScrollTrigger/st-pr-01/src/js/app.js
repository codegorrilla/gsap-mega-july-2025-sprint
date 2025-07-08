import '../scss/app.scss';

import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

//rugby sequence
const circle = document.querySelector('.circle');
const blueDot = document.querySelector('.dotsBlue');
const rugby = document.querySelector('.owlHorned');
const rugbyContent = document.querySelector('.clusterGreat');

gsap.set(circle, { yPercent: -5 });
gsap.set(blueDot, { yPercent: 10 });
gsap.set(rugby, { yPercent: -20 });
gsap.set(rugbyContent, { yPercent: 5 });

gsap.to(circle, {
	yPercent: 5,
	ease: 'none',
	scrollTrigger: {
		trigger: rugbyContent,
		scrub: 1,
	},
});

gsap.to(blueDot, {
	yPercent: -10,
	ease: 'none',
	scrollTrigger: {
		trigger: rugbyContent,
		scrub: 1,
	},
});

gsap.to(rugby, {
	yPercent: 20,
	ease: 'none',
	scrollTrigger: {
		trigger: rugbyContent,
		scrub: 1,
	},
});

gsap.to('.caption', {
	yPercent: 100,
	ease: 'none',
	scrollTrigger: {
		trigger: rugbyContent,
		end: 'bottom center',
		scrub: 1,
	},
});

gsap.to(rugbyContent, {
	yPercent: -5,
	ease: 'none',
	scrollTrigger: {
		trigger: rugbyContent,
		end: 'bottom center',
		scrub: 1,
	},
});

//tennis sequence
const triangle = document.querySelector('.triangle');
const dotsWhite = document.querySelector('.dotsWhite');
const tennis = document.querySelector('.owlBurrowing');
const tennisContent = document.querySelector('.clusterBurrowing');

gsap.set(triangle, { yPercent: 25, rotation: -90 });
gsap.set(dotsWhite, { yPercent: -10 });
gsap.set(tennis, { yPercent: -20 });
gsap.set(tennisContent, { yPercent: 5 });

gsap.to(triangle, {
	yPercent: -5,
	rotation: 40,
	ease: 'none',
	scrollTrigger: {
		trigger: tennisContent,
		scrub: 1,
	},
});

gsap.to(dotsWhite, {
	yPercent: 10,
	ease: 'none',
	scrollTrigger: {
		trigger: tennisContent,
		scrub: 1,
	},
});

gsap.to(tennis, {
	yPercent: 20,
	ease: 'none',
	scrollTrigger: {
		trigger: tennisContent,
		scrub: 1,
	},
});

gsap.to('.captionBurrowing', {
	yPercent: 200,
	ease: 'none',
	scrollTrigger: {
		trigger: tennisContent,
		end: 'bottom center',
		scrub: 1,
	},
});

gsap.to(tennisContent, {
	yPercent: -5,
	ease: 'none',
	scrollTrigger: {
		trigger: tennisContent,
		end: 'bottom center',
		scrub: 1,
	},
});

// Split text animation for the rugby section
const tlSplitGreat = gsap.timeline({
	onComplete: () => {
		SplitGreat.revert();
	},
});

const SplitGreat = new SplitText('.titleGreathorned', { type: 'words, chars' });
const chars = SplitGreat.chars;

tlSplitGreat.from(
	chars,
	{
		duration: 0.8,
		opacity: 0,
		y: 10,
		ease: 'circ.out',
		stagger: 0.02,
	},
	'+=0'
);

//Split text for tennis section
function setupSplits() {
	const tlSplitTennis = gsap.timeline();
	const SplitTennis = new SplitText('.titleBurrowing', {
		type: 'words, chars',
	});

	const chars = SplitTennis.chars;

	tlSplitTennis.from(
		chars,
		{
			duration: 0.8,
			opacity: 0,
			y: 10,
			ease: 'circ.out',
			stagger: 0.02,
			scrollTrigger: {
				trigger: '.titleBurrowing',
				start: 'top 75%',
				end: 'bottom center',
				scrub: 1,
			},
		},
		'+=0'
	);
}

ScrollTrigger.addEventListener('refresh', setupSplits);
setupSplits();
