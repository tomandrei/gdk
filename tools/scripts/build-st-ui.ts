#!/usr/bin/env node
import { join } from 'path';
import { spawn } from 'child_process';

const rootDir = process.env.INIT_CWD || process.env.PWD;
const stencilDir = join(rootDir, 'libs', 'st-ui');

(() => {
  process.chdir(stencilDir);

  const child = spawn('stencil', ['build', '--docs']);

  //Print stdout to screen
  child.stdout.on('data', function (data) {   process.stdout.write(data.toString());  });
  
  //Print stderr to screen
  child.stderr.on('data', function (data) {   process.stdout.write(data.toString());  });
  
  child.on('close', function (code) { 
      console.log("Finished with code " + code);
  });

})();
