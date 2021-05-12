import { LitElement, html } from 'https://unpkg.com/lit@2.0.0-rc.2/index.js?module';

class WcfsSample extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        }
    }

    render() {
        return html`<div>Hello, ${this.name ?? 'world'}!</div>`;
    }
}

customElements.define("wcfs-sample", WcfsSample);