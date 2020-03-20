import { chain, mergeWith, apply, url, applyTemplates, move, SchematicContext, Tree, Rule } from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';
import { SchematicOptions } from './schema';
import { strings } from '@angular-devkit/core';

export default function(schema: SchematicOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.debug('Adding new component to st-ui library');

    return chain([
      mergeWith(
        apply(url('./template'), [
          applyTemplates({
            name: schema.name,
            classify: strings.classify,
            dasherize: strings.dasherize
          }),
          move(`${getProjectConfig(tree, 'st-ui').sourceRoot}/components/gdk-${strings.dasherize(schema.name)}`)
        ])
      )
    ])(tree, context)
  }
}
