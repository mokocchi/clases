document.querySelectorAll('.discord-copy').forEach((button) => {
  button.addEventListener('click', async () => {
    const username = button.dataset.discord;
    let copied = false;

    try {
      await navigator.clipboard.writeText(username);
      copied = true;
    } catch {
      const helper = document.createElement('textarea');
      helper.value = username;
      helper.setAttribute('readonly', '');
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      copied = document.execCommand('copy');
      helper.remove();
    }

    button.textContent = copied ? 'Copiado' : 'Seleccioná y copiá';
    window.setTimeout(() => {
      button.textContent = 'Copiar';
    }, 1500);
  });
});
