import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { GdkComponentSize } from './gdk-component-size.interface';

@Component({
  tag: 'gdk-component',
  styleUrl: 'gdk-component.scss',
  shadow: true
})
export class GdkComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The component size
   */
  @Prop() size: GdkComponentSize = GdkComponentSize.MEDIUM;

  /**
   * The component styles {object}
   */
  @Prop() styles: { [key: string]: string; };

  private getText(): string {
    return format(this.first, this.last, this.size);
  }

  render() {
    const rootClasses = {
      ['gdk-component']: true
    }
    const props = {
      style: this.styles,
      class: rootClasses
    }

    return <div {...props}>Hello, World! I'm {this.getText()}</div>;
  }
}
