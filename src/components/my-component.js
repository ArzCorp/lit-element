import { LitElement, html } from 'lit-element'

class MyComponent extends LitElement {
	firstUpdated() {
		const text = this.shadowRoot.querySelector('#text')
	}

	render() {
		return html`
			<div>
				<p id="text">Soy un componente</p>
				<slot name="hijo-one"></slot>
				<slot name="hijo-two"></slot>
			</div>
		`
	}
}

customElements.define('my-component', MyComponent)
