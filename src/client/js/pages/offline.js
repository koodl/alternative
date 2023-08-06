const template = document.createElement('template');
template.innerHTML = /*html*/ `
<style>
page-offline {
	display: block;
	padding: 0;
	text-align: center;
}
#offline{
	display: grid;
	grid-template-rows: 0fr 0fr 5fr;
	margin:0;
	padding:3vw 3.7vw calc(3.7vw + 46px) 3.7vw;
	width: 100%;
	height: 100vh;
}
h1{
	font-family: sans-serif;
	font-size: 20px;
	font-weight: 300;
}
h1.title{
	font-family: script;
	font-size: 2.5rem;
	margin-bottom: 1.4rem;
}
.shop {
	font-family: blockquote, 'Times New Roman', serif;
	font-size: 16px;
	color: #0005;
}


</style>



<section id="offline">

	<a href="/" is="nav-link" class="logo"><h1>АЛЬТЕРНАТИВА<br /><div class="shop">МАГАЗИН ОДЕЖДЫ</div></h1></a>
	

	<div style="min-height: 2rem;"></div>

	<h1 class="title">Нет подключения к сети</h1>

	<h2>Пожалуйста, подключите устройство к сети и обновите страницу</h2>

	

</section>


<footer is="site-footer"></footer>


`;

class PageOffline extends HTMLElement {
	constructor() {
		super();

		document.title = 'Не в сети — АЛЬТЕРНАТИВА — магазин одежды из Европы, США, ОАЭ';
		document.querySelector('meta[name="description"]').content = '';
	}

	connectedCallback() {
		this.appendChild(template.content.cloneNode(true));
	}
}

export const tagName = 'page-offline';
customElements.get(tagName) || customElements.define(tagName, PageOffline);
