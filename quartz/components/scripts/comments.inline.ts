document.addEventListener("themechange", (e) => {
  const theme = e.detail.theme === 'light' ?  'light_protanopia' : 'dark_protanopia'

  function sendMessage(message: { setConfig: { theme: string } }) {
    const iframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement;
    if (!iframe) return;
    iframe.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app');
  }

  sendMessage({
    setConfig: {
      theme: theme
    }
  });
})


document.addEventListener("DOMContentLoaded", () => {
  const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  const currentTheme = localStorage.getItem("theme") ?? userPref
  if (currentTheme === "dark") {return} // default is dark theme

  const theme = currentTheme === "light" ? "light_protanopia" : "dark_protanopia"

  const existingGiscusContainer = document.getElementById('giscus-container');

  if (existingGiscusContainer) {
    // Remove the existing Giscus instance
    existingGiscusContainer.innerHTML = '';
  }

  // Create a new container element for Giscus
  const newGiscusContainer = document.createElement('div');
  newGiscusContainer.id = 'giscus-container';
  document.body.appendChild(newGiscusContainer);

  // Create a new script element with the updated data-theme attribute
  const newScript = document.createElement('script');
  newScript.src = 'https://giscus.app/client.js';
  newScript.setAttribute('data-repo', 'shrimptqm/zjevt-me');
  newScript.setAttribute('data-repo-id', 'R_kgDOL65cmw');
  newScript.setAttribute('data-category', 'Announcements');
  newScript.setAttribute('data-category-id', 'DIC_kwDOL65cm84CfU21');
  newScript.setAttribute('data-mapping', 'pathname');
  newScript.setAttribute('data-strict', '0');
  newScript.setAttribute('data-reactions-enabled', '1');
  newScript.setAttribute('data-emit-metadata', '0');
  newScript.setAttribute('data-input-position', 'top');
  newScript.setAttribute('data-theme', 'preferred_color_scheme');
  newScript.setAttribute('data-lang', 'zh-CN');
  newScript.setAttribute('data-loading', 'lazy');
  newScript.setAttribute('crossOrigin', 'anonymous');
  newScript.async = true;

  // Append the new script to the Giscus container
  newGiscusContainer.appendChild(newScript);
})