#!/usr/bin/env node
import { join } from 'path';
import { remove, move, copy } from 'fs-extra';

export const copyStencil = (from:string, to: string) => {
    // dist
    const nxDistDir = join(to, 'dist');
    const stencilDistDir = join(from, 'dist');
    // loader
    const nxLoaderDir = join(to, 'loader');
    const stencilLoaderDir = join(from, 'loader');
    // package.json
    const nxPackage = join(to, 'package.json');
    const stencilPackage = join(from, 'package.json');
    // README.md
    const nxReadme = join(to, 'README.md');
    const stencilReadme = join(from, 'README.md');

    return remove(to).then(async () => Promise.all([
        move(stencilDistDir, nxDistDir),
        move(stencilLoaderDir, nxLoaderDir),
        copy(stencilPackage, nxPackage),
        copy(stencilReadme, nxReadme)
    ]));
}