"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SampleCustomExtension_1 = require("./SampleCustomExtension");
const FortuneCookieExtension_1 = require("./FortuneCookieExtension");
const sfb_skill_1 = require("@alexa-games/sfb-skill");
class ExtensionLoader {
    constructor(param) {
        this.registeredExtensions = [
            new sfb_skill_1.AlexaExtension(),
            new sfb_skill_1.AlexaAPLExtension(param.locale, param.configAccessor),
            new sfb_skill_1.AlexaAudioPlayerExtension(param.locale, param.configAccessor),
            new sfb_skill_1.AlexaMonetizationExtension(param.locale, param.configAccessor),
            new SampleCustomExtension_1.SampleCustomExtension(),
            new FortuneCookieExtension_1.FortuneCookieExtension(),
        ];
    }
    getExtensions() {
        return this.registeredExtensions;
    }
}
exports.ExtensionLoader = ExtensionLoader;
