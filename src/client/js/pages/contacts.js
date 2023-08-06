const template = document.createElement('template');
template.innerHTML = /*html*/ `
<style>
page-contacts {
	display: block;
	padding: 0;
	text-align: center;
}
#contacts{
	display: grid;
	grid-template-rows: 0fr 0fr 0fr 0fr 1fr;
	margin:0;
	padding:3vw 3.7vw calc(3.7vw + 46px) 3.7vw;
	width: 100%;
	min-height: 100vh;
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
	color: #00000089;
}
#social-mail{
	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	justify-content: space-between;
	align-content: center;
	margin: 1rem 0;
	text-transform: uppercase;
	font-weight: 300;
}
#social-mail a{
	color: #000;
}
#map iframe{
	width: 100%;
	height: 600px;
}
.info{
	font-size: 12px;
	color:#0008;
}



@media screen and (max-width: 720px) {
	#social-mail {
		grid-template-columns:1fr;
		grid-template-rows: 1fr 1fr 1fr;
	}
	#map iframe{
		width: 100%;
		height: 50vh;
	}
}
</style>



<section id="contacts">

	<a href="/" is="nav-link" class="logo"><h1>АЛЬТЕРНАТИВА<br /><div class="shop">МАГАЗИН ОДЕЖДЫ</div></h1></a>
	

	<div style="min-height: 2rem;"></div>

	<h1 class="title">Контакты</h1>

	<div id="social-mail">
		<div>Адрес: <a href="https://yandex.by/maps/-/CCUVA-cNWA" target="_blank" rel="nofollow">улица Петра Мстиславца, 4</a></div>
		<div>Социальные сети: <a href="https://www.instagram.com/alternative_by/" target="_blank">Инстаграм</a> & <a href="https://www.facebook.com/alternative.minsk" target="_blank">Фэйсбук</a></div>
		<div>Почта: <a href="mailto:mail@alternative.by">mail@alternative.by</a></div>
	</div>

	
	<div id="map">
		<div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps/org/alternativa/194116689953/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;" rel="nofollow">Альтернатива</a><a href="https://yandex.by/maps/157/minsk/category/clothing_store/184107943/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;" rel="nofollow">Магазин одежды в Минске</a><a href="https://yandex.by/maps/157/minsk/category/children_clothing_store/184107248/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;" rel="nofollow">Магазин детской одежды в Минске</a><iframe src="https://yandex.by/map-widget/v1/-/CCURvPQlsB" frameborder="0" allowfullscreen="true" style="position:relative;filter:grayscale(1);" title="Магазин одежды Альтернатива на Яндекс Картах"></iframe></div>
	</div>

	<!--div class="info">
		ИП Стемплевская Анна Тадеушевна, УНП 692205522, Св-во о гос.регистрации выдано Минским райисполкомом 13 июня 2022г., Магазин "Секонд-хенд"
	</div-->
</section>


<footer is="site-footer"></footer>

`;

class PageContacts extends HTMLElement {
	constructor() {
		super();

		document.title = 'Контакты — АЛЬТЕРНАТИВА — магазин одежды из Европы, США, ОАЭ';
		document.querySelector('meta[name="description"]').content =
			'Адрес: улица Петра Мстиславца, 4. Социальные сети: Инстаграм (alternative_by) & Фэйсбук (alternative.minsk). Почта: mail@alternative.by';
	}

	connectedCallback() {
		this.appendChild(template.content.cloneNode(true));
	}
}

export const tagName = 'page-contacts';
customElements.get(tagName) || customElements.define(tagName, PageContacts);
