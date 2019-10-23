"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fortunes = require('fortune-cookie');
class FortuneCookieExtension {
    async openFortuneCookie(param) {
        let fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        param.storyState.fortuneCookieMessage = fortunes[Math.floor(Math.random() * fortunes.length)];
    }
}
exports.FortuneCookieExtension = FortuneCookieExtension;
