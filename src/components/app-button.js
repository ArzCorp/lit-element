import { LitElement, html, css } from 'lit-element'

class AppButton extends LitElement {
	static get properties() {
		return {
			disabled: { type: Boolean },
			ghost: { type: Boolean, reflect: true },
		}
	}

	static get styles() {
		return css`
			* {
				box-sizing: border-box;
			}

			:host {
				display: inline-block;
				width: 280px;
			}

			:host([disabled]) button {
				background-color: var(--color-disabled);
				cursor: not-allowed;
			}

			:host([disabled]) button:hover {
				opacity: 1;
			}

			button {
				transition: all 0.3s linear;
				font-weight: 400px;
				width: 100%;
				padding: 0.8rem 1rem;
				border: none;
				background-color: var(--color-primary);
				color: var(--color-white);
				border-radius: 0.5rem;
			}

			button:hover {
				opacity: 0.9;
				cursor: pointer;
			}
		`
	}

	constructor() {
		super()
		this.disabled = false
	}

	render() {
		return html`<button ?disabled="${this.disabled}"><slot></slot></button> `
	}
}

customElements.define('app-button', AppButton)
