export const tagName = 'site-footer';

class siteFooter extends HTMLElement {
	// shadow = 'open';

	constructor() {
		super();

		this.openingHours = this.openingHours.bind(this);
	}

	render(code) {
		if (!this.shadowRoot) {
			if (this.shadow == 'open') {
				this.attachShadow({ mode: 'open' });
			} else if (this.shadow == 'closed') {
				this.attachShadow({ mode: 'closed' });
			}
		}

		const template = document.createElement('template');
		template.innerHTML = code;
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		if (this.shadow == 'open' || this.shadow == 'closed') {
			this.shadowRoot.append(template.content.cloneNode(true));
		} else {
			this.appendChild(template.content.cloneNode(true));
		}
	}

	openingHours() {
		let openingHours = document.querySelector('.opening-hours');
		let currentDate = new Date();
		let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		let currentDay = weekday[currentDate.getDay()];

		let currentTimeHours = currentDate.getHours();
		currentTimeHours = currentTimeHours < 10 ? '0' + currentTimeHours : currentTimeHours;
		let currentTimeMinutes = currentDate.getMinutes();
		let timeNow = currentTimeHours + '' + currentTimeMinutes;

		document.getElementById(currentDay).classList.toggle('today');

		let openTimeSplit = document.getElementById(currentDay).querySelector('.opens').textContent.split(':');

		let openTimeHours = openTimeSplit[0];
		openTimeHours = openTimeHours < 10 ? '0' + openTimeHours : openTimeHours;

		let openTimeMinutes = openTimeSplit[1];
		let openTimex = openTimeSplit[0] + openTimeSplit[1];

		let closeTimeSplit = document.getElementById(currentDay).querySelector('.closes').textContent.split(':');

		let closeTimeHours = closeTimeSplit[0];
		closeTimeHours = closeTimeHours < 10 ? '0' + closeTimeHours : closeTimeHours;

		let closeTimeMinutes = closeTimeSplit[1];
		let closeTimex = closeTimeSplit[0] + closeTimeSplit[1];

		if (timeNow >= openTimex && timeNow <= closeTimex) {
			!document.querySelector('.openorclosed').classList.contains('open') &&
				document.querySelector('.openorclosed').classList.toggle('open');
		} else {
			!document.querySelector('.openorclosed').classList.contains('closed') &&
				document.querySelector('.openorclosed').classList.toggle('closed');
		}
	}

	connectedCallback() {
		this.render(this.code());

		this.openingHours();
	}

	code() {
		return /*html*/ `
<style>
footer{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 2rem;
	width:100%;
	padding: 3rem 12% 5rem;
	color: #000;
	border-top: 1px solid #eee;
}
footer div {
	padding: 0 0 1rem 1.25rem;
	line-height: 2.5;
	text-align: left;
	border-left: 1px solid #eee;
}
footer b {
	margin: 0 0 1rem;
	font-size: .75rem;
	font-weight: 200;
	line-height: 1;
	color: #919191;
	color: #767676;
}
footer a, footer p {
	display: block;
	width: fit-content;
	font-size: .75rem;
	font-weight: 200;
	text-transform: uppercase;
	color: #000;
}
footer a:hover {
	color: #737373;
	text-decoration: none;
}
.opening-hours p {
	white-space: nowrap;
}
footer img {
	display: inline-block;
	height: 1.25rem;
	margin-right: 1rem;
	margin-bottom: 2px;
	vertical-align: middle;
}

footer p{
	position: relative;
}
footer p.today:before{
	content: '';
	position: absolute;
	top: 10px;
	left: -10px;
	width: 10px;
	height: 10px;
	transform: rotate(-90deg);
	background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") no-repeat;
}
footer p.openorclosed.open:after{
	content: ' ОТКРЫТ';
}
footer p.openorclosed.closed:after{
	content: ' ЗАКРЫТ';
}


@media screen and (max-width: 1024px) {
	footer {
		padding: 3rem 0 5rem;
	}
}
@media screen and (max-width: 720px) {
	footer {
		grid-template-columns: 1fr;
		grid-template-rows: 0fr 0fr 0fr 0fr;
		padding: 3rem 0 5rem;
	}
}
</style>


<div>
	<b>НАВИГАЦИЯ</b>
	<a href="/" is="nav-link">Главная страница</a>
	<a href="/about" is="nav-link">О магазине</a>
	<a href="/brands" is="nav-link">Галерея брендов</a>
	<a href="/faq" is="nav-link">Часто задаваемые вопросы</a>
	<a href="/contacts" is="nav-link">Контакты</a>
</div>
<div>
	<b>КОНТАКТЫ</b>
	<p>улица Петра Мстиславца, 4</p>
	<p><a href="mailto:mail@alternative.by">mail@alternative.by</a></p>
	<p>ИП Стемплевская<br /> Анна Тадеушевна,<br /> УНП 692205522</p>
</div>
<div class="opening-hours">
	<b>ВРЕМЯ РАБОТЫ</b>
	<p class="openorclosed">МАГАЗИН СЕЙЧАС </p>
	<p id="Monday">Понедельник с <span class="opens">10:00</span> до <span class="closes">20:00</span></p>
	<p id="Tuesday">Вторник с <span class="opens">10:00</span> до <span class="closes">20:00</span></p>
	<p id="Wednesday">Среда с <span class="opens">10:00</span> до <span class="closes">20:00</span></p>
	<p id="Thursday">Четверг с <span class="opens">10:00</span> до <span class="closes">20:00</span></p>
	<p id="Friday">Пятница с <span class="opens">10:00</span> до <span class="closes">20:00</span></p>
	<p id="Saturday">Суббота с <span class="opens">10:00</span> до <span class="closes">18:00</span></p>
	<p id="Sunday">Воскресенье с <span class="opens">10:00</span> до <span class="closes">18:00</span></p>
</div>
<div>
	<b>ПОДПИСЫВАЙТЕСЬ НА НАС</b>
	<p><a href="https://www.instagram.com/alternative_by/" rel="nofollow" target="_blank"><img src="/resources/img/instagram.svg" alt="Instagram" />Instagram</a></p>
	<p><a href="https://www.facebook.com/alternative.minsk" rel="nofollow" target="_blank"><img src="/resources/img/facebook.svg" alt="Facebook" />Facebook</a></p>
</div>

`;
	}
}

customElements.get(tagName) || customElements.define(tagName, siteFooter, { extends: 'footer' });
