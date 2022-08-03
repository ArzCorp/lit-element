import { LitElement, css, html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
class MyComponent extends LitElement {
	static get styles() {
		return css`
			* {
				box-sizing: border-box;
				margin: 0rem;
				padding: 0rem;
			}

			:host {
				display: inline-block;
				width: 210px;
			}

			div {
				display: block;
				min-height: 250px;
				height: inherit;
				background-color: var(--color-white);
				padding: 1rem;
				border: 1px solid var(--component-color, #1e3a8a);
				border-radius: 0.6rem;
			}

			h1 {
				font-size: 1rem;
				text-align: right;
				font-weight: bold;
				color: var(--component-color, #1e3a8a);
			}

			::slotted(*) {
				color: var(--component-color, #1e3a8a);
			}

			::slotted(p) {
				font-size: 1.4rem;
			}

			::slotted(h1) {
				color: var(--color-primary);
			}

			h2 ::slotted(*) {
				font-size: 2.5rem;
			}

			span ::slotted(*) {
				color: var(--color-error);
			}

			.active {
				background-color: var(--color-primary);
			}
		`
	}

	constructor() {
		super()
		this.classes = {
			active: false,
			error: true,
		}
	}

	render() {
		return html`
			<div class=${classMap(this.classes)}>
				<h1>My component</h1>
				<h2>
					<slot name="title">Soy un componente</slot>
				</h2>
				<slot name="subtitle"></slot>
				<span>
					<slot name="content"></slot>
				</span>
			</div>
		`
	}
}

customElements.define('my-component', MyComponent)
