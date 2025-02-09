"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var console_1 = require("console");
var electron_1 = require("electron");
// node_modules\.bin\electron clicker.js
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _process, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, console_1.log)('Waiting electron ready');
                return [4 /*yield*/, electron_1.app.whenReady()];
            case 1:
                _a.sent();
                (0, console_1.log)('Ready');
                _process = null;
                result = electron_1.globalShortcut.register('F1', function () {
                    if (_process) {
                        _process.kill();
                        _process = null;
                    }
                    else {
                        _process = (0, child_process_1.spawn)('node', ["".concat(__dirname, "/clickfest.js")], { stdio: 'inherit' });
                    }
                });
                (0, console_1.log)('Listening: ' + result);
                process.on('beforeExit', function () {
                    (0, console_1.log)('Exiting');
                    electron_1.globalShortcut.unregisterAll();
                });
                return [2 /*return*/];
        }
    });
}); })();
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
