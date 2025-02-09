import { ChildProcess, spawn } from 'child_process';
import { log } from 'console';
import { app, globalShortcut } from 'electron';

(async () => {
    log('Waiting electron ready');
    await app.whenReady();
    log('Ready');

    let process: ChildProcess = null;

    const result = globalShortcut.register('1', () => {
        if (process) {
            process.kill();
            process = null;
        } else {
            process = spawn('node', [`${__dirname}/attackloop.js`], { stdio: 'inherit' });
        }
    });

    log('Listening: ' + result);

    process.on('beforeExit', () => {
        log('Exiting');
        globalShortcut.unregisterAll();
    });
})();
