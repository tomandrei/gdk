import { text } from '@storybook/addon-knobs';
import specs from '../../docs/st-ui';

export const getStyleKnobs = (name: string) => {
    const key = 'Styles';
    const styles = {};
    const component = specs.components.filter(spec => spec.tag === name)[0];

    component.styles.forEach( style => {
        const valueRegex = style.docs.match(new RegExp('s*: s*([^;]*)'));

        if(valueRegex && valueRegex.length > 0) {
            styles[style.name] = text(style.name, valueRegex[1], key);
        }
    })

    return styles;
}