const template = document.createElement('template');
template.innerHTML = /*html*/ `
<style>
page-index {
	display: block;
	padding: 0;
	text-align: center;
	max-width: 100vw;
}
#quote{
	display: grid;
	margin:0;
	padding:3vw 3.7vw 3.7vw 3.7vw;
	width: 100%;
	min-height: 100vh;
	max-width: 100vw;
	box-sizing: border-box;
}
h1{
	font-family: sans-serif;
	font-size: 20px;
	font-weight: 300;
}
.shop {
	font-family: blockquote, 'Times New Roman', serif;
	font-size: 16px;
	color: #00000089;
}
blockquote{
	align-self: center;
	font-family: blockquote, 'Times New Roman', serif;
	font-size: 24px;
	font-size: clamp(1.25rem, 3.2vw, 24px);
	font-weight: 100;
	line-height: 1.5;
	text-transform: uppercase;
}
.divider{
	margin: 4px;
	border:0;
	background: #ffff;
}
#signature, #signature video{
	min-height: 172px;
	max-height: 30vh;
	max-width: 100vw;
	z-index: 1;
}
#signature video{
	max-width: 94vw;
	margin: 0 auto;
	border:0;
	outline: none;
	-webkit-mask-image: -webkit-radial-gradient(white, black);
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
}
#buttons{
	align-self: end;
}
#buttons * {
	min-width: 226px;
}
#buttons button{
	padding: 1rem 2rem;
	font-weight: 200;
	background-color: #000;
	border-color: #ddd;
	border-radius: 2px;
	transition: transform 1.25s cubic-bezier(.215,.61,.355,1) .5s,border-color .5s cubic-bezier(.445,.05,.55,.95);
}
#buttons button:hover{
	border-color: #000;
}
button#brands {
	color: #000;
	background: #fff;
}
a#brands{
	display: inline-block;
	margin: 1rem 0 0 1rem;
	padding: 1rem 2rem;
	font-weight: 200;
	color: #000;
	background: #fff;
	border: 1px solid #ddd;
	border-radius: 2px;
	transition: transform 1.25s cubic-bezier(.215,.61,.355,1) .5s,border-color .5s cubic-bezier(.445,.05,.55,.95);
}
a#brands:hover{
	text-decoration: none;
	border-color: #000;
}


@media screen and (max-width: 520px) {
	a#brands {
		margin: 1rem 0 0 0rem;
	}
}


@media screen and (max-width: 640px) {
	blockquote{
		font-size: 20px;
	}
}
</style>



<section id="quote">

	<a href="/" is="nav-link" class="logo"><h1>АЛЬТЕРНАТИВА<br /><div class="shop">МАГАЗИН ОДЕЖДЫ</div></h1></a>

	<div style="min-height: 2rem;"></div>
	
	<blockquote>
	"Мода приходит и уходит, а стиль остается. <hr class="divider" />
	Экспериментируй, будь разной, люби себя, <br />выбирай лучшее и непременно меняйся! <hr class="divider" />
	А мы всегда поможем сделать это по доступной цене, <br />но с хорошим вкусом и качеством."
	</blockquote>
	<div id="signature">
		<video src="/resources/video/signature.mp4" muted autoplay playsinline></video>
	</div>
	<div id="buttons">
		<button id="instagram" onclick="window.open('https://www.instagram.com/alternative_by/', '_blank');">Обзоры в инстаграм</button>
		<a href="/brands" is="nav-link" id="brands">Галерея брендов</a>
	</div>

</section>


`;

class PageIndex extends HTMLElement {
	constructor() {
		super();

		document.title = 'АЛЬТЕРНАТИВА — магазин одежды из Европы, США, ОАЭ';
		document.querySelector('meta[name="description"]').content =
			'Магазин одежды из Европы, США, ОАЭ. У нас вы найдете следующие бренды: H&M, C&A, COS, ZARA, GYMSHARK, BODEN, BOOHOO, NA-KD, PARFOIS, PIERRE CARDIN, ADIDAS, NIKE, PUMA, F&F, GEORGE, UNITED COLORS OF BENETTON, ONLY, VEROMODA, KIABI, JACK&JONES, RUSSELL ATHLETIC, HUMMEL, SOULSTAR, ESPRIT, BEEDEES, CHEROKEE, CIRCO, LUPILU, DISNEY, NAME IT, COOL CLUB, NEXT, CHARLES & KEITH, ASOS, ARKET, OTHER STORIES, SELECTED, OVS, MANGO, PRIMARK, CALVIN KLEIN, YAYA.';
	}

	connectedCallback() {
		this.appendChild(template.content.cloneNode(true));
		document.querySelector('#signature video').playbackRate = 0.75;
		document.querySelector('#signature video').play();
	}
}

export const tagName = 'page-index';
customElements.get(tagName) || customElements.define(tagName, PageIndex);
