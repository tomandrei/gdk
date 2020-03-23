#!/usr/bin/env node
import { join } from 'path';
import { remove, move, copy } from 'fs-extra';

export const copyStencil = (rootDir: string) => {
    // dist
    const nxDistDir = join(rootDir, 'dist', 'libs', 'st-ui', 'dist');
    const stencilDistDir = join(rootDir, 'libs', 'st-ui', 'dist');
    // loader
    const nxLoaderDir = join(rootDir, 'dist', 'libs', 'st-ui', 'loader');
    const stencilLoaderDir = join(rootDir, 'libs', 'st-ui', 'loader');
    // package.json
    const nxPackage = join(rootDir, 'dist', 'libs', 'st-ui', 'package.json');
    const stencilPackage = join(rootDir, 'libs', 'st-ui', 'package.json');
    // README.md
    const nxReadme = join(rootDir, 'dist', 'libs', 'st-ui', 'README.md');
    const stencilReadme = join(rootDir, 'libs', 'st-ui', 'README.md');

    return remove(nxDistDir).then(async () => Promise.all([
        move(stencilDistDir, nxDistDir),
        move(stencilLoaderDir, nxLoaderDir),
        copy(stencilPackage, nxPackage),
        copy(stencilReadme, nxReadme)
    ]));
}