import {VanillaHCaptchaWebComponent} from "./hcaptcha";
export {VanillaHCaptchaWebComponent};

function registerHcaptcha(key = 'h-captcha') {
  if (customElements.get(key)) {
    return console.debug(`Custom element ${key} already registered`);
  }
  customElements.define(key, VanillaHCaptchaWebComponent);
}

export default registerHcaptcha;
