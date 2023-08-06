import './../components/custom-details.js';

const template = document.createElement('template');
template.innerHTML = /*html*/ `
<style>
page-faq {
	display: block;
	padding: 0;
	text-align: center;
}
#faq{
	display: grid;
	grid-template-rows: 0fr 0fr 0fr 1fr;
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
	color: #00000089;
}

.faqlist {
	width: 100%;
	max-width: 720px;
	height: fit-content;
	margin: 1rem auto 5rem;
	border: 1px solid #ddd;
	border-radius: .5rem;
}

custom-details{
	display: block;
	border-bottom: 1px solid #ddd;
}
custom-details:last-child{
	border-bottom: none;
}
custom-details .summary{
	position: relative;
	width: 100%;
	cursor: pointer;
	user-select: none;
	padding: 1rem 3rem 1rem 1rem;
	text-align: left;
}
custom-details .summary:after {
	content: ' ❯';
	content:'';
	position: absolute;
	right: 1rem;
	display: inline-block;
	height:1.25rem;
	width:1.25rem;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
	font-family: "Times","Times New Roman",Serif,sans-serif;
	font-size: 1rem;
	line-height: 1.54;
	color:#aaa;
	transition:.5s ease;
}
custom-details[open] .summary:after {
	transform: rotate(180deg)
}
custom-details .summary:hover:after {
	color: #000;
}
custom-details .content{
	width: 100%;
	max-height: 0;
	padding:0;
	overflow: hidden;
	font-weight: 320;
	transition: max-height .5s ease-out;
}
custom-details .content p{
	padding: 1rem;
	text-align: left;
	border-top: 1px solid #eee;
}


</style>



<section id="faq">

	<a href="/" is="nav-link" class="logo"><h1>АЛЬТЕРНАТИВА<br /><div class="shop">МАГАЗИН ОДЕЖДЫ</div></h1></a>
	

	<div style="min-height: 2rem;"></div>

	<h1 class="title">Часто задаваемые вопросы</h1>


	<div class="faqlist">
		<custom-details>
			<div class="summary">Какие бренды можно встретить в вашем магазине?</div>
			<div class="content"><p>Основные бренды мы собрали в нашей галереи, но мы никогда не останавливаемся в поиске новых и интересных вещей. Перечень основных брендов можно посмотреть в <a href="/brands" is="nav-link">галереи брендов</a>.</p></div>
		</custom-details>
		<custom-details>
			<div class="summary">Есть ли обмен и возврат товара?</div>
			<div class="content"><p>Нет, такой возможности нет.</p></div>
		</custom-details>
		<custom-details>
			<div class="summary">Работаете ли вы с почтой? Стоимость доставки.</div>
			<div class="content"><p>Да, отправляем Европочтой и Белпочтой по всей Беларуси. Обязательна 100% предоплата. Стоимость доставки при покупке до 100 руб - 5 рублей, при покупке более 100 руб - бесплатно. Для заказа свяжитесь с нами в <a href="https://www.instagram.com/alternative_by/" target="_blank">инстаграм</a>. Не работаем с наложенным платежом.</p></div>
		</custom-details>

		<custom-details>
			<div class="summary">Откладываете ли вы вещи?</div>
			<div class="content"><p>Мы понимаем, что у нас штучный товар, который порой сложно быстро доехать и купить, а время на дорогу не вернуть. Для этого мы можем по Вашей просьбе отложить вещь (но не более 2-х штук) на 1 час, чтобы вам хватило время на дорогу к нам.<br /> <i>ВАЖНО! В день привоза, к сожалению, у нас нет возможности отложить вещи из нового поступления.</i></p></div>
		</custom-details>
		<custom-details>
			<div class="summary">Можно ли оплатить картой?</div>
			<div class="content"><p>Да, конечно. Мы принимаем платежи как наличными, так и через терминал. Кстати, наш терминал легко принимает платежи не только по картам, но и смартфонам. Для этого в кассе есть магнитный и бесконтактный карт-ридер, а также считыватель смарт-карт, чтобы принимать платежи через Apple Pay, Samsung Pay, Yandex Pay, Кошелёк Pay.</p></div>
		</custom-details>
		<custom-details>
			<div class="summary">Где можно посмотреть актуальный ассортимент вещей?</div>
			<div class="content"><p>В нашем <a href="https://www.instagram.com/alternative_by/" target="_blank">инстаграм</a>. Мы всегда снимаем видео обзоры наших поступлений. Также вы всегда можете в личных сообщениях уточнить наличие и стоимость вещей. Мы всегда рады вам помочь.</p></div>
		</custom-details>
	</div>



</section>


<footer is="site-footer"></footer>

`;

class PageFAQ extends HTMLElement {
	constructor() {
		super();

		document.title = 'Часто задаваемые вопросы — АЛЬТЕРНАТИВА — магазин одежды из Европы, США, ОАЭ';
		document.querySelector('meta[name="description"]').content = 'Ответы на часто задаваемые вопросы клиентами о товаре, доставке, оплате, ...';
	}

	connectedCallback() {
		this.appendChild(template.content.cloneNode(true));
	}
}

export const tagName = 'page-faq';
customElements.get(tagName) || customElements.define(tagName, PageFAQ);
