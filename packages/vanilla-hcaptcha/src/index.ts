import {VanillaHCaptchaWebComponent} from "./hcaptcha";
export {VanillaHCaptchaWebComponent};

function registerHcaptcha(key = 'h-captcha') {
    customElements.define(key, VanillaHCaptchaWebComponent);
}

export default registerHcaptcha;
