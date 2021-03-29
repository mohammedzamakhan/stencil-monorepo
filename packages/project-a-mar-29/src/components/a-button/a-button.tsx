import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "a-button",
  styleUrl: "a-button.css",
  shadow: false,
})
export class AButton {
  /**
   * The label
   */
  @Prop() myBtnLabel: string;

  render() {
    return (
      <button>
        {this.myBtnLabel}
        <slot />
      </button>
    );
  }
}
