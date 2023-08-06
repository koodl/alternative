import 'https://rawcdn.githack.com/flackr/scroll-timeline/94866999efe41b3ccba846be7ed37c9313dd880e/dist/scroll-timeline.js';

export const tagName = 'scroll-progress';
component(
	tagName,
	class extends Component {
		shadow = 'open';

		constructor() {
			super();
		}

		connectedCallback() {
			this.render(this.code());

			const myScrollTimeline = new ScrollTimeline({
				source: document.scrollingElement,
				scrollSource: document.scrollingElement, // For legacy implementations
				orientation: 'block',
				scrollOffsets: [new CSSUnitValue(0, 'percent'), new CSSUnitValue(100, 'percent')],
			});
			// Animate Progress Bar on Scroll
			new Animation(
				new KeyframeEffect(
					this,
					{
						transform: ['scaleX(0)', 'scaleX(1)'],
					},
					{ duration: 1, fill: 'forwards' }
				),
				myScrollTimeline
			).play();
		}

		code() {
			return /*html*/ `
<style>
:host {
	position: fixed;
	z-index: 10;
	left: 0;
	top: 0;
	display: block;
	width: 100%;
	height: 2px;
	transform-origin: 0 50%;
	transform: scaleX(0);
	background: #0af;
}
</style>
`;
		}
		
	}
);
