import '@ungap/custom-elements';
import './components/nav-link.js';
import './blocks/site-footer';


const template = document.createElement('template');
template.innerHTML = /*html*/ `
<style>
	body {
		max-width: 100vw;
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'JetBrains Mono', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		font-weight: 400;
		line-height: 1.4;
		color: var(--text-color);
		background-color: var(--body-color);
		scroll-behavior: smooth;
		-webkit-font-smoothing: subpixel-antialiased;
	}
	body.disabledscroll{
		height: 100vh;
		overflow: hidden;
	}
	nav[is="global-menu"]{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999991;
		display: grid;
		grid-template-columns: 1fr 5fr 1fr;
		grid-template-areas: 'left menu right';
		width: 100%;
		height: calc(100vh - calc(100vh - 100%));
		background: #fff;
		font-family: script;
		will-change: transform;
		animation: slide-out .5s 0s ease both, slide-reset .1s 0s linear both;
	}
	nav[is="global-menu"][fs]{
		-webkit-backface-visibilty:hidden;
		-webkit-perspective: 1000;
		will-change: transform;
		transform: translate3d(-100%,0,0);
		animation: slide-reset 0.1s 0s linear both;
	}
	nav[is="global-menu"][open]{
		will-change: transform;
		animation: slide-in .5s 0s ease both;
	}
	@keyframes slide-in {
		0% {transform: translate3d(-100%,0,0);}
		1% {transform: translate3d(-99.1%,0,0);}
		100% {ransform: translate3d(0%,0,0);}
	}
	@keyframes slide-out {
		from {transform: translate3d(0%,0,0);}
		to {transform: translate3d(100%,0,0);}
	}
	@keyframes slide-reset {
		to {ransform: translate3d(-100%,0,0);}
	}
	button#global-menu{
		position: fixed;
		bottom: 3.7vw;
		right: 3.7vw;
		z-index: 9999991;
		height: 2.5rem;
		width: 2.5rem;
		padding: 9.1px;
		background: #fff;
		border-radius: 50%;
		border: 1px solid #0003;
		outline: none;
		cursor: pointer;
		transition: border-color .5s cubic-bezier(.445,.05,.55,.95);
	}
	button#global-menu:hover{
		border: 1px solid #0006;
	}
	button#global-menu:before {
		content: 'МЕНЮ';
		position: absolute;
		top: 14px;
		right: calc(100% + 1rem);
		color: #000;
		font-size: 10px;
		font-weight: 800;
		letter-spacing: -.5px;
		line-height: 1;
		opacity: 0;
		outline: none;
		transition: opacity .25s cubic-bezier(.445,.05,.55,.95),transform .25s cubic-bezier(.215,.61,.355,1);
	}
	[is="global-menu"]:not([open])+button#global-menu:hover:before {
		opacity: 1;
	}
	button#global-menu:after {
		content: 'ЗАКРЫТЬ';
		position: absolute;
		top: 14px;
		right: calc(100% + 1rem);
		color: #000;
		font-size: 10px;
		font-weight: 800;
		letter-spacing: -.5px;
		line-height: 1;
		opacity: 0;
		outline: none;
		transition: opacity .25s cubic-bezier(.445,.05,.55,.95),transform .25s cubic-bezier(.215,.61,.355,1);
	}
	[is="global-menu"][open]+button#global-menu:hover:after {
		opacity: 1;
	}
	#global-menu div {
		width: 100%;
		height: 2px;
		margin: 0 0 4px;
		background: #000;
		border: none;
	}
	#global-menu div:last-child {
		margin:0;
	}
	[is="global-menu"][open]+#global-menu div{
		margin: 0;
		transform: rotate(45deg);
	}
	[is="global-menu"][open]+#global-menu div:last-child{
		margin-top: -2px;
		transform: rotate(-45deg);
	}
	#menu {
		grid-area: menu;
		display: grid;
		align-content: space-evenly;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 10vh 0 14vh;
		color: #111;
	}
	#menu a{
		display: block;
		position: relative;
		width: fit-content;
		font-size: 4.1vh;
		color: #111;
	}
	#menu a:hover{
		text-decoration: none;
	}
	#menu .title{
		display: block;
		position: relative;
		width: fit-content;
	}
	#menu .title:before {
		content: ' ';
		position: absolute;
		top: 60%;
		left: 0;
		z-index: -2;
		height: 100%;
		width: 100%;
		background: url(/resources/img/underline.png) no-repeat;
		background-position: center;
		background-size: 100% 28%;
	}
	#menu a.active:not(:hover) .title:before {
		opacity: .5;
	}
	#menu .active .title:after {
		transition: .5s ease;
		transform: scaleX(0);
	}
	#menu .title:after {
		content: ' ';
		position: absolute;
		top: 60%;
		right: 0;
		z-index: -1;
		height: 100%;
		width: 100%;
		background: #fff;
		transform-origin: right;
		transition: none;
	}
	#menu a:hover .title:after {
		transition: .5s ease;
		transform: scaleX(0);
	}
	#menu .description {
		margin: 1.5rem 0;
		font-family: blockquote, 'Times New Roman', serif;
		font-weight: 100;
		font-size: 12px;
		text-transform: uppercase;
	}
	main {
		width: 100%;
	}
</style>

<nav is="global-menu" fs>
	<div id="menu">
		<a href="/" is="nav-link"><div class="title">Главная страница</div> <div class="description">Основное сообщение нашим клиентам</div></a>
		<a href="/about" is="nav-link"><div class="title">О магазине</div> <div class="description">Миссия и ценности</div></a>
		<a href="/brands" is="nav-link"><div class="title">Галерея брендов</div> <div class="description">Список брендов с описанием</div></a>
		<a href="/faq" is="nav-link"><div class="title">Часто задаваемые вопросы</div> <div class="description">Ответы на вопросы наших клиентов</div></a>
		<a href="/contacts" is="nav-link"><div class="title">Контакты</div> <div class="description">Адрес и время работы магазина, и другие контакты</div></a>
	</div>
</nav>

<button id="global-menu" onclick="document.querySelector('body[is=w-app]').toggleMenu();" title="МЕНЮ">
	<div></div>
	<div></div>
</button>

<main></main>

`;

