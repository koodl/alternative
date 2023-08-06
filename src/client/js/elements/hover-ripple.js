export const tagName = 'hover-ripple';
component(
	tagName,
	class extends HTMLButtonElement {
		shadow = 'open';

		constructor() {
			super();
		}

		connectedCallback() {
			// this.render(this.code());
			const template = document.createElement('template');
			template.innerHTML = this.code();
			this.appendChild(template.content.cloneNode(true));

			this.addEventListener('mouseenter', createRipple);
			function createRipple(e) {
				if (this.getElementsByClassName('ripple').length > 0) {
					this.removeChild(this.getElementsByClassName('ripple')[0]);
				}

				var circle = document.createElement('div');
				this.appendChild(circle);

				circle.classList.add('ripple');
				var d = Math.max(this.clientWidth, this.clientHeight);
				circle.style.width = circle.style.height = d + 'px';

				circle.style.left = e.clientX - e.target.getBoundingClientRect().x - d / 2 + 'px';
				circle.style.top = e.clientY - e.target.getBoundingClientRect().y - d / 2 + 'px';

			}
		}

		code() {
			return /*html*/ `
<style>
[is="hover-ripple"]{
	overflow: hidden;
}
.ripple {
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.7);
	position: absolute;
	z-index: 999;
	transform: scale3d(0, 0, 0);
	animation: ripple 0.5s linear;
}
@keyframes ripple {
	100% {
		transform: scale3d(2, 2, 2);
		opacity: 0;
	}
}
</style>


`;
		}
	},
	{ extends: 'button' }
);
