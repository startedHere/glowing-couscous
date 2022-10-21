const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');

const timeLine = gsap.timeline({ defaults: { duration: 1 } });

//! Elastic Line
const start =
	'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512';
const end =
	'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512';

//! Initializing Elastic Effect
containers.forEach(container => {
	const input = container.querySelector('.input');
	const line = container.querySelector('.elastic-line');
	const placeholder = container.querySelector('.placeholder');

	input.addEventListener('click', () => {
		//_ Check For Empty Input Box
		if (!input.value) {
			timeLine.fromTo(
				line,
				{ attr: { d: start } },
				{ attr: { d: end }, ease: 'Power2.easeOut', duration: 0.75 }
			);

			timeLine.to(
				line,
				{
					attr: { d: start },
					ease: 'elastic.out(3,0.5)',
				},
				'<20%'
			);

			//_ Placeholder Shift Up
			timeLine.to(
				placeholder,
				{
					top: -15,
					left: 0,
					scale: 0.7,
					duration: 0.5,
					ease: 'Power2.easeOut',
				},
				'<5%'
			);
		}
	});
});

const startedHH = 'James';
console.log(startedHH);
console.log(startedHH);
console.log(startedHH);
