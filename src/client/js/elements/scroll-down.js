export const tagName = 'scroll-down';
component(
	tagName,
	class extends Component {

		static get observedAttributes() {
			return ['placeholder'];
		}

		shadow = 'open';

		constructor() {
			super();
		}

		attributeChangedCallback(name, oldValue, newValue) {
			this.render(this.code());
		}

		connectedCallback() {
			if (!this.hasAttribute('placeholder')) this.setAttribute('placeholder', 'Scroll down');
		}

		code() {
			return /*html*/ `
<style>
:host{
	position: relative;
	display: inline-flex;
	align-content: center;
	justify-content: center;
	width: fit-content;
}

.chevron {
	position: absolute;
	width: 28px;
	height: 8px;
	opacity: 0;
	transform: scale3d(0.5, 0.5, 0.5);
	animation: move 3s ease-out infinite;
}

.chevron:nth-child(2) {
	animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(3) {
	animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
	content: ' ';
	position: absolute;
	top: 0;
	height: 100%;
	width: 51%;
	background: var(--text-color);
}

.chevron:before {
	left: 0;
	transform: skew(0deg, 30deg);
}

.chevron:after {
	right: 0;
	width: 50%;
	transform: skew(0deg, -30deg);
}

@keyframes move {
	25% {
		opacity: 1;

	}
	33% {
		opacity: 1;
		transform: translateY(30px);
	}
	67% {
		opacity: 1;
		transform: translateY(40px);
	}
	100% {
		opacity: 0;
		transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
	}
}

.legend {
	display: inline-block;
	margin-top: 75px;
	font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
	font-size: 12px;
	color: var(--text-color);
	text-transform: uppercase;
	white-space: nowrap;
	opacity: .25;
	animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
	to {
		opacity: 1;
	}
}
</style>

	<div class="chevron"></div>
	<div class="chevron"></div>
	<div class="chevron"></div>
	<span class="legend">${this.getAttribute('placeholder')}</span>
`;
		}
	}
);
