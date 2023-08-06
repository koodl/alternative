const t=document.createElement("template");t.innerHTML='\n<style>\npage-about {\n\tdisplay: block;\n\tpadding: 0;\n\ttext-align: center;\n}\n#about{\n\tdisplay: grid;\n\tgrid-template-rows: 0fr 0fr 0fr 5fr;\n\talign-items: start;\n\tmargin:0;\n\tpadding:3vw 3.7vw calc(3.7vw + 46px) 3.7vw;\n\twidth: 100%;\n\tmin-height: 100vh;\n}\nh1{\n\tfont-family: sans-serif;\n\tfont-size: 20px;\n\tfont-weight: 300;\n}\nh1.title{\n\tfont-family: script;\n\tfont-size: 2.5rem;\n\tmargin-bottom: 1.4rem;\n}\n.shop {\n\tfont-family: blockquote, \'Times New Roman\', serif;\n\tfont-size: 16px;\n\tcolor: #00000089;\n}\n\n.content{\n\twidth: 100%;\n\tmax-width: 720px;\n\theight: fit-content;\n\tmargin: 1rem auto 5rem;\n\tfont-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'JetBrains Mono\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif;\n\tfont-weight: 400;\n}\n.content p{\n\tmargin-top: .5rem;\n\tfont-size: 1.25rem;\n\tfont-weight: 200;\n\ttext-align: justify;\n}\n.content p:first-letter {\n\tmargin-left: 2rem;\n}\n\n.video {\n\twidth: 100%;\n\tmax-width: 720px;\n\theight: fit-content;\n\tmargin: 1rem auto 5rem;\n}\n.video video {\n\tmax-width: 100%;\n\tmax-width: min(100%, 96vw);\n\tbackground: url(\'https://alternative.by/resources/img/picture-frame.webp\');\n  background-size: 100% 100%;\n  padding: 30px;\n}\n\n@media only screen and (max-width: 640px) {\n\t.video video {\n\t\tpadding: 12px;\n\t}\n}\n</style>\n\n\n\n<section id="about">\n\n\t<a href="/" is="nav-link" class="logo"><h1>АЛЬТЕРНАТИВА<br /><div class="shop">МАГАЗИН ОДЕЖДЫ</div></h1></a>\n\t\n\n\t<div style="min-height: 2rem;"></div>\n\n\t<h1 class="title">О магазине</h1>\n\n\t<div class="content">\n\t\t<p>«Альтернатива» — это не просто магазин одежды, а союз людей, любящих преображение, эксперименты и постоянное совершенствование себя. \n\t\t<p>Наша миссия — помочь каждому человеку найти своей стиль, помогающий полноценно отобразить его многогранный внутренний мир, через постоянные эксперименты со своим образом.</p>\n\t\t<p>Альтернатива — это то место, где Вы сможете выразить себя через моду и дизайн, а также всегда выбрать приемлемый к Вашему образу жизни стиль в одежде.</p>\n\t\t<p>Наша цель - демократизировать качество Вашего гардероба с помощью широко доступных, хорошо сделанных вещей всемирно известных брендов. Мода и стиль теперь доступны для каждого!</p>\n\t\t<p>Каждую неделю мы пополняем наш магазин новинками, которые отбираем у лучших и надежных поставщиков одежды из Европы и ОАЭ. Подробные обзоры поступления Вы всегда можете увидеть в нашем <a href="https://www.instagram.com/alternative_by/" rel="nofollow" target="_blank">инстаграм</a>.</p>\n\t\t<p>Экспериментируй, будь разной, люби себя, выбирай лучшее и непременно меняйся!</p>\n\t</div>\n\n\t<div class="video">\n\t\t<video src="/resources/video/alternative.mp4" controls></video>\n\t</div>\n\t\n\n</section>\n\n\n<footer is="site-footer"></footer>\n\n\n';class n extends HTMLElement{constructor(){super(),document.title="О магазине — АЛЬТЕРНАТИВА — магазин одежды из Европы, США, ОАЭ",document.querySelector('meta[name="description"]').content='Информация о магазине одежды из Европы и США "АЛЬТЕРНАТИВА". Миссия и цель магазина.'}connectedCallback(){this.appendChild(t.content.cloneNode(!0))}}const e="page-about";customElements.get("page-about")||customElements.define("page-about",n);export{e as tagName};
