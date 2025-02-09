
import { defer, sleep } from '@lunarade/xtools';
import { deltaE, hex } from 'chroma-js';
import { log } from 'console';
import { getScreenSize, keyTap, mouseClick, mouseToggle, screen } from 'robotjs';

(async () => {
    const caughtColor = hex('e0e1e9');
    const { width, height } = getScreenSize();

    log('Started');
    log('Selecting fishing rod');
    keyTap('4');

    while (true) {
        log('Throwing hook');
        mouseToggle('down', 'right');

        await sleep(100);

        mouseToggle('up', 'right');

        log('Waiting for previous bubble to disappear');
        await sleep(1500);

        log('Waiting');
        await waitForFish();

        log('Reeling');
        mouseClick('right');

        await sleep(200);
    }

    function waitForFish() {
        const deferred = defer<void>();
        const interval = setInterval(() => {
            const capturePoints = [
                { x: width / 2 - 20, y: height / 2 - 216 },
                { x: width / 2 + 5, y: height / 2 - 195 },
                { x: width / 2 - 10, y: height / 2 - 195 },
            ];

            for (const { x, y } of capturePoints) {
                const color = screen.capture(x, y, 1, 1).colorAt(0, 0);

                const distance = deltaE(hex(color), caughtColor);

                log('Color: ' + color + ' Distance: ' + distance);

                if (distance < 5) {
                    clearInterval(interval);
                    deferred.resolve();

                    break;
                }
            }
        }, 200);

        return deferred.promise;
    }
})();