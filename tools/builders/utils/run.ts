#!/usr/bin/env node
import { ChildProcess, spawn, SpawnOptions } from 'child_process';

export const run = (command: string, args: string[]) => {
  const options: SpawnOptions = {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true
  };

  return new Promise<null | string>((resolve, reject) => {
    const child: ChildProcess = spawn(`${command}`, args, options);

    child.on('close', code => {
      const message = `${args} close code ${code}`;
      code === 0 ? resolve(message) : reject(new Error(message));
    });
  });
}
