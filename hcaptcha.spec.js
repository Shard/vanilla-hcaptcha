require('./dist/hcaptcha-component.min.js');

describe('hCaptcha Vanilla Web Component', () => {
    const mockCaptchaId = 42069;
    let spyOptions = null;

    beforeEach(() => {
        window.hcaptcha = {
            render: (el, opt) => {
                spyOptions = opt;
                return mockCaptchaId;
            },
            execute: () => {}
        };
        document.body.innerHTML = `
            <h-captcha id="signupCaptcha"
                       site-key="10000000-ffff-ffff-ffff-000000000001"></h-captcha>`;
    });

    test('Loaded event emission and set of hcaptchaId', () => {
        const spyExecute = jest.spyOn(window.hcaptcha, 'execute');
        const signupCaptcha = document.getElementById('signupCaptcha');
        signupCaptcha.render();
        expect(spyExecute).toHaveBeenCalledWith(mockCaptchaId);
        spyExecute.mockRestore();
    });

    test('Verified event emission', (done) => {
        const mockReturnKey = 'mock-hcaptcha-key';
        const signupCaptcha = document.getElementById('signupCaptcha');
        signupCaptcha.addEventListener('verified', (e) => {
            expect(e.key).toBe(mockReturnKey);
            done();
        });
        spyOptions.callback(mockReturnKey);
    });

    test('Error event emission', (done) => {
        const mockError = 'invalid-site-key';
        const signupCaptcha = document.getElementById('signupCaptcha');
        signupCaptcha.addEventListener('error', (e) => {
            expect(e.error).toBe(mockError);
            done();
        });
        spyOptions['error-callback'](mockError);
    });

    test('Expired event emission', (done) => {
        const signupCaptcha = document.getElementById('signupCaptcha');
        signupCaptcha.addEventListener('expired', () => {
            done();
        });
        spyOptions['expired-callback']();
    });
});