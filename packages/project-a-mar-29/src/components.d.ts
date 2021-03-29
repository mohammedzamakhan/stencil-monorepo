/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AButton {
    /**
    * The label
    */
    'myBtnLabel': string;
  }
}

declare global {


  interface HTMLAButtonElement extends Components.AButton, HTMLStencilElement {}
  var HTMLAButtonElement: {
    prototype: HTMLAButtonElement;
    new (): HTMLAButtonElement;
  };
  interface HTMLElementTagNameMap {
    'a-button': HTMLAButtonElement;
  }
}

declare namespace LocalJSX {
  interface AButton extends JSXBase.HTMLAttributes<HTMLAButtonElement> {
    /**
    * The label
    */
    'myBtnLabel'?: string;
  }

  interface IntrinsicElements {
    'a-button': AButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

