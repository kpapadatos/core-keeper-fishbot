import { sleep } from '@lunarade/xtools';
import { log } from 'console';
import { keyTap, keyToggle, mouseClick } from 'robotjs';

// Summon minions every 25 seconds
setInterval(async () => {
    log('Selecting minions book');
    keyTap('2');

    let numMinions = 4;

    while (numMinions--) {
        log('Summoning minion');
        mouseClick('right');

        await sleep(1000);
    }
}, 25e3);

// Disengage so that boss recharges every 2 mins
setInterval(async () => {
    // Go left, then down
    {
        keyToggle('a', 'down');
        await sleep(3000);
        keyToggle('a', 'up');

        keyToggle('s', 'down');
        await sleep(500);
        keyToggle('s', 'up');
    }

    // Wait for boss to recharge
    {
        await sleep(10e3);
    }

    // Go up, then right
    {
        keyToggle('w', 'down');
        await sleep(600);
        keyToggle('w', 'up');

        keyToggle('d', 'down');
        await sleep(3000);
        keyToggle('d', 'up');
    }

    // Shoot at boss
    {
        keyTap('3');
        mouseClick('left');
    }
}, 2 * 60e3);

