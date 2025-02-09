import { sleep } from '@lunarade/xtools';
import { log } from 'console';
import { mouseToggle } from 'robotjs';

(async () => {
    log('Starting...');

    // Initial delay
    await sleep(2000);

    while (true) {
        log('Attacking...');
        mouseToggle('down', 'left');

        await sleep(25_000);

        mouseToggle('up', 'left');

        log('Waiting for boss to reset...');
        await sleep(15_000);
    }
})();