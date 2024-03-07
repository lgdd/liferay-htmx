document.addEventListener('htmx:configRequest', (event) => {
  event.detail.headers['X-Csrf-Token'] = Liferay.authToken;
})