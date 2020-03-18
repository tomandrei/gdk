import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { MyComponentSize } from './my-component-size.interface';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
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

  private getText(): string {
    return format(this.first, this.last, this.size);
  }

  render() {
  return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
