import { html, LitElement } from 'lit-element'
import { headerStyles } from '../styles/header-styles'

class AppHeader extends LitElement {
	static get styles() {
		return headerStyles
	}

	render() {
		return html`
			<header>
				<h1>Logo</h1>
			</header>
		`
	}
}

customElements.define('app-header', AppHeader)
