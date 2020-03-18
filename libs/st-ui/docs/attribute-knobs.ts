import { text, number, boolean, select, array } from '@storybook/addon-knobs';
import { JsonDocsComponent } from './st-ui';
import * as ComponentTypes from '../src/interface';
import specs from './st-ui';

enum Types {
    STRING = 'string',
    NUMBER = 'number',
    BOOLEAN = 'boolean'
}

export const getAttributeKnobs = (name: string, setInitVal = {}) => {
    const key = 'Attributes';
    const props = {};
    const component: JsonDocsComponent = specs.components.filter(cmp => cmp.tag === name)[0];

    const setDefault = (prop, setInit) => prop.default && !Object.prototype.hasOwnProperty.call(setInit, prop.name) ? prop.default : setInit[prop.name];
    
    const setSelectType = (prop, defaultValue) => {
        const typesForProp = prop.type
            .split(' | ')
            .map(type => {
                const typeNames = type.split('.');
                return ComponentTypes[typeNames[0]][typeNames[1]];
            })

        if(defaultValue) {
            const propDefaultType = defaultValue.split('.');
            defaultValue = ComponentTypes[propDefaultType[0]][propDefaultType[1]];
        }

        props[prop.name] = select(prop.name, typesForProp, defaultValue, key);
            
    }

    const setProps = (prop, defaultValue) => {
        if(/\((.+|)\).+=>/gm.test(prop.type)) {
            return;
        }

        const quoteRegex = /["']/gm;

        switch(prop.type) {
            case Types.STRING:
                defaultValue = defaultValue ? defaultValue.replace(quoteRegex, ''): '';
                props[prop.name] = text(prop.name, defaultValue, key);
                return;
            case Types.NUMBER:
                defaultValue = defaultValue ? defaultValue : 0;
                props[prop.name] = number(prop.name, 0, defaultValue, key);
                return;
            case Types.BOOLEAN:
                defaultValue = defaultValue ? defaultValue : false;
                props[prop.name] = boolean(prop.name, defaultValue, key);
                return;
            default: 
                if(prop.type.includes('|') && !(/(number|string|boolean|"|')/gm.test(prop.type))) {
                    setSelectType(prop, defaultValue);
                } else if(/(number|string|boolean)\[\]/gm.test(prop.type)) {
                    props[prop.name] = array(prop.name, defaultValue, '', key);
                } else {
                    if(defaultValue) {
                        defaultValue = defaultValue.replace(quoteRegex, '');
                    }

                    props[prop.name] = text(prop.name, defaultValue, key);
                }
                return;
        }
    }

    component.props.forEach(prop => {
        const defaultValue = setDefault(prop, setInitVal);

        setProps(prop, defaultValue);
    })

    return props;
}