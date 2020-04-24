import {
  css,
  customElement,
  html,
  LitElement,
  property,
} from 'lit-element';

@customElement(`my-element`)
export class MyElement extends LitElement {
  static styles = [
    css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    `,
  ];

  @property({ type: String })
  name: string = 'Hello, World!';

  protected render() {
    return html`
    <h1>${this.name}</h1>
    `;
  }
}
