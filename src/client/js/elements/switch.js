export const tagName = 'toggler-switch';
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
:host .switch{
	position: relative;
	display: inline-block;
	width: 48px;
	height: 24px;
}
:host .switch:hover{
	curson: pointer;
}
:host input {
	opacity: 0;
	width: 0;
	height: 0;
}
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fff;
	background-color: var(--body-color);
	border-radius: 12px;
	box-shadow: inset 1px 1px 8px rgb(0 0 0 / 10%);
	transition: .4s;
}
.slider:before {
	position: absolute;
	content: "";
	height: 22px;
	width: 22px;
	left: 1px;
	bottom: 1px;
	background-color: white;
	border-radius: 50%;
	box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
	transition: .4s;
}
:host{
	box-shadow: none !important;
	background-image: none !important;
}
:host(.glass) .slider{
	background-color: #f1f1f1;
	background-color: var(--body-color);
	background-image: linear-gradient( to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 49%, rgba(255, 255, 255, 0) 51%, rgba(255, 255, 255, 0.2) 100% );
  box-shadow: inset 1px 1px 3px rgb(0 0 0 / 10%);
}
:host(.glass) .slider:before{
	height: 20px;
	width: 20px;
	box-shadow: inset -1px -1px 3px rgb(0 0 0 / 10%);
  border: 1px solid rgb(255 255 255 / 100%);
  background: #fff;
}
:host input:checked + .slider {
	background-color: #2196F3;
}
:host input:checked + .slider:before {
	transform: translateX(24px);
}

@media (prefers-color-scheme: dark) {
	:host .slider{
		box-shadow: inset 1px 1px 3px rgb(0 0 0 / 70%);
	}
	:host(.glass) .slider{
		box-shadow: inset 1px 1px 3px rgb(0 0 0 / 70%);
	}
}
</style>

<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>
`;
		}
	}
);
