import { html, LitElement } from 'lit-element'

import './src/components/ghost-button.js'
import './src/components/simple-button.js'
import './src/components/app-header.js'
import './src/components/app-notification.js'

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
			<simple-button .handleClick="${this.showMessage}"
				>Guardar cambios</simple-button
			>
			<ghost-button>Cancelar</ghost-button>
			<slot></slot>
		`
	}
}

customElements.define('title-component', Title)
