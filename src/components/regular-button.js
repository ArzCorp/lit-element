import { html, css, unsafeCSS, LitElement } from 'lit-element'

export class RegularButton extends LitElement {
	static get properties() {
		return {
			handleClick: { type: Function },
			disabled: { type: Boolean },
			dangerous: { type: Boolean },
			pass: { type: Boolean },
		}
	}

	constructor() {
		super()
		this.handleClick = () => {}
		this.dangerous = false
		this.pass = false
	}

	static get styles() {
		return css`
			button {
				padding: 10px 25px;
				margin: 10px;
				font-size: 1.5rem;
				border-radius: 5px;
				border: none;
				transition: opacity 0.5s ease;
				cursor: pointer;
				color: #fafafa;
			}

			button:hover {
				opacity: 0.85;
			}

			button:disabled {
				cursor: not-allowed;
			}

			button:disabled:hover {
				opacity: 1;
			}

			.regular {
				background-color: #2563eb;
			}

			.pass {
				background-color: #22c55e;
			}

			.dangerous {
				background-color: #dc2626;
			}
		`
	}

	get buttonStyles() {
		return this.dangerous ? 'dangerous' : this.pass ? 'pass' : 'regular'
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

customElements.define('regular-button', RegularButton)
