import { createBuilder } from '@angular-devkit/architect';
import { Observable } from 'rxjs';
import { join, resolve } from 'path';
import { run } from '../../utils/run';

const serve = (options, context) => {
    return Observable.create(async observer => {
        try {
            const { config } = options;
            const workspaceRoot = context.workspaceRoot;
            const buildArgs = ['build', `--config ${join(workspaceRoot, config)}`, '--serve', '--watch'];
            
            await run(resolve(workspaceRoot, 'node_modules/.bin/stencil'), buildArgs)
            
            observer.next({ success: true });
            observer.complete();

        } catch (e) {
            observer.error(`ERROR - Builder: Stencil serve - ${e}`);
        }
    })
}

module.exports = {
    default: createBuilder(serve)
}