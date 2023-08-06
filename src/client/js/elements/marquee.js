export const tagName = 'text-marquee';
component(
	tagName,
	class extends Component {
		shadow = 'open';

		constructor() {
			super();
		}

		connectedCallback() {
			this.render(this.code());
		}

		code() {
			return /*html*/ `
<style>
:host {
	display: inline-block;
  overflow: hidden;
}
div {
	position: relative;
	display: inline-block;
	padding:0 22px;
	white-space: nowrap;
	animation: marquee 4s linear infinite;
}
div:after {
	content:attr(data-text);
	position: absolute;
	left: 100%;
	padding: 0 23px;
	white-space: nowrap;
}

@keyframes marquee {
	0% {
		transform: translate3d(0,0,0)
	}
	100% {
		transform: translate3d(-100%,0,0)
	}
}

</style>


<div data-text="${this.innerHTML}"><slot></slot></div>

`;
		}
	}
);
