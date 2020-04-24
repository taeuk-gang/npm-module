<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">npm-module-template</h1>
</div>

## Pre-requisites

- [Java 8][java-url] _(`web-component-tester` works without any issue with Java 8)_
- [Node.js][nodejs-url] >= 8.16.0
- [NPM][npm-url] >= 6.4.1 ([NPM][npm-url] comes with [Node.js][nodejs-url], no separate installation is required.)
- (Optional for non-[VS Code][vscode-url] users) [Syntax Highlighting for lit-html in VS Code][vscode-lit-html-url]
- [web-component-tester][web-component-tester-url] >= 6.9.2 (For running tests, it's recommended to install globally on your system due to its insanely huge install size by running `npm i -g web-component-tester`.)

## Installation

```sh
npm install <name>
```

## Usage

### HTML (with native ES modules)

```html
<!doctype html>
<html>
  <head>
    <script type="module" src="/path/to/my-element.js"></script>
  </head>

  <body>
    <my-element></my-element>
  </body>
</html>
```

### JS/ TS file (ES modules)

```ts
import { css, html, LitElement } from 'lit-element';
import 'accordion-sidebar.js';

class MainApp extends LitElement {
  public static styles = [
    css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    `,
  ];

  protected render() {
    return html`
    <my-element></my-element>
    `;
  }
}
```

