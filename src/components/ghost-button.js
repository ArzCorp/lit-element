import { html, css } from 'lit-element'
import { SimpleButton } from './simple-button'

class GhostButton extends SimpleButton {
	static get properties() {
		return {
			...super.properties,
		}
	}

	constructor() {
		super()
	}

	static get styles() {
		return [
			super.styles,
			css`
				button {
					background-color: rgba(255, 255, 255, 1);
					border: 1px solid #1e3a8a;
				}

				button:hover {
					background-color: rgba(255, 255, 255, 0.8);
				}

				button:disabled {
					background-color: red;
					color: white;
				}
			`,
		]
	}

	render() {
		return html`<button ?disabled=${this.disabled} @click="${this.handleClick}">
			<slot></slot>
		</button>`
	}
}

customElements.define('ghost-button', GhostButton)
