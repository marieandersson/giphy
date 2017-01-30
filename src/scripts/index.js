let LOADED = false;

/**
 * Bootstrap the application on load.
 *
 * @return {void}
 */
function bootstrap () {
  // We don't want to load our application twice.
  if (LOADED) {
    return;
  }

  LOADED = true;

  console.log('The Giphy application has been loaded.');

  // When the application is loaded we remove the event listeners.
  document.removeEventListener('DOMContentLoaded', bootstrap);
  window.removeEventListener('load', bootstrap);
}

// We setup two listeners for better browser support.
document.addEventListener('DOMContentLoaded', bootstrap);
window.addEventListener('load', bootstrap);
