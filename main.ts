import { ChildProcess, spawn } from 'child_process';
import { log } from 'console';
import { app, globalShortcut } from 'electron';

(async () => {
    log('Waiting electron ready');
    await app.whenReady();
    log('Ready');

    let fishingProcess: ChildProcess = null;

    const result = globalShortcut.register('F6', () => {
        if (fishingProcess) {
            fishingProcess.kill();
            fishingProcess = null;
        } else {
            fishingProcess = spawn('node', [`${__dirname}/fish.js`], { stdio: 'inherit' });
        }
    });

    log('Listening: ' + result);

    process.on('beforeExit', () => {
        log('Exiting');
        globalShortcut.unregisterAll();
    });
})();
