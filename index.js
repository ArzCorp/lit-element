import { html, LitElement } from 'lit-element'

import './src/components/ghost-button.js'
import './src/components/simple-button.js'
import './src/components/app-header.js'

class Title extends LitElement {
	static get properties() {
		return {
			message: { type: String },
			visible: { type: Boolean },
			id: { type: String },
		}
	}

	constructor() {
		super()
		this.id = 'app-title'
		this.message = 'LitElement'
		this.visible = false
	}

	showMessage() {
		alert('Soy un mensaje')
	}

	render() {
		return html`
			<p ?hidden="${this.visible}" id="${this.id}">${this.message}</p>
			<simple-button disabled .handleClick="${this.showMessage}"
				>Alerta</simple-button
			>
			<ghost-button disabled>Hola</ghost-button>
			<slot></slot>
		`
	}
}

customElements.define('title-component', Title)
