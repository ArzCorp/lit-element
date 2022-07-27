import { html, css } from 'lit-element'
import { RegularButton } from './regular-button'

class GhostButton extends RegularButton {
	static get properties() {
		return {}
	}

	constructor() {
		super()
	}

	static get styles() {
		return [
			super.styles,
			css`
				button {
					font-weight: medium;
					border-width: 1px;
					border-style: solid;
				}

				button:hover {
					opacity: 0.65;
				}

				.dangerous {
					background-color: #fafafa;
					border-color: #dc2626;
					color: #dc2626;
				}

				.pass {
					background-color: #fafafa;
					border-color: #22c55e;
					color: #22c55e;
				}

				.regular {
					background-color: #fafafa;
					border-color: #2563eb;
					color: #2563eb;
				}
			`,
		]
	}

	render() {
		return html`<button
			class="${this.buttonStyles}"
			?disabled=${this.disabled}
			@click="${this.handleClick}"
		>
			<slot></slot>
		</button>`
	}
}

customElements.define('ghost-button', GhostButton)
