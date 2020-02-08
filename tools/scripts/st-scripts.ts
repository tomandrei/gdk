#!/usr/bin/env node
import { join } from 'path';
import { spawn } from 'child_process';

const rootDir = process.env.INIT_CWD || process.env.PWD;
const stencilDir = join(rootDir, 'libs', 'st-ui');

(() => {
  process.chdir(stencilDir);
  const argv = process.argv.slice(2);
  const args = argv.includes('build') ? ['build', '--docs'] : ['build', '--dev', '--watch', '--serve'];

  const child = spawn('stencil', args);

  //Print stdout to screen
  child.stdout.on('data', function (data) {   process.stdout.write(data.toString());  });
  
  //Print stderr to screen
  child.stderr.on('data', function (data) {   process.stdout.write(data.toString());  });
  
  child.on('close', function (code) { 
      console.log("Finished with code " + code);
  });

})();
