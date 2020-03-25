import { chain, mergeWith, apply, url, applyTemplates, move, SchematicContext, Tree, Rule } from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';
import { SchematicOptions } from './schema';
import { strings } from '@angular-devkit/core';

export default function(schema: SchematicOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.debug('Adding new component to st-ui library');

    return chain([
      mergeWith(
        apply(url('./template/component'), [
          applyTemplates({
            name: schema.name,
            classify: strings.classify,
            dasherize: strings.dasherize
          }),
          move(`${getProjectConfig(tree, 'st-ui').sourceRoot}/components/gdk-${strings.dasherize(schema.name)}`)
        ])
      ),
      mergeWith(
        apply(url('./template/html'), [
          applyTemplates({
            name: schema.name,
            dasherize: strings.dasherize
          }),
          move(`${getProjectConfig(tree, 'st-ui').sourceRoot}/html`)
        ])
      ),
      () => {
        // Add component to the angular module
        const modulePath = 'libs/ng-ui/src/lib/ng-ui.module.ts';
        const moduleFile = tree.read(modulePath);
        if(moduleFile) {
          const moduleContent = moduleFile.toString();

          const regexImports = /(?<=\{\s).+?(?=\s\}* from '\.\/ng-ui';)/g;
          const from = moduleContent.match(regexImports)[0];
          const to = `${from}, Gdk${strings.classify(schema.name)}`;
    
          tree.overwrite(modulePath, moduleContent.replace(new RegExp(from, 'gi'), to));
        }
      },
      () => {
        // Add component to the index.html
        const modulePath = 'libs/st-ui/src/index.html';
        const moduleFile = tree.read(modulePath);
        if (moduleFile) {
          const moduleContent = moduleFile.toString();
  
          const regex = /<link[^>]*>/g;
          const from = moduleContent.match(regex)[0];
          const to = `${from}\n  <link rel="import" href="build/gdk-${strings.dasherize(schema.name)}.html" id="gdk-${strings.dasherize(schema.name)}" />`
    
          tree.overwrite(modulePath, moduleContent.replace(from, to));
        }
      }
    ])(tree, context)
  }
}
