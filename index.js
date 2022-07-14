import { html, LitElement } from 'lit-element'

class Title extends LitElement {
	constructor() {
		super()
		this.text = 'LitElement'
	}

	static get properties() {
		return {
			text: { type: String },
		}
	}

	render() {
		return html`<h1>${this.text}</h1>`
	}
}

customElements.define('title-component', Title)
