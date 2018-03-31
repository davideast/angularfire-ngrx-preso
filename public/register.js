
function createRefreshButton(registration) {
  const button = document.createElement('button');
  button.style.position = 'sticky';
  button.style.bottom = '24px';
  button.style.left = '24px';
  button.textContent = 'NEW VERSION! REFRESH TO UPDATE';
  button.classList.add('sp-btn', 'sp-btn-full');
  button.addEventListener('click', function() {
    if (!registration.waiting) {
      // Just to ensure registration.waiting is available before
      // calling postMessage()
      return;
    }
    button.disabled = true;
    registration.waiting.postMessage('skipWaiting');
  });
  return button;
}

function showRefreshUI(registration) {
  var button = createRefreshButton(registration);

  button.addEventListener('click', function() {
    if (!registration.waiting) {
      return;
    }

    button.disabled = true;

    registration.waiting.postMessage('skipWaiting');
  });

  document.body.appendChild(button);
};

function onNewServiceWorker(registration, callback) {
  if (registration.waiting) {
    return callback();
  }

  function listenInstalledStateChange() {
    registration.installing.addEventListener('statechange', function(event) {
      if (event.target.state === 'installed') {
        callback();
      }
    });
  };

  if (registration.installing) {
    return listenInstalledStateChange();
  }
  registration.addEventListener('updatefound', listenInstalledStateChange);
}

window.addEventListener('load', function() {
  navigator.serviceWorker.register('/sw.js')
  .then(function (registration) {
    if (!navigator.serviceWorker.controller) {
      return;
    }

    var preventDevToolsReloadLoop;
    navigator.serviceWorker.addEventListener('controllerchange', function(event) {
      if (preventDevToolsReloadLoop) return;
      preventDevToolsReloadLoop = true;
      window.location.reload();
    });

    onNewServiceWorker(registration, function() {
      showRefreshUI(registration);
    });
  });
});
