/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { GdkComponentTitle, } from "./components/gdk-component/gdk-component-title.interface";
export namespace Components {
    interface GdkComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The component styles {object}
         */
        "styles": {
            [key: string]: string;
        };
        /**
          * The title
         */
        "title": GdkComponentTitle;
    }
}
declare global {
    interface HTMLGdkComponentElement extends Components.GdkComponent, HTMLStencilElement {
    }
    var HTMLGdkComponentElement: {
        prototype: HTMLGdkComponentElement;
        new (): HTMLGdkComponentElement;
    };
    interface HTMLElementTagNameMap {
        "gdk-component": HTMLGdkComponentElement;
    }
}
declare namespace LocalJSX {
    interface GdkComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The component styles {object}
         */
        "styles"?: {
            [key: string]: string;
        };
        /**
          * The title
         */
        "title"?: GdkComponentTitle;
    }
    interface IntrinsicElements {
        "gdk-component": GdkComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gdk-component": LocalJSX.GdkComponent & JSXBase.HTMLAttributes<HTMLGdkComponentElement>;
        }
    }
}
