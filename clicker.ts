import { ChildProcess, spawn } from 'child_process';
import { log } from 'console';
import { app, globalShortcut } from 'electron';

// node_modules\.bin\electron clicker.js
(async () => {
    log('Waiting electron ready');
    await app.whenReady();
    log('Ready');

    let _process: ChildProcess = null;

    const result = globalShortcut.register('F1', () => {
        if (_process) {
            _process.kill();
            _process = null;
        } else {
            _process = spawn('node', [`${__dirname}/clickfest.js`], { stdio: 'inherit' });
        }
    });

    log('Listening: ' + result);

    process.on('beforeExit', () => {
        log('Exiting');
        globalShortcut.unregisterAll();
    });
})();

// Game.ClickCookie = function (e, amount) {
//     var now = Date.now();
//     if (e) e.preventDefault();

//     {
//         if (now - Game.lastClick < (1000 / 15)) {
//             Game.autoclickerDetected += Game.fps;
//             if (Game.autoclickerDetected >= Game.fps * 5) Game.Win('Uncanny clicker');
//         }
//         Game.loseShimmeringVeil('click');
//         var amount = amount ? amount : Game.computedMouseCps;
//         Game.Earn(amount);
//         Game.handmadeCookies += amount;
//         if (Game.prefs.particles) {
//             Game.particleAdd();
//             Game.particleAdd(Game.mouseX, Game.mouseY, Math.random() * 4 - 2, Math.random() * -2 - 2, Math.random() * 0.5 + 0.75, 1, 2);
//         }
//         if (Game.prefs.numbers) Game.particleAdd(Game.mouseX + Math.random() * 8 - 4, Game.mouseY - 8 + Math.random() * 8 - 4, 0, -2, 1, 4, 2, '', '+' + Beautify(amount, 1));

//         Game.runModHook('click');

//         Game.playCookieClickSound();
//         Game.cookieClicks++;

//         if (Game.clicksThisSession == 0) PlayCue('preplay');
//         Game.clicksThisSession++;
//         Game.lastClick = now;
//     }
//     Game.Click = 0;
// }

// var x = 1000; while (x--) Game.ClickCookie()
// Game.ClickCookie(null, 100e9)