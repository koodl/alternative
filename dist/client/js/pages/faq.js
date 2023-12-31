component("custom-details",class extends Component{constructor(){super()}connectedCallback(){this.querySelector(".summary").addEventListener("click",(t=>{t.target.parentElement.toggleAttribute("open");var n=t.target.nextElementSibling;n.style.maxHeight?n.style.maxHeight=null:n.style.maxHeight=n.scrollHeight+"px"}))}});const t=document.createElement("template");t.innerHTML='\n<style>\npage-faq {\n\tdisplay: block;\n\tpadding: 0;\n\ttext-align: center;\n}\n#faq{\n\tdisplay: grid;\n\tgrid-template-rows: 0fr 0fr 0fr 1fr;\n\tmargin:0;\n\tpadding:3vw 3.7vw calc(3.7vw + 46px) 3.7vw;\n\twidth: 100%;\n}\nh1{\n\tfont-family: sans-serif;\n\tfont-size: 20px;\n\tfont-weight: 300;\n}\nh1.title{\n\tfont-family: script;\n\tfont-size: 2.5rem;\n\tmargin-bottom: 1.4rem;\n}\n.shop {\n\tfont-family: blockquote, \'Times New Roman\', serif;\n\tfont-size: 16px;\n\tcolor: #00000089;\n}\n\n.faqlist {\n\twidth: 100%;\n\tmax-width: 720px;\n\theight: fit-content;\n\tmargin: 1rem auto 5rem;\n\tborder: 1px solid #ddd;\n\tborder-radius: .5rem;\n}\n\ncustom-details{\n\tdisplay: block;\n\tborder-bottom: 1px solid #ddd;\n}\ncustom-details:last-child{\n\tborder-bottom: none;\n}\ncustom-details .summary{\n\tposition: relative;\n\twidth: 100%;\n\tcursor: pointer;\n\tuser-select: none;\n\tpadding: 1rem 3rem 1rem 1rem;\n\ttext-align: left;\n}\ncustom-details .summary:after {\n\tcontent: \' ❯\';\n\tcontent:\'\';\n\tposition: absolute;\n\tright: 1rem;\n\tdisplay: inline-block;\n\theight:1.25rem;\n\twidth:1.25rem;\n\tbackground-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23212529\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\'/%3e%3c/svg%3e");\n\tfont-family: "Times","Times New Roman",Serif,sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.54;\n\tcolor:#aaa;\n\ttransition:.5s ease;\n}\ncustom-details[open] .summary:after {\n\ttransform: rotate(180deg)\n}\ncustom-details .summary:hover:after {\n\tcolor: #000;\n}\ncustom-details .content{\n\twidth: 100%;\n\tmax-height: 0;\n\tpadding:0;\n\toverflow: hidden;\n\tfont-weight: 320;\n\ttransition: max-height .5s ease-out;\n}\ncustom-details .content p{\n\tpadding: 1rem;\n\ttext-align: left;\n\tborder-top: 1px solid #eee;\n}\n\n\n</style>\n\n\n\n<section id="faq">\n\n\t<a href="/" is="nav-link" class="logo"><h1>АЛЬТЕРНАТИВА<br /><div class="shop">МАГАЗИН ОДЕЖДЫ</div></h1></a>\n\t\n\n\t<div style="min-height: 2rem;"></div>\n\n\t<h1 class="title">Часто задаваемые вопросы</h1>\n\n\n\t<div class="faqlist">\n\t\t<custom-details>\n\t\t\t<div class="summary">Какие бренды можно встретить в вашем магазине?</div>\n\t\t\t<div class="content"><p>Основные бренды мы собрали в нашей галереи, но мы никогда не останавливаемся в поиске новых и интересных вещей. Перечень основных брендов можно посмотреть в <a href="/brands" is="nav-link">галереи брендов</a>.</p></div>\n\t\t</custom-details>\n\t\t<custom-details>\n\t\t\t<div class="summary">Есть ли обмен и возврат товара?</div>\n\t\t\t<div class="content"><p>Нет, такой возможности нет.</p></div>\n\t\t</custom-details>\n\t\t<custom-details>\n\t\t\t<div class="summary">Работаете ли вы с почтой? Стоимость доставки.</div>\n\t\t\t<div class="content"><p>Да, отправляем Европочтой и Белпочтой по всей Беларуси. Обязательна 100% предоплата. Стоимость доставки при покупке до 100 руб - 5 рублей, при покупке более 100 руб - бесплатно. Для заказа свяжитесь с нами в <a href="https://www.instagram.com/alternative_by/" target="_blank">инстаграм</a>. Не работаем с наложенным платежом.</p></div>\n\t\t</custom-details>\n\n\t\t<custom-details>\n\t\t\t<div class="summary">Откладываете ли вы вещи?</div>\n\t\t\t<div class="content"><p>Мы понимаем, что у нас штучный товар, который порой сложно быстро доехать и купить, а время на дорогу не вернуть. Для этого мы можем по Вашей просьбе отложить вещь (но не более 2-х штук) на 1 час, чтобы вам хватило время на дорогу к нам.<br /> <i>ВАЖНО! В день привоза, к сожалению, у нас нет возможности отложить вещи из нового поступления.</i></p></div>\n\t\t</custom-details>\n\t\t<custom-details>\n\t\t\t<div class="summary">Можно ли оплатить картой?</div>\n\t\t\t<div class="content"><p>Да, конечно. Мы принимаем платежи как наличными, так и через терминал. Кстати, наш терминал легко принимает платежи не только по картам, но и смартфонам. Для этого в кассе есть магнитный и бесконтактный карт-ридер, а также считыватель смарт-карт, чтобы принимать платежи через Apple Pay, Samsung Pay, Yandex Pay, Кошелёк Pay.</p></div>\n\t\t</custom-details>\n\t\t<custom-details>\n\t\t\t<div class="summary">Где можно посмотреть актуальный ассортимент вещей?</div>\n\t\t\t<div class="content"><p>В нашем <a href="https://www.instagram.com/alternative_by/" target="_blank">инстаграм</a>. Мы всегда снимаем видео обзоры наших поступлений. Также вы всегда можете в личных сообщениях уточнить наличие и стоимость вещей. Мы всегда рады вам помочь.</p></div>\n\t\t</custom-details>\n\t</div>\n\n\n\n</section>\n\n\n<footer is="site-footer"></footer>\n\n';class n extends HTMLElement{constructor(){super(),document.title="Часто задаваемые вопросы — АЛЬТЕРНАТИВА — магазин одежды из Европы, США, ОАЭ",document.querySelector('meta[name="description"]').content="Ответы на часто задаваемые вопросы клиентами о товаре, доставке, оплате, ..."}connectedCallback(){this.appendChild(t.content.cloneNode(!0))}}const e="page-faq";customElements.get("page-faq")||customElements.define("page-faq",n);export{e as tagName};
