import { LitElement, css, html } from 'lit-element'

class MyComponent extends LitElement {
	static get styles() {
		return css`
			p {
				font-size: 1.8rem;
				color: #1e3a8a;
			}
		`
	}

	render() {
		return html`
			<div>
				<p id="text">Soy un componente</p>
			</div>
		`
	}
}

customElements.define('my-component', MyComponent)
