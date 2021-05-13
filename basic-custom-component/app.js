function removeCustomElement() {
	document.querySelector("app-header").remove();
}

class AppHeader extends HTMLElement {
	constructor() {
		super();
		console.log("constructor called");
	}

	connectedCallback() {
		console.log("connectedCallback called");
		this.innerHTML =
			"This is the header content rendered from app-header custom element";
	}

	disconnectedCallback() {
		console.log("disconnectedCallback called");
	}
}

customElements.define("app-header", AppHeader);
