import { html, css, LitElement, unsafeCSS } from 'lit-element'

class Button extends LitElement {
	static get properties() {
		return {
			handleClick: { type: Function },
			disabled: { type: Boolean },
		}
	}

	static get styles() {
		return css`
			button {
				padding: 10px 25px;
				border-radius: 5px;
				transition: all 0.2s ease-in-out;
				box-shadow: 4px 5px 0px 0px #1e3a8a;
				cursor: pointer;
				font-size: 1.5rem;
				border: none;
				background-color: #bfdbfe;
				color: #1e3a8a;
			}

			button:hover {
				box-shadow: none;
			}

			button:disabled {
				background-color: #f3f4f6;
				color: #1f2937;
				box-shadow: 4px 5px 0px 0px #1f2937;
				cursor: not-allowed;
			}
		`
	}

	constructor() {
		super()
		this.handleClick = () => {}
	}

	render() {
		return html`<button ?disabled=${this.disabled} @click="${this.handleClick}">
			<slot></slot>
		</button>`
	}
}

customElements.define('simple-button', Button)
