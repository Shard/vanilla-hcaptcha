import {VanillaHCaptchaWebComponent} from "./hcaptcha";
export {VanillaHCaptchaWebComponent};

function registerHcaptcha() {
    customElements.define('h-captcha', VanillaHCaptchaWebComponent);
}

export default registerHcaptcha;
