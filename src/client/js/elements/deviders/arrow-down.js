export const tagName = 'arrow-down';
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
		display: block;
	}
</style>
<svg version="1.1" viewBox="0 0 338.67 25.4" xmlns="http://www.w3.org/2000/svg">
	<path d="m0 0h338.67l-175.19 25.4z"/>
</svg>
`;
		}
	}
);
