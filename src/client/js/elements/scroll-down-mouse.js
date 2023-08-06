export const tagName = 'scroll-down-mouse';
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
:host {
	position: relative;
	display: inline-block;
	width: 40px;
	height: 70px;
	box-shadow: inset 0 0 0 1px var(--text-color);
	border-radius: 25px;
}
:host:before {
	position: absolute;
	left: 50%;
	content: '';
	width: 8px;
	height: 8px;
	background: var(--text-color);
	margin-left: -4px;
	top: 8px;
	border-radius: 4px;
		animation-duration: 1.5s;
		animation-iteration-count: infinite;
		animation-name: scroll;
}
@-webkit-keyframes scroll {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: translateY(46px);
	}
}
@keyframes scroll {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: translateY(46px);
	}
}

</style>
`;
		}
	}
);
