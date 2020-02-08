#!/usr/bin/env node
import { join } from 'path';
import { exec } from 'child_process';

const rootDir = process.env.INIT_CWD || process.env.PWD;
const stencilDir = join(rootDir, 'libs', 'st-ui');

(() => {
  //TODO: Fix the error display
  process.chdir(stencilDir);
  const cmd = 'stencil build --dev --watch --serve';

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
  
    console.log(stdout);
    console.log(stderr);
  });
})();
