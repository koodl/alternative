export const tagName = 'wd-modal';
component(
	tagName,
	class extends Component {
		shadow = 'open';

		constructor() {
			super();

			window.showModal = (id) => {
				document.getElementById(id).toggleAttribute('open');
			}
		}

		connectedCallback() {
			this.render(this.code());

			this.shadowRoot.querySelector('.close').addEventListener('click', (e) => this.toggleAttribute('open'));
			this.shadowRoot.querySelector('.background').addEventListener('click', (e) => this.toggleAttribute('open'));

		}

		code() {
			return /*html*/ `
<style>
:host{
	display: none;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index:91;
	width: 100%;
	height: 100%;
	margin: auto;
	background: #fff;
}
:host([open]){
	display: block;
}
button {
	position: absolute;
	top: .5rem;
	right: .5rem;
	padding: .5rem;
	background: none;
	border: none;
	color: #000;
	font-size: 1.5rem;
	line-height: 1;
	cursor: pointer;
	transition:.5s ease;
}
button:hover {
	transform: scale(1.2);
}
.background{
	position:fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index:-1;
	width: 100%;
	height: 100%;
	background: #fff0;
}
</style>


<slot></slot>
<button class="close" title="Закрыть окно">╳</button>
<div class="background"></div>

`;
		}
	}
);
