export const tagName = 'custom-details';
component(
	tagName,
	class extends Component {

		constructor() {
			super();
		}


		connectedCallback() {

			this.querySelector('.summary').addEventListener('click', (e) => {
				e.target.parentElement.toggleAttribute('open');
				var panel = e.target.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + 'px';
				} 
			});

		}

	}
);