class App extends HTMLBodyElement {
	constructor() {
		super();

		this.init = true;
		this.pages = [];
		this.hostname = new URL(location.href).hostname;
		this.toNodes = (xhtml) => new DOMParser().parseFromString(xhtml, 'application/xhtml+xml');
		// this.clickHandler = this.clickHandler.bind(this);

		window.onpopstate = function (e) {
			if (e.state) {
				document.body.loadPage(new URL(location.href).pathname, true);
				// m.innerHTML = e.state.html;
				document.title = e.state.pageTitle;
			}
		};
	}

	async loadPage(urlPath, history = false) {
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

		if (!history) this.addPageToHistory(urlPath);

		document.querySelectorAll('a[is="nav-link"]').forEach((el) => {
			el.classList.remove('active');
			if (el.href == location.href) {
				el.classList.add('active');
			}
		});
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

	toggleMenu() {
		document.querySelector('nav[is=global-menu]').toggleAttribute('open');
		document.querySelector('body').classList.toggle('disabledscroll');
		if (!document.querySelector('nav[is=global-menu]').hasAttribute('fs'))
			document.querySelector('nav[is=global-menu]').toggleAttribute('closed');
		if (document.querySelector('nav[is=global-menu]').hasAttribute('fs')) {
			document.querySelector('nav[is=global-menu]').removeAttribute('fs');
		}
	}

	connectedCallback() {
		this.innerHTML = '';
		this.appendChild(template.content.cloneNode(true));
		this.loadPage(new URL(location.href).pathname);
	}
}

customElements.get('w-app') || customElements.define('w-app', App, { extends: 'body' });


