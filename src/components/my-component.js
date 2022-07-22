import { LitElement, html } from 'lit-element'

class MyComponent extends LitElement {
	static get properties() {
		return {
			value: { type: Boolean },
		}
	}

	constructor() {
		super()
		this.value = 'Soy el valor'
	}

	handleChange(e) {
		this.value = e.target.value
	}

	render() {
		return html`
			<p>${this.value}</p>
			<input type="text" @keyup="${this.handleChange}" .value="${this.value}" />
		`
	}
}
customElements.define('my-component', MyComponent)
