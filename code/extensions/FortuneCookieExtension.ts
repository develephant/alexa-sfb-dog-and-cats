import { InstructionExtension, InstructionExtensionParameter } from '@alexa-games/sfb-f';

let fortunes = require('fortune-cookie');

/**
 * Custom Instruction Extension
 */
export class FortuneCookieExtension implements InstructionExtension {
    public async openFortuneCookie(param: InstructionExtensionParameter): Promise<void> {
        let fortune = fortunes[Math.floor( Math.random() * fortunes.length )] 

        param.storyState.fortuneCookieMessage = fortunes[Math.floor( Math.random() * fortunes.length )];    
    }
}