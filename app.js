// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => {
          console.log('SW Registered', reg);
        })
        .catch(err => console.error('SW registration failed:', err));
    });
  }
  
  // Add to Cart
  document.getElementById('addToCartBtn').addEventListener('click', () => {
    localStorage.setItem('cart', '1 item');
    document.getElementById('cartStatus').innerText = '1 item in cart';
  
    // Sync cart in background
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready.then(sw => {
        return sw.sync.register('sync-cart');
      });
    }
  });
  