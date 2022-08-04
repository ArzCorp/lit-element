import { LitElement, html } from 'lit-element'
class MyComponent extends LitElement {
	static get properties() {
		return {
			text: {},
		}
	}

	constructor() {
		super()
	}

	render() {
		return html`
			<div>
				<p>My component</p>
				<p>${this.text}</p>
			</div>
		`
	}
}

customElements.define('my-component', MyComponent)
