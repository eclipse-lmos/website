if (typeof window !== 'undefined') {
  const checkCookieAndLoadUmami = () => {
    const cookies = document.cookie.split(';');
    const consentCookie = cookies.find(cookie => cookie.trim() === 'eclipse_cookieconsent_status=allow');

    if (consentCookie) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = "https://cloud.umami.is/script.js";
      script.setAttribute('data-website-id', '25595af3-f689-40eb-8d71-44702fb16891');
      document.head.appendChild(script);
    }
  };

  checkCookieAndLoadUmami();
}
