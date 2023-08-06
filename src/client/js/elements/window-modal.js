export const tagName = 'window-modal';
component(
	tagName,
	class extends Component {
		static get observedAttributes() {
			return ['modal-title'];
		}

		shadow = 'open';

		constructor() {
			super();
			self = this;
			if (!window.openModal) {
				window.openModal = (id) => {
					// this.toggleAttribute('open');
					// self.toggleAttribute('open');
					document.querySelector(id).toggleAttribute('open');
					document.body.classList.toggle('overflow-hidden');
				};
			}
		}

		attributeChangedCallback(name, oldValue, newValue) {
			this.render(this.code());
		}

		connectedCallback() {
			this.render(this.code());
			// this.shadowRoot.querySelector('.close').addEventListener('click', () => {
			// 	this.toggleAttribute('open');
			// 	document.body.classList.toggle('overflow-hidden');
			// });
			this.addEventListener('click', (e) => {
				if (e.target.tagName != 'WINDOW-MODAL' || e.target.classList.contains('.close')) return true;
				this.toggleAttribute('open');
				document.body.classList.toggle('overflow-hidden');
			});
		}

		code() {
			return /*html*/ `
<style>
:host{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999999999;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	height: 100vh;
	width: 100vw;
	background: rgba(255, 255, 255, .8);
	backdrop-filter: blur(3px);
}
:host([open]){
	display: flex;
}
:host(:not([open])){
	display: none;
}
.modal{
	position: relative;
	width: 38.2%;
	min-height: 256px;
	margin-bottom: 5%;
	padding: 0;
	background: #fff;
	border-radius: 2px;
	box-shadow: 20px 20px 60px rgb(0 0 0 / 40%);
}
.header{
	display: grid;
	grid-template-columns: 4fr 32px;
	align-content: stretch;
	justify-content: space-between;
	align-items: stretch;
	justify-items: stretch;
	height: 32px;
	border-bottom: 1px solid #eee;
}
.title{
	font-size: 20px;
	font-weight: 300;
	line-height: 32px;
	margin-left: 32px;
}
.close{
	display: flex;
	align-content: center;
	justify-content: center;
	align-items: center;
	height: 32px;
	border: 0;
	outline: none;
	background: inherit;
	cursor: pointer;
}
.close svg{
	height: 24px;
}
.close:hover svg{
	fill: #007bfc;
}
::slotted(form){
	padding: 24px 32px;
}
</style>

<div class="modal">
	<div class="header">
		<div class="title">${this.getAttribute('modal-title')}</div>
		<button class="close" title="Закрыть">
			<svg version="1.1" viewBox="0 0 4.2333 4.2333" xmlns="http://www.w3.org/2000/svg">
				<path d="m0 .26458.26458-.26458 3.9687 3.9688-.26458.26458z"/><path d="m3.9688 0 .26458.26458-3.9687 3.9687-.26458-.26458z"/>
			</svg>
		</button>
	</div>
	<slot></slot>
</div>
`;
		}
	}
);
