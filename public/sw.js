/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "assets/af-combine-0.png",
    "revision": "9293f3c9a9a164c3d5db1e7e709feebb"
  },
  {
    "url": "assets/af-combine-1.png",
    "revision": "e3527a4bd2d2e8e9bf5c724dfb0631c8"
  },
  {
    "url": "assets/af-combine-2.png",
    "revision": "79363fb5443b7701d5282ff71f431935"
  },
  {
    "url": "assets/af-combine-3.png",
    "revision": "77cb6c2ed6739c694dae44c7d2ae4867"
  },
  {
    "url": "assets/af-combine-4.png",
    "revision": "d02e49b54bb951b8f8800019ffc3e2c7"
  },
  {
    "url": "assets/af-combine-5.png",
    "revision": "cc2466c734869836b0668ae9ac86f951"
  },
  {
    "url": "assets/af-combine-6.png",
    "revision": "58d84757d3cc4809087c9b030c470fdc"
  },
  {
    "url": "assets/af-combine-7.png",
    "revision": "20480932861906bb8b50ab7a90b7f666"
  },
  {
    "url": "assets/af-compare-0.png",
    "revision": "b314697777cf0974d3ef3b5d2d916a3c"
  },
  {
    "url": "assets/af-compare-1.png",
    "revision": "131e0dfb4b9ef4afdc4e6219d14f6bf9"
  },
  {
    "url": "assets/af-compare-2.png",
    "revision": "18992279847b0e7f6592faa66786f95a"
  },
  {
    "url": "assets/af-compare-3.png",
    "revision": "b9d46e7651f7e6bc59c59dd25cf2af9e"
  },
  {
    "url": "assets/af-features-0.png",
    "revision": "be142475b917acd374c618d5be1a692e"
  },
  {
    "url": "assets/af-features-1.png",
    "revision": "359377a375e4f171a8260e9a0cb50b60"
  },
  {
    "url": "assets/af-features-2.png",
    "revision": "9e3ea74ee28050bfc66e5e8e171b71cb"
  },
  {
    "url": "assets/af-features-3.png",
    "revision": "a6e7aca3ed84bea3b31d8e57d07c3555"
  },
  {
    "url": "assets/af-features-4.png",
    "revision": "b3e17dfe077e2de883c05e1054b86108"
  },
  {
    "url": "assets/af-features-5.png",
    "revision": "f0dbea8cee07d8897514e6e38a2c4fc1"
  },
  {
    "url": "assets/af-model-0.png",
    "revision": "67ec9fa689e4d4b021cd10944162a823"
  },
  {
    "url": "assets/af-model-1.png",
    "revision": "21ab8dd3cdc21ae13fa58309926dc8ea"
  },
  {
    "url": "assets/af-model-2.png",
    "revision": "aad94f2ec751f72fcac557e2eba34022"
  },
  {
    "url": "assets/af-model-3.png",
    "revision": "ab06dd2d7740a021b0f9de8a1e0bfe53"
  },
  {
    "url": "assets/af-ngrx-combined.png",
    "revision": "e23e8bcfc63cbfe66803ab6aa3bac0cc"
  },
  {
    "url": "assets/af-ngrx-compare-0.png",
    "revision": "dd604288e0df9c54a1de6afefd85dc48"
  },
  {
    "url": "assets/af-ngrx-compare-1.png",
    "revision": "980b7fd2f556c6e0c89af9009e1430ed"
  },
  {
    "url": "assets/af-ngrx-problem-0.png",
    "revision": "38f29aee69b05a9375dc4005ee27ea6e"
  },
  {
    "url": "assets/af-ngrx-problem-1.png",
    "revision": "8de3d9f10376260d58546cf1548109aa"
  },
  {
    "url": "assets/af-ngrx-problem-2.png",
    "revision": "0b674a583591223c30b3db9c10c0c2ac"
  },
  {
    "url": "assets/af-ngrx-problem-3.png",
    "revision": "0892b0413e74f41787cd4ed2c42369ff"
  },
  {
    "url": "assets/af-ngrx-problem-4.png",
    "revision": "330f047ace62a1516adcf66e0fc62632"
  },
  {
    "url": "assets/af-ngrx-problem-explainer-0.png",
    "revision": "b7928dc7a7dcba492ac827f26dbaf260"
  },
  {
    "url": "assets/af-ngrx-problem-explainer-1.png",
    "revision": "8c1f49b2d6e8184080ef7248fd2d6346"
  },
  {
    "url": "assets/af-ngrx-problem-explainer-2.png",
    "revision": "6118d6df2fd8ac8089bd55869085153c"
  },
  {
    "url": "assets/af-redux-api-0.png",
    "revision": "12a696e7f438b9df44e93b9f745bb584"
  },
  {
    "url": "assets/af-redux-api-1.png",
    "revision": "736870b609f04954077837f0a88bc7ae"
  },
  {
    "url": "assets/af-redux-api-2.png",
    "revision": "4a881be67ca53b37740eb20f3f3f7444"
  },
  {
    "url": "assets/af-redux-api-3.png",
    "revision": "4064a0c01a40ad6ecfb1521b24124723"
  },
  {
    "url": "assets/af-remote-selector-0.png",
    "revision": "9293f3c9a9a164c3d5db1e7e709feebb"
  },
  {
    "url": "assets/af-remote-selector-1.png",
    "revision": "e3527a4bd2d2e8e9bf5c724dfb0631c8"
  },
  {
    "url": "assets/af-remote-selector-2.png",
    "revision": "8bb21007e7890fdd29d1857a8d43949e"
  },
  {
    "url": "assets/af-remote-selector-3.png",
    "revision": "2f0ba3186be6af20de42ec13708d2a6f"
  },
  {
    "url": "assets/af-remote-selector-4.png",
    "revision": "50e70d2d81cae65d85d6114caf660ebf"
  },
  {
    "url": "assets/afs-api-0.png",
    "revision": "da5456d199ea2d8cea8402eb0a7113ed"
  },
  {
    "url": "assets/afs-api-1.png",
    "revision": "73658942dfc8abbda9310247524d4a76"
  },
  {
    "url": "assets/afs-api-2.png",
    "revision": "de86668b3c50eb7483d8fb8ab96e4654"
  },
  {
    "url": "assets/afs-api-3.png",
    "revision": "f75134ecdb7dd7278447978a752eb67e"
  },
  {
    "url": "assets/afs-api-4.png",
    "revision": "7251046fff72609cadf1d94e98df8058"
  },
  {
    "url": "assets/angularfire-github.png",
    "revision": "3c16eb80535c2f6d6ac0b0bdd861c328"
  },
  {
    "url": "assets/angularfireredux-api.png",
    "revision": "4064a0c01a40ad6ecfb1521b24124723"
  },
  {
    "url": "assets/angularfireredux.png",
    "revision": "c3155af03f6d39d8df6b67f42dfd943a"
  },
  {
    "url": "assets/angularfirestore-api-0.png",
    "revision": "ef9eea3f158ee2f7b148cf4a6f6d6f0c"
  },
  {
    "url": "assets/angularfirestore-api-1.png",
    "revision": "ead6a5a7a5bb0b0217fa257cc18396f6"
  },
  {
    "url": "assets/angularfirestore-api-2.png",
    "revision": "7eabcd4b0651fd27522a8015bbb6a751"
  },
  {
    "url": "assets/angularfirestore.png",
    "revision": "38e0d5dabaf6f9a4a2f71fc90e92ab9b"
  },
  {
    "url": "assets/app-state.png",
    "revision": "8484838a83c86dbbdc8b08719eb9504f"
  },
  {
    "url": "assets/compare.png",
    "revision": "b9d46e7651f7e6bc59c59dd25cf2af9e"
  },
  {
    "url": "assets/data-sync.gif",
    "revision": "aa6bc583a20b4bb63c5ac5316b6bcb3b"
  },
  {
    "url": "assets/firebase-auth.png",
    "revision": "0bda9d2164af1e6902331ffccb32dd9c"
  },
  {
    "url": "assets/firebase-cloud-messaging.png",
    "revision": "67fd8d07b2578b9fa47c8a6191bccfb6"
  },
  {
    "url": "assets/firebase-features-0.png",
    "revision": "689a99af9b5f6f1c340a5222a936285c"
  },
  {
    "url": "assets/firebase-features-1.png",
    "revision": "ed9f87bcc09c7a3d5dbab4e698d51aac"
  },
  {
    "url": "assets/firebase-features-2.png",
    "revision": "9a8c53c4310558082897d6f79cdcfe54"
  },
  {
    "url": "assets/firebase-features-3.png",
    "revision": "39ae8e62c0ae69939857178633d4617a"
  },
  {
    "url": "assets/firebase-features-4.png",
    "revision": "2ef2c686ff8be9d48155369119dcb165"
  },
  {
    "url": "assets/firebase-features-5.png",
    "revision": "e47e6f0714504e74a474b1a00506ac51"
  },
  {
    "url": "assets/firebase-features-6.png",
    "revision": "984b93be98dacaa5a83c37e9be6928a4"
  },
  {
    "url": "assets/firebase-firestore.png",
    "revision": "3c3c006567103e47ebe0ca20b59e0ab2"
  },
  {
    "url": "assets/firebase-functions.png",
    "revision": "9564fd6c9ce80c3e572b2b084f8f72f3"
  },
  {
    "url": "assets/firebase-hosting.png",
    "revision": "6571b429c12d5da78a9ea3667f273192"
  },
  {
    "url": "assets/firebase-lockup.png",
    "revision": "a296a9a4afee05ec3d33f2244f9f3d2b"
  },
  {
    "url": "assets/firebase-site.png",
    "revision": "bb9023145554e49a12286ff9295131e8"
  },
  {
    "url": "assets/firebase-storage.png",
    "revision": "8661602881b0cd6d73af2291473d2ca2"
  },
  {
    "url": "assets/local-remote-interface.png",
    "revision": "0248f3c2026b32780ad09121542eadfa"
  },
  {
    "url": "assets/mvc.png",
    "revision": "a32e0d43da16ab84e8774a2f6b7da6d8"
  },
  {
    "url": "assets/ngrx-boilerplate-0.png",
    "revision": "bd30ee2f83bddd6ba4ca1fa41441db6c"
  },
  {
    "url": "assets/ngrx-boilerplate-1.png",
    "revision": "31ee95d9c0d4528e0197141067ece5fe"
  },
  {
    "url": "assets/ngrx-boilerplate-actions-0.png",
    "revision": "9ed63f876da214725d40b17c1bbf9e63"
  },
  {
    "url": "assets/ngrx-boilerplate-actions-1.png",
    "revision": "ae232eaf07979dc79fbeb8119ab8757f"
  },
  {
    "url": "assets/ngrx-boilerplate-actions-2.png",
    "revision": "69f463c568b68150d7f8aea87a893c1d"
  },
  {
    "url": "assets/ngrx-boilerplate-actions-3.png",
    "revision": "6d811bd9c4028786db5c9989bb6c2a37"
  },
  {
    "url": "assets/ngrx-boilerplate-actions-4.png",
    "revision": "96c167ac24e69db18103583e003a6424"
  },
  {
    "url": "assets/ngrx-boilerplate-actions-5.png",
    "revision": "356b8d14e4b32e1f14b41d19b5288178"
  },
  {
    "url": "assets/ngrx-boilerplate-actions-6.png",
    "revision": "bd30ee2f83bddd6ba4ca1fa41441db6c"
  },
  {
    "url": "assets/ngrx-boilerplate-reducer-0.png",
    "revision": "beafd70cac541b5ed0aacd9528bcc469"
  },
  {
    "url": "assets/ngrx-boilerplate-reducer-1.png",
    "revision": "6e37aadc29f9a5459b992c7317422472"
  },
  {
    "url": "assets/ngrx-boilerplate-reducer-2.png",
    "revision": "8e85728f40144b6d5ed1264dec4748bb"
  },
  {
    "url": "assets/ngrx-boilerplate-reducer-3.png",
    "revision": "8297cdb3ff75fc1d7bab18c05c218aac"
  },
  {
    "url": "assets/ngrx-boilerplate-reducer-4.png",
    "revision": "0673776b5369506a6805bc82d8044db9"
  },
  {
    "url": "assets/ngrx-boilerplate-reducer-5.png",
    "revision": "387fb774c45d2b357d79f828bc583e2e"
  },
  {
    "url": "assets/ngrx-boilerplate-reducer-6.png",
    "revision": "d32175f2affe9de586871a250cdb3d14"
  },
  {
    "url": "assets/ngrx-model-0.png",
    "revision": "dd604288e0df9c54a1de6afefd85dc48"
  },
  {
    "url": "assets/ngrx-model-1.png",
    "revision": "de54d934e961df35720f1f540c214744"
  },
  {
    "url": "assets/ngrx-model-2.png",
    "revision": "3e8d98bb4e6a889e77c7e2fe29357e88"
  },
  {
    "url": "assets/ngrx-model-3.png",
    "revision": "1836afe91c146afff864f824e4faee34"
  },
  {
    "url": "assets/redux.png",
    "revision": "3463213bf7a674971ab80cc9a6f0eeff"
  },
  {
    "url": "assets/state-local-remote-0.png",
    "revision": "c2d8ad72b6e4babcf90755a385ec63ee"
  },
  {
    "url": "assets/state-local-remote-1.png",
    "revision": "e32fd6b142cf060e19bc36f5828a8656"
  },
  {
    "url": "assets/state-local-remote-2.png",
    "revision": "67f6d66438e105a7758b016b291fae20"
  },
  {
    "url": "assets/state-local-remote-3.png",
    "revision": "dc0ab97d4954b545b5216e75b70b1d3e"
  },
  {
    "url": "assets/state-local-remote-4.png",
    "revision": "c34205b7928e5157bb22b575b97162c9"
  },
  {
    "url": "assets/state-local-remote-5.png",
    "revision": "56a8503d73207f1262ced95563784422"
  },
  {
    "url": "assets/state-local-remote-6.png",
    "revision": "b4e764b06d649e5c63ef282a806026cc"
  },
  {
    "url": "assets/view-model.png",
    "revision": "47ed5de863551dee9667f8571a021300"
  },
  {
    "url": "assets/yarn-add-af-redux.png",
    "revision": "b10c514a4f6995164a3660872c49afa3"
  },
  {
    "url": "css/preso.css",
    "revision": "7a65e435dd0215cbf4df69a22d13c53f"
  },
  {
    "url": "css/print/paper.css",
    "revision": "e0099451ed09800b0fc64e1d797d1813"
  },
  {
    "url": "css/print/pdf.css",
    "revision": "b512476228735191f96708576b98ccfd"
  },
  {
    "url": "css/reveal.css",
    "revision": "16f1e0d27b8b868db463fd83fca7e408"
  },
  {
    "url": "css/theme/beige.css",
    "revision": "d4486bdbc493a0e7cc9d3934e69c3ca8"
  },
  {
    "url": "css/theme/night.css",
    "revision": "6a3238e41874df3da0642975f41790bb"
  },
  {
    "url": "css/theme/serif.css",
    "revision": "7f9093806952fc3f7c7735409ebc1e02"
  },
  {
    "url": "css/theme/simple.css",
    "revision": "454eb054a3b42060fb9d48a9d1b41f66"
  },
  {
    "url": "css/theme/sky.css",
    "revision": "4c3004931d338df8b3805932e29886ec"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "b956798f2c67cadd054cf4421c40a9b1"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "ac31764b8b66424c958418a5704fb18a"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "42f04ebe7a85bb8390eedbbfaa949e79"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "5fe83693f9f0631d39a4c2f76ed94874"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "b1f16b53b693053f22d5bf1f91bea810"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "33516be0c15c714072c46ab7630e8fb6"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "582274c1507d9df8d0a30fd3acb35b5b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "05f3c35d2c66d72ee7c294bae65d4db0"
  },
  {
    "url": "index.html",
    "revision": "056a0d9d63d73f285b753b3af128c628"
  },
  {
    "url": "js/reveal.js",
    "revision": "be61270988d260dbbe94e89dd39b2ea8"
  },
  {
    "url": "lib/css/zenburn.css",
    "revision": "28d5b9497037a12cb5a15644fea2f1c3"
  },
  {
    "url": "lib/font/league-gothic/league-gothic.css",
    "revision": "e6633e92d60a05952ee0ac403a364699"
  },
  {
    "url": "lib/font/league-gothic/league-gothic.eot",
    "revision": "9900a4643cc63c5d8f969d2196f72572"
  },
  {
    "url": "lib/font/league-gothic/league-gothic.ttf",
    "revision": "91295fa87df918411b49b7531da5d558"
  },
  {
    "url": "lib/font/league-gothic/league-gothic.woff",
    "revision": "cd382dc8a9d6317864b5810a320effc5"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-italic.eot",
    "revision": "72217712eb8d28872e7069322f3fda23"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-italic.ttf",
    "revision": "8256cfd7e4017a7690814879409212cd"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-italic.woff",
    "revision": "e74f0128884561828ce8c9cf5c284ab8"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-regular.eot",
    "revision": "1d71438462d532b62b05cdd7e6d7197d"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-regular.ttf",
    "revision": "2da39ecf9246383937da11b44b7bd9b4"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-regular.woff",
    "revision": "e7acc589bb558fe58936a853f570193c"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibold.eot",
    "revision": "0f3da1edf1b5c6a94a6ad948a7664451"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibold.ttf",
    "revision": "f3565095e6c9158140444970f5a2c5ed"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibold.woff",
    "revision": "1cb8e94f1185f1131a0c895165998f2b"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibolditalic.eot",
    "revision": "58153ac7194e141d1e73ea88c6b63861"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibolditalic.ttf",
    "revision": "c7e698a4d0956f4a939f42a05685bbf5"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibolditalic.woff",
    "revision": "6b058fc2634b01d837c3432316c3141f"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro.css",
    "revision": "50bd311455fff1130be7d191108d9f27"
  },
  {
    "url": "lib/js/classList.js",
    "revision": "daeaae1afb79c4577c26fc099228cb44"
  },
  {
    "url": "lib/js/head.min.js",
    "revision": "cda51f90890bc6411432994f00ec49c5"
  },
  {
    "url": "lib/js/html5shiv.js",
    "revision": "ff0e20a524223e4c3972e0d907e0877b"
  },
  {
    "url": "plugin/print-pdf/print-pdf.js",
    "revision": "5240a61efa87e3ae66fb8c8d0fe1d1f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
