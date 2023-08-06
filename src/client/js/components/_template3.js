export const tagName = 'global-menu';
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
:host{
	display: grid;
	width: 100%;
	height: 100%;
}
</style>


<div>
</div>

`;
		}
	}
);
