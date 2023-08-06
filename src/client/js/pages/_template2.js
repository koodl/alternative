export const tagName = 'page-projects';
component(
	tagName,
	class PageProjects extends Component {
		// shadow = 'open'; // null, 'open', 'closed'
		title = 'Projects';
		constructor() {
			super();
			document.title = `{${this.title}}`;
			document.querySelector('meta[name="description"]').content = `{${this.title} page}`;
		}

		connectedCallback() {
			this.render(/*html*/ `
<style>
page-projects {
	display: block;
	padding: 0 1rem 2rem;
}
</style>

	<h1>{ ${this.title} Title }</h1>
	<p>{ ${this.title} Content }</p>
`);
		}
	}
);
