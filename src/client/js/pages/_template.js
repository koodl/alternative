class PageAbout extends HTMLElement {
	constructor() {
		super();

		document.title = '{About}';
		document.querySelector('meta[name="description"]').content = '{About page}';

		this.template = document.createElement('template');
		this.template.innerHTML = /*html*/ `
			<h1>{About Title}</h1>
			<p>{About Content}</p>
		`;
		// alert('{About Alert}');
	}

	connectedCallback() {
		this.appendChild(this.template.content.cloneNode(true));
	}
}

customElements.get('page-about') || customElements.define('page-about', PageAbout);
export const tagName = 'page-about';
