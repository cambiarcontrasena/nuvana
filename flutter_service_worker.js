'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1c55727c7d171532d22d883c0c01de45",
"index.html": "a78dbd840df6062cd7590a6850f47399",
"/": "a78dbd840df6062cd7590a6850f47399",
"main.dart.js": "4a2cf2c9a29c8a19602757859b900884",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"redes.png": "23d07c49fd4c58a3e3abcd2e018a0a7d",
".git/config": "459872312337ae249f3142c16927caae",
".git/objects/95/a71fd27b3fd962fad0fc43fe4c9883ff65634a": "c936b663aa9df66abbf41946d133f815",
".git/objects/68/2664eecc20d83823fdf356bae93ff03bd5d460": "1470725a9baba2d0bf267ad854766636",
".git/objects/03/70d5cf9d2f9390ee3d8a96cd533018882ffac4": "e5e86c9d5b45039a78e4eae1f4dd8cf1",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/1c589ac1bff9688a4368501030e9b20b617ef7": "779c42d906fbc63613576b305869c255",
".git/objects/d1/7b06d29ee0266ee2bf933363a47b5c18743b49": "a37ad05349197e83f7bc50917bbeac9a",
".git/objects/ae/d595d953cf2d690af6ebe8e10a1387d00416a0": "f836b8d458989a6f73f2b9f07d43ec00",
".git/objects/ae/cfdc6a86c2c88054635b39811bc5e8c16957c4": "40cd70085a3b4a10201f373d09769acd",
".git/objects/d8/9b621a4d5520ad6591197f29cb99131032a490": "7344cb2cd3e1871c512b72c8fad21c62",
".git/objects/e5/4263978095df6f1b68b37afbce5a029390d04a": "9c002086ef250346b3dd4d92a60a7528",
".git/objects/e2/acf510421e2ea2ed7df605aa99bd5e0d254c5e": "4f94e6a3f15a36f1c7f28059486d0382",
".git/objects/c7/8618db5c0dd5dcb16cc7b5d3840ab14bdce82c": "6d2e1944cb150cd65dcccdba9239d6b6",
".git/objects/f2/ab8a72e3346a6dfd3e1e3f8d37fc4a781c5c5f": "a22f024198457be2ac9049868d0835b6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/1c1e8e695b25de13e091606ac39b5e8fda2c3d": "f21dc885f99bb80053bb77890f56c91a",
".git/objects/8f/a0816f8d1c1f810cf1483a637da1783e22fbe9": "478eda3c266f318d4668842a0e818b56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/be64e8eb7590efca7f3675cb59e7c4b6c03956": "506783649eeeca940b2143ebfd97dce8",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/2244aa079288e9268616b1ce5613bc4444ad37": "99461bce170cb8d6b371774ae9326d7b",
".git/objects/36/7841a4ba970d2402fe875ba14b9d4704abdc6b": "0a206ad945d32aa5aa56d21a8316d25b",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/96/dde09a17fe242f928ac9fbaafb0387e0910b03": "9c8444ec99c66f39fcd4b8bcb829db82",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/06/04da7f5ccd3c6064a46424defeef038820c2ad": "9c4dcc49880a52c9d4b60acaaed082fd",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/c15ca45699ce5e4d5d8145586cabc7df80f7d1": "898b5c8a81d25d23ccae47c9f68ccbfe",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c2/0ca90ce1116d655632b3ab9878fd64c79ac888": "c8ce8b58bf945006458728739e8f1708",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/f5d7139ddf1571cb0109ad2ccca305fb868ba3": "4d5acf57fa26431a081ce8921f137791",
".git/objects/4f/129082beb1612ad099689235f2a865dede3376": "66b32038c63839b20c4b837314e82af8",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/1d/69be4dd8f7d0923c44e0bc90d30cb7dcb13c8c": "7b51f120ee5eee0cd6010fe1de7dbd00",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/2e/edfea0988deb4b6ae5417a11840dfeff405c1f": "ade27b29e1c6d27ec4f52762d5acd6f7",
".git/objects/47/cba8eab985902a49e10e899c5225e018715189": "b32eec9f129f5aadc1edad0c15288cba",
".git/objects/8e/5c2759d5411364dba253cf0fd56175fe69f1d9": "4fe91f7cf246d706bb00a125654bf3aa",
".git/objects/25/1edb9457b374ca39871f23cb308dbf5a8e3091": "b042b424c00ad3a213be1fdbbe3d3e65",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ffdb2498ae30bc9b747ab3d8b5df555e",
".git/logs/refs/heads/main": "ffdb2498ae30bc9b747ab3d8b5df555e",
".git/logs/refs/remotes/origin/main": "72cbbed9a6d2cc42c60efcf62d1b3683",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c8b342d4a69cf4c764d5da9be787077c",
".git/refs/remotes/origin/main": "c8b342d4a69cf4c764d5da9be787077c",
".git/index": "9793df9850a7a18f9ae6842bd6a2166f",
".git/COMMIT_EDITMSG": "8b2fea08a1516b5bda2171f7e1f9f147",
"assets/AssetManifest.json": "6a63d78124e412cdf5250f451a21a35b",
"assets/NOTICES": "a6221d176dd2febe5d5785ed2c3c834f",
"assets/FontManifest.json": "7ca2153d57c68cfb916151ca28a19ef8",
"assets/AssetManifest.bin.json": "8c4a4c2f9e682c1965642135282f276f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ddbff6ae8ef4eb65be5ff902b93afb71",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d0ac55f4f803e05d41c3871baef49a6a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "258cfb03f86a58a822b886d3f05d59c5",
"assets/fonts/MaterialIcons-Regular.otf": "a4f5feb0732509052336dfc18cf80d02",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Frame_2.png": "af89553bf31e0cee66e95874d85da3c6",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/redes.png": "23d07c49fd4c58a3e3abcd2e018a0a7d",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/MyFlutterApp.ttf": "898a79e178fee491eed50df0e27b32c4",
"fav.png": "6e6b24b848185aa98b90d82ab5ba903f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
