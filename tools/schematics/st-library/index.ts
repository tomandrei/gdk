import { chain, mergeWith, apply, url, applyTemplates, move, SchematicContext, Tree, Rule } from '@angular-devkit/schematics';
import { SchematicOptions } from './schema';
import { addDepsToPackageJson, addProjectToNxJsonInTree, updateWorkspaceInTree } from '@nrwl/workspace';
import { strings } from '@angular-devkit/core';

export default function(schema: SchematicOptions): Rule {
  const dep = {};
  const devDep = {
    '@stencil/core': '^1.8.8',
    '@stencil/sass': '^1.1.1'
  };
  const install = true;

  return (tree: Tree, context: SchematicContext) => {
    return chain([
      addDepsToPackageJson(dep, devDep, install),
      mergeWith(
        apply(url('./template'), [
          applyTemplates({
            name: schema.name,
            component: schema.component,
            classify: strings.classify,
            dasherize: strings.dasherize
          }),
          move(`libs/${strings.dasherize(schema.name)}`)
        ])
      ),
      addProjectToNxJsonInTree(schema.name, { "tags": []}),
      updateWorkspaceInTree(workspace => {
        workspace.projects[schema.name] = {
          "root": `libs/${schema.name}`,
          "sourceRoot": `libs/${schema.name}/src`,
          "projectType": "library",
          "schematics": {},
          "architect": {
            "lint": {
              "builder": "@nrwl/linter:lint",
              "options": {
                "linter": "eslint",
                "config": `libs/${schema.name}/.eslintrc`,
                "tsConfig": [
                  `libs/${schema.name}/tsconfig.lib.json`,
                  `libs/${schema.name}/tsconfig.spec.json`
                ],
                "exclude": ["**/node_modules/**", `!libs/${schema.name}/**`]
              }
            },
            "test": {
              "builder": "@nrwl/jest:jest",
              "options": {
                "jestConfig": `libs/${schema.name}/jest.config.js`,
                "tsConfig": `libs/${schema.name}/tsconfig.spec.json`,
                "passWithNoTests": true
              }
            },
            "build": {
              "builder": "./dist/out-tsc/tools/builders:stencil-build",
              "options": {
                "outputPath": `dist/libs/${schema.name}`,
                "config": `libs/${schema.name}/stencil.config.ts`,
                "docs": true,
                "stats": true
              },
              "configurations": {
                "production": {
                  "prod": true
                }
              }
            },
            "serve": {
              "builder": "./dist/out-tsc/tools/builders:stencil-serve",
              "options": {
                "config": `libs/${schema.name}/stencil.config.ts`
              }
            }
          }
        }

        return workspace;
      })
    ])(tree, context);
  };
}