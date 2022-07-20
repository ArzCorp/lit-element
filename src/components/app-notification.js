import { html, LitElement } from 'lit-element'
import { notificationStyles } from '../styles/notification-styles'

class AppNotification extends LitElement {
	static get properties() {
		return {
			message: { type: String },
			show: { type: Boolean },
		}
	}

	static get styles() {
		return notificationStyles
	}

	hidden() {
		this.show = false
	}

	constructor() {
		super()
		this.show = false
	}

	render() {
		return html`
			<div class="show" ?hidden="${!this.show}" @click="${this.hidden}">
				<p class="close-button">x</p>
				<p>${this.message}</p>
			</div>
		`
	}
}

customElements.define('app-notification', AppNotification)
