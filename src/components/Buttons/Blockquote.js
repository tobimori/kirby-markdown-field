import Button from "./Button.js";

export default class BlockQuote extends Button {

  get button() {
    return {
      icon: "quote",
      label: "Quote",
      command: () => this.editor.toggleLines(this.token),
    };
  }

  get name() {
    return "quote";
  }

  get token() {
    return "Blockquote";
  }

  get tokenType() {
    return "block";
  }
}