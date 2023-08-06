const template = document.createElement('template');
template.innerHTML = /*html*/ ``;

class NavLink extends HTMLAnchorElement {
	constructor() {
		super();

		this.pages = [];
		this.hostname = new URL(location.href).hostname;
		this.toNodes = (xhtml) => new DOMParser().parseFromString(xhtml, 'application/xhtml+xml');
		this.clickHandler = this.clickHandler.bind(this);
	}

	async loadPage(urlPath) {
		if (!urlPath || urlPath === '/' || urlPath === '/index.html') urlPath = '/index';

		if (!this.pages[urlPath]) {
			this.pages[urlPath] = await import(`./pages${urlPath}.js`)
				.then((module) => {
					document.querySelector('main').innerHTML = `<${module.tagName} />`;
					return module;
				})
				.catch((err) => {
					console.log(err);
					location.href = '/404';
					// l.href = `${urlPath}`;
				});
		} else {
			document.querySelector('main').innerHTML = `<${this.pages[urlPath].tagName} />`;
		}

		this.addPageToHistory(urlPath);
	}

	addPageToHistory(urlPath) {
		let stateURL = urlPath == '/index' ? '/' : urlPath;
		let stateObj = { html: document.querySelector('main').innerHTML, pageTitle: document.title, url: stateURL };

		if (this.init) {
			history.replaceState(stateObj, '', stateURL);
			this.init = false;
		} else {
			history.pushState(stateObj, '', stateURL);
		}
	}

	clickHandler(e) {
		if (this.hostname === new URL(e.currentTarget.href).hostname) {
			e.preventDefault();
			e.stopPropagation();
			//m.innerHTML = `<loading-bg />`;
			document.querySelector('body').loadPage(new URL(e.currentTarget.href).pathname);
			document.body.classList.remove('disabledscroll');
			document.querySelector('nav[is="global-menu"]').removeAttribute('open');
			document.querySelectorAll('nav[is="global-menu"] a').forEach(el => {
				el.classList.remove('active');
				if (el.href == e.currentTarget.href) {
					el.classList.add('active');
				}
			});
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		} else {
			return true;
		}
	}

	connectedCallback() {

		this.classList.remove('active');
		if (this.href == location.href) {
			this.classList.add('active');
		}
		this.removeEventListener('click', this.clickHandler, true);
		this.addEventListener('click', this.clickHandler);
		
	}
}

customElements.get('nav-link') || customElements.define('nav-link', NavLink, { extends: 'a' });
