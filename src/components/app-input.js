import { LitElement, html, css } from 'lit-element'
import { Validations } from '../utils/validations'

class AppInput extends LitElement {
	static get properties() {
		return {
			label: { type: String },
			name: { type: String },
			id: { type: String },
			value: { type: String },
			error: { type: String },
			handleChange: { type: Function },
			disabled: { type: Boolean },
			type: { type: String },
			haveError: { type: Boolean, reflect: true },
			readonly: { type: Boolean },
		}
	}

	static get styles() {
		return css`
			:host {
				color: var(--color-primary-dark);
				width: 180px;
				display: block;
				box-sizing: border-box;
				font-size: 1.6rem;
				transition: all 0.6s ease-in-out;
			}

			:host([disabled]) {
				color: var(--color-disabled);
			}

			:host([disabled]) input {
				border-color: var(--color-disabled);
				cursor: not-allowed;
			}

			:host([haveError]) input {
				border-color: var(--color-error);
				outline-color: var(--color-error);
			}

			:host([readonly]) {
				opacity: 0.8;
			}

			:host([readonly]) input {
				cursor: default;
			}

			label {
				display: block;
				margin-bottom: 0.5rem;
				font-size: 1.4rem;
				font-weight: medium;
			}

			input {
				width: 100%;
				color: var(--color-dark);
				border: 1px solid var(--color-primary);
				border-radius: 0.5rem;
				padding: 0.7rem;
				outline-color: var(--color-primary-light);
			}

			p {
				color: var(--color-error);
				font-size: 1rem;
				margin-top: 0.5rem;
				font-weight: 400;
			}
		`
	}

	_handleChange(e) {
		const { value } = e.target

		if (this.type === 'email' && !Validations.isEmail(value)) {
			this.error = 'Invalid email'
			this.haveError = true
			return
		}

		this.error = ''
		this.haveError = false
		if (Boolean(this.handleChange)) return this.handleChange(e)
	}

	constructor() {
		super()
		this.type = 'text'
	}

	render() {
		return html`
			<label htmlFor="${this.name}">${this.label}</label>
			<input
				?disabled="${this.disabled}"
				type="${this.type}"
				name="${this.name}"
				id="${this.id}"
				readonly="${this.readonly}"
				value="${this.value}"
				@keyup="${this._handleChange}"
			/>
			<p>${this.error}</p>
		`
	}
}

customElements.define('app-input', AppInput)
