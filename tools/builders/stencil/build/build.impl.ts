import { createBuilder } from '@angular-devkit/architect';
import { Observable } from 'rxjs';
import { join, resolve } from 'path';
import { run } from '../../utils/run';
import { copyStencil } from '../../utils/copy';
import { readWorkspaceJson } from '@nrwl/workspace';

const build = (options, context) => {
    return Observable.create(async observer => {
        try {
            const { outputPath, config, docs, stats, prod } = options;
            const workspaceRoot = context.workspaceRoot;
            const projectName = context.target.project;
            const root = readWorkspaceJson().projects[projectName].root;
            const buildArgs = ['build', `--config ${join(workspaceRoot, config)}`];

            if(docs) {
                buildArgs.push('--docs');
            }
            if(stats) {
                buildArgs.push('--stats');
            }
            if(prod) {
                buildArgs.push('--prod');
            }
            
            await run(resolve(workspaceRoot, 'node_modules/.bin/stencil'), buildArgs)
            
            if(docs) {
                const from = join(workspaceRoot, root);
                const to = join(workspaceRoot, outputPath);

                await copyStencil(from, to);
            }

            observer.next({ success: true });
            observer.complete();

        } catch (e) {
            observer.error(`ERROR - Builder: Stencil build - ${e}`);
        }
    })
}

module.exports = {
    default: createBuilder(build)
}