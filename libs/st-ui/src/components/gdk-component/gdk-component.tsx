import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { GdkComponentOnorific } from './gdk-component-onorific.interface';

@Component({
  tag: 'gdk-component',
  styleUrl: 'gdk-component.scss',
  shadow: true
})
export class GdkComponent {
  /**
   * The title
   */
  @Prop() readonly onorific: GdkComponentOnorific = GdkComponentOnorific.MR;

  /**
   * The first name
   */
  @Prop() readonly first: string;

  /**
   * The last name
   */
  @Prop() readonly last: string;

  /**
   * The component styles {object}
   */
  @Prop() readonly styles: { [key: string]: string; };

  private getText(): string {
    return format(this.onorific, this.first, this.last);
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
