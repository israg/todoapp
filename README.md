#TO-DO APP UI Tests

TO-DO App için hazırlanan UI Test senaryoları

##Kurulum

Senaryoların çalıştırılabilmesi için proje içerisinde webdriver.io kütüphanesinin aşağıdaki package'ların indirilmesi gerekiyor

WebdriverIO - test runner için gerekli paketler
```bash
npm i --save-dev @wdio/cli
```
```bash
npm i --save-dev @wdio/mocha-framework
```
```bash
npm i --save-dev @wdio/local-runner
```
```bash
npm i --save-dev @wdio/spec-reporter
```
```bash
npm i --save-dev @wdio/sync
```
```bash
npm i --save-dev webdriverio
```
Appium kütüphanesinin kullanilebilmesi için gerekli paketler
```bash
npm i --save-dev @wdio/appium-service
```

## Kullanım

Senaryoları lokalde çalıştırabilmek için terminal'e
```
npm run local.app
```

yazmak yeterli olur.

Senaryolarla ilgili tüm konfigürasyonlar config klasörünün altında yer almaktadır. *wdio.conf.js* dosyasında lokal ve ileride olması muhtemel remote ortamlar için kullanılan ortak özellikler yer almaktadır.

*wdio.conf.js*
```Javascript
runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    // Appium Service config
    // see details: https://webdriver.io/docs/appium-service.html
    appium: {
        command: 'appium',
    },
```

sadece lokal ortamlarda değişiklik yapmak istenirse *wdio.local.app.conf.js* dosyası altında değişiklik yapılabilir.

*wdio.local.app.conf.js* 

```
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        deviceName: 'emulator-5554',
        platformVersion: '9.0',
        orientation: 'PORTRAIT',
        automationName: 'UiAutomator2',
        app: '/Users/isranarman/Desktop/app-mock-debug.apk',
        noReset: false,
        newCommandTimeout: 240,
        autoGrantPermissions: true,
    },
];
```

Testlerin koştuğu spec'ler ile ilgili bir değişiklik veya yeni bir suite oluşturulmak istenirse dosyanın içine eklenmesi yeterli olur.
```
config.specs = [
    './test/specs/**/*.spec.js',
];

config.suites = {
    task: [
        './test/specs/task/*.spec.js',
    ],
};
```

Tests klasörünün altında 3 adet dosya vardır. Bunlar *data*, *pageObjects* ve *specs*.

**data:**
Bu klasörün altında static text bilgileri yer almaktadır.

**pageObjects:**
Bu klasörün altında kullanılan sayfayla alakalı element ve method'lar yer almaktadır. Eğer sayfada bir değişiklik olmuşsa veya yeni bir senaryo eklenecekse ilgili dosyanın güncellenmesi gerekmektedir.

**specs:**
Bu klasörün altında kullanılan mocha framework'üne göre hazırlanmış test senaryoları yer almaktadır.
