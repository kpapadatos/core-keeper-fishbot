import { sleep } from '@lunarade/xtools';
import { log } from 'console';
import { keyTap } from 'robotjs';

(async () => {
    while (true) {
        log('Attacking');
        keyTap('8');
        await sleep(1800);
    }
})();