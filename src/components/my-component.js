import { LitElement, html } from 'lit-element'
class MyComponent extends LitElement {
	static get properties() {
		return {
			nombre: { type: String },
			genero: { type: String },
		}
	}

	constructor() {
		super()
	}

	render() {
		return html`
			<div>
				<p>
					${this.nombre} es ${(this.genero == 'F') ? 'Femenino' : 'masculino'}
				</p>
			</div>
		`
	}
}

customElements.define('my-component', MyComponent)
