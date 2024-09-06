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
var xtools_1 = require("@lunarade/xtools");
var chroma_js_1 = require("chroma-js");
var console_1 = require("console");
var robotjs_1 = require("robotjs");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    function waitForFish() {
        var deferred = (0, xtools_1.defer)();
        var interval = setInterval(function () {
            var capturePoints = [
                { x: width / 2 - 20, y: height / 2 - 216 },
                { x: width / 2 + 5, y: height / 2 - 195 }
            ];
            for (var _i = 0, capturePoints_1 = capturePoints; _i < capturePoints_1.length; _i++) {
                var _a = capturePoints_1[_i], x = _a.x, y = _a.y;
                var color = robotjs_1.screen.capture(x, y, 1, 1).colorAt(0, 0);
                var distance = (0, chroma_js_1.deltaE)((0, chroma_js_1.hex)(color), caughtColor);
                (0, console_1.log)('Color: ' + color + ' Distance: ' + distance);
                4;
                if (distance < 5) {
                    clearInterval(interval);
                    deferred.resolve();
                    break;
                }
            }
        }, 300);
        return deferred.promise;
    }
    var caughtColor, _a, width, height;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                caughtColor = (0, chroma_js_1.hex)('e0e1e9');
                _a = (0, robotjs_1.getScreenSize)(), width = _a.width, height = _a.height;
                (0, console_1.log)('Started');
                (0, console_1.log)('Selecting fishing rod');
                (0, robotjs_1.keyTap)('4');
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 6];
                (0, console_1.log)('Throwing hook');
                (0, robotjs_1.mouseToggle)('down', 'right');
                return [4 /*yield*/, (0, xtools_1.sleep)(100)];
            case 2:
                _b.sent();
                (0, robotjs_1.mouseToggle)('up', 'right');
                (0, console_1.log)('Waiting for previous bubble to disappear');
                return [4 /*yield*/, (0, xtools_1.sleep)(1500)];
            case 3:
                _b.sent();
                (0, console_1.log)('Waiting');
                return [4 /*yield*/, waitForFish()];
            case 4:
                _b.sent();
                (0, console_1.log)('Reeling');
                (0, robotjs_1.mouseClick)('right');
                return [4 /*yield*/, (0, xtools_1.sleep)(200)];
            case 5:
                _b.sent();
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}); })();
