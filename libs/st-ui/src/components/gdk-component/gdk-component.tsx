import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';
import { GdkComponentOnorific } from './gdk-component-onorific.interface';

@Component({
  tag: 'gdk-component',
  styleUrl: 'gdk-component.scss',
  shadow: true
})
export class GdkComponent {
  /**
   * Emit the persona Ex: Sr Will Smith
   */
  @Event() persona: EventEmitter;

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

  private nameEmitHandler() {
    this.persona.emit(this.getText());
  }

  render() {
    const rootClasses = {
      ['gdk-component']: true
    }
    const props = {
      style: this.styles,
      class: rootClasses
    }

    return <div {...props} onClick={() => this.nameEmitHandler()}>Hello, World! I'm {this.getText()}</div>;
  }
}
