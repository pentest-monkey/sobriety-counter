<!-- Icon for Apple/iOS devices -->
<link rel="apple-touch-icon" href="https://peercoach.org/images/logo.png">

<!-- Register the service worker script -->
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Service Worker Registered'));
  }
</script>
