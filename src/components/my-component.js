import { LitElement, css, html } from 'lit-element'

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

			::slotted(*) {
				color: var(--color-primary);
			}

			::slotted(p) {
				font-size: 1.4rem;
			}

			span ::slotted(*) {
				color: var(--color-error);
			}

			div {
				display: block;
				min-height: 250px;
				height: inherit;
				background-color: var(--color-white);
				padding: 1rem;
				border: 1px solid var(--color-primary);
				border-radius: 0.6rem;
			}

			h1 {
				font-size: 1rem;
				text-align: right;
				font-weight: bold;
			}
		`
	}

	render() {
		return html`
			<div>
				<h1>My component</h1>
				<slot name="title">Soy un componente</slot>
				<slot name="subtitle"></slot>
				<span>
					<slot name="content"></slot>
				</span>
			</div>
		`
	}
}

customElements.define('my-component', MyComponent)
