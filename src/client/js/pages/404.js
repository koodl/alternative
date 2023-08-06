const template = document.createElement('template');
template.innerHTML = /*html*/ `
<style>
page-404 {
	display: block;
	padding: 0;
	text-align: center;
}
#e404{
	display: grid;
	grid-template-rows: 0fr 0fr 0fr 0fr;
	margin:0;
	padding:3vw 3.7vw calc(3.7vw + 46px) 3.7vw;
	width: 100%;
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



<section id="e404">

	<a href="/" is="nav-link" class="logo"><h1>АЛЬТЕРНАТИВА<br /><div class="shop">МАГАЗИН ОДЕЖДЫ</div></h1></a>
	

	<div style="min-height: 2rem;"></div>

	<h1 class="title">Ошибка 404</h1>

	<h2>Запрашиваемая вами страница не существует или была удалена. Пожалуйста, попробуйте найти необходимую информацию через меню сайта.</h2>
	

</section>


<footer is="site-footer"></footer>


`;

class Page404 extends HTMLElement {
	constructor() {
		super();

		document.title = 'Ошибка 404 — АЛЬТЕРНАТИВА — магазин одежды из Европы, США, ОАЭ';
		document.querySelector('meta[name="description"]').content = '';
	}

	connectedCallback() {
		this.appendChild(template.content.cloneNode(true));
	}
}

export const tagName = 'page-404';
customElements.get(tagName) || customElements.define(tagName, Page404);
