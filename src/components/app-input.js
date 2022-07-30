import { LitElement, html, css } from 'lit-element'

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
		}
	}

	static get styles() {
		return css`
			:host {
				color: var(--color-primary-dark);
				display: block;
				box-sizing: border-box;
				font-size: 1.6rem;
			}

			:host([disabled]) {
				color: var(--color-disabled);
			}

			:host([disabled]) input {
				border-color: var(--color-disabled);
				cursor: not-allowed;
			}

			label {
				display: block;
				margin-bottom: 0.5rem;
				font-size: 1.4rem;
				font-weight: medium;
			}

			input {
				color: var(--color-dark);
				border: 1px solid var(--color-primary);
				border-radius: 0.5rem;
				padding: 0.7rem;
				outline-color: var(--color-primary-light);
			}
		`
	}

	render() {
		return html`
			<label htmlFor="${this.name}">${this.label}</label>
			<input
				?disabled="${this.disabled}"
				type="text"
				name="${this.name}"
				id="${this.id}"
				value="${this.value}"
				onkeyup="${this.handleChange}"
			/>
			<p>${this.error}</p>
		`
	}
}

customElements.define('app-input', AppInput)
