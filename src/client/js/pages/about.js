const template = document.createElement('template');
template.innerHTML = /*html*/ `
<style>
page-about {
	display: block;
	padding: 0;
	text-align: center;
}
#about{
	display: grid;
	grid-template-rows: 0fr 0fr 0fr 5fr;
	align-items: start;
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

.content{
	width: 100%;
	max-width: 720px;
	height: fit-content;
	margin: 1rem auto 5rem;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'JetBrains Mono', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	font-weight: 400;
}
.content p{
	margin-top: .5rem;
	font-size: 1.25rem;
	font-weight: 200;
	text-align: justify;
}
.content p:first-letter {
	margin-left: 2rem;
}

.video {
	width: 100%;
	max-width: 720px;
	height: fit-content;
	margin: 1rem auto 5rem;
}
.video video {
	max-width: 100%;
	max-width: min(100%, 96vw);
	background: url('https://alternative.by/resources/img/picture-frame.webp');
  background-size: 100% 100%;
  padding: 30px;
}

@media only screen and (max-width: 640px) {
	.video video {
		padding: 12px;
	}
}
</style>



<section id="about">

	<a href="/" is="nav-link" class="logo"><h1>АЛЬТЕРНАТИВА<br /><div class="shop">МАГАЗИН ОДЕЖДЫ</div></h1></a>
	

	<div style="min-height: 2rem;"></div>

	<h1 class="title">О магазине</h1>

	<div class="content">
		<p>«Альтернатива» — это не просто магазин одежды, а союз людей, любящих преображение, эксперименты и постоянное совершенствование себя. 
		<p>Наша миссия — помочь каждому человеку найти своей стиль, помогающий полноценно отобразить его многогранный внутренний мир, через постоянные эксперименты со своим образом.</p>
		<p>Альтернатива — это то место, где Вы сможете выразить себя через моду и дизайн, а также всегда выбрать приемлемый к Вашему образу жизни стиль в одежде.</p>
		<p>Наша цель - демократизировать качество Вашего гардероба с помощью широко доступных, хорошо сделанных вещей всемирно известных брендов. Мода и стиль теперь доступны для каждого!</p>
		<p>Каждую неделю мы пополняем наш магазин новинками, которые отбираем у лучших и надежных поставщиков одежды из Европы и ОАЭ. Подробные обзоры поступления Вы всегда можете увидеть в нашем <a href="https://www.instagram.com/alternative_by/" rel="nofollow" target="_blank">инстаграм</a>.</p>
		<p>Экспериментируй, будь разной, люби себя, выбирай лучшее и непременно меняйся!</p>
	</div>

	<div class="video">
		<video src="/resources/video/alternative.mp4" controls></video>
	</div>
	

</section>


<footer is="site-footer"></footer>


`;

class PageAbout extends HTMLElement {
	constructor() {
		super();

		document.title = 'О магазине — АЛЬТЕРНАТИВА — магазин одежды из Европы, США, ОАЭ';
		document.querySelector('meta[name="description"]').content =
			'Информация о магазине одежды из Европы и США "АЛЬТЕРНАТИВА". Миссия и цель магазина.';
	}

	connectedCallback() {
		this.appendChild(template.content.cloneNode(true));
	}
}

export const tagName = 'page-about';
customElements.get(tagName) || customElements.define(tagName, PageAbout);
