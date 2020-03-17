#!/usr/bin/env node
import { join } from 'path';
import { remove, move, writeFile } from 'fs-extra';

const rootDir = process.env.INIT_CWD || process.env.PWD;
const nxDistDir = join(rootDir, 'dist', 'libs', 'st-ui');
const stencilDistDir = join(rootDir, 'libs', 'st-ui', 'dist');

/**
 * Clean up and copy lib to dist
 */
const copyDist = async () => {
  try {
    await remove(nxDistDir);
    await move(stencilDistDir, nxDistDir);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

/**
 * Create package.json for publish
 */
const createPackage = async () => {
  const pkg = join(nxDistDir, 'package.json');
  const pkgJSON = {
    name: '@gdk/st-ui',
    version: '0.0.1',
    author: 'hello@geekster.io',
    description: 'Geekster Development Kit - Stencil Web Components',
    main: 'index.js',
    module: 'index.mjs',
    es2015: 'esm/index.mjs',
    es2017: 'esm/index.mjs',
    types: 'types/index.d.ts',
    collection: 'collection/collection-manifest.json',
    collectionmain: 'collection/index.js',
    license: 'MIT'
  };

  await writeFile(pkg, JSON.stringify(pkgJSON, null, 2) + '\n');
};

(async () => {
  await copyDist();
  await createPackage();

  console.log('package st-ui finished');
})();
