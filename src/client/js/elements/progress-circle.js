export const tagName = 'progress-circle';
component(
	tagName,
	class extends Component {
		static get observedAttributes() {
			return ['size', 'value', 'strokeWidth'];
		}

		shadow = 'open';
		size = 64;

		constructor() {
			super();
			if (!this.hasAttribute('value')) this.setAttribute('value', '0');
			this.value = this.getAttribute('value');
			if (!this.hasAttribute('size') || this.getAttribute('size') < 16) this.setAttribute('size', 64);
			this.size = this.getAttribute('size');
			if (!this.hasAttribute('legend')) this.setAttribute('legend', '');
			this.legend = this.getAttribute('legend');
			if (!this.hasAttribute('strokeWidth')) this.setAttribute('strokeWidth', 1);
			this.strokeWidth = this.getAttribute('strokeWidth');
		}

		connectedCallback() {
			//this.render(this.code());
		}

		attributeChangedCallback(name, oldValue, newValue) {
			this[name] = newValue;
			this.render(this.code());
		}

		code() {
			return /*html*/ `
<style>
:host{
	display: inline-block;
	width: min-content;
	height: min-content;
	font-size: 36px;
	color: #fff;
	text-align: center;
}
:host(.visible)>div span{
	animation: counter 1.2s both 1 cubic-bezier(1, 1.14, 0.03, 0.81);
}
:host>div{
	position: relative;
	display: grid;
  place-content: center;
}
:host span{
	counter-reset: number var(--integer);
	position: absolute;
	left: 50%;
	top: 48%;
	transform: translate(-50%,-50%);
	color: var(--text-color);
	font-size: 1.4rem;
}
:host span:before {
	content: counter(number);
}
:host(.percent) span:after {
  content: '%';
	position: absolute;
	top: 28%;
	font-size: 50%;
}
div[part="legend"] {
	color: var(--text-color);
	font-size: 1rem;
	line-height: 1.4rem;
}
:host circle:nth-child(2){
	stroke-dasharray: 100 100;
	stroke-dashoffset: 100;
	stroke-position: inside;
	stroke-linejoin: round;
	stroke-linecap: round;
}
:host(.visible) circle:nth-child(2){
	stroke-dasharray: 100 100;
	stroke-dashoffset: 100;
	stroke-position: inside;
	stroke-linejoin: round;
	stroke-linecap: round;
	animation: 1.2s ease 1 normal forwards running donut-show-0;
}
@keyframes donut-show-0 {
	100% { stroke-dashoffset: ${100 - this.value}; }
}
svg{
	display: block;
	width: ${this.size}px;
	height: ${this.size}px;
	transform: rotate(-90deg);
	overflow: initial;
}
circle{
	stroke-width: ${this.strokeWidth};
	fill:none;
}
circle:nth-child(1){ stroke: #eee }
circle:nth-child(2){
	stroke: #09f;
	position: relative;
	z-index: 1;
}
@keyframes counter {
	from {
		--integer: 0;
	}
	to {
		--integer: ${this.value};
	}
}
</style>


<div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
		<circle cx="16" cy="16" r="15.9155" />
		<circle cx="16" cy="16" r="15.9155" />
	</svg>
	<span></span>
</div>
${this.legend ? `<div part="legend">${this.legend}</div>` : ''}
`;
		}
	}
);
;
