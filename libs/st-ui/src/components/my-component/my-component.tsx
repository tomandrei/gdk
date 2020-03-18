import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { MyComponentSize } from './my-component-size.interface';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
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
  @Prop() size: MyComponentSize = MyComponentSize.MEDIUM;

  /**
   * The component styles {object}
   */
  @Prop() styles: { [key: string]: string; };

  private getText(): string {
    return format(this.first, this.last, this.size);
  }

  render() {
    const rootClasses = {
      ['my-component']: true
    }
    const props = {
      style: this.styles,
      class: rootClasses
    }

    return <div {...props}>Hello, World! I'm {this.getText()}</div>;
  }
}
