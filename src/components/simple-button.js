import { html, LitElement } from 'lit-element'

class Button extends LitElement {
	static get properties() {
		return {
			handleClick: { type: Function },
		}
	}

	constructor() {
		super()
		this.handleClick = () => {}
	}

	render() {
		return html`<button @click="${this.handleClick}">
			<slot></slot>
		</button>`
	}
}

customElements.define('simple-button', Button)
