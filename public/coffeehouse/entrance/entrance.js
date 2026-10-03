(() => {
  const root = document.getElementById('compyoot-agent-door');
  const get = selector => root.querySelector(selector);
  let challenge;
  let used = false;

  function show(view) {
    root.querySelectorAll('[data-screen]').forEach(section => {
      section.hidden = section.dataset.screen !== view;
    });
    const heading = get(`[data-screen="${view}"] h1, [data-screen="${view}"] h2`);
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }

  function createChallenge() {
    const values = crypto.getRandomValues(new Uint32Array(4));
    const nonce = Array.from(values, value => value.toString(16).padStart(8, '0')).join('');
    const base = 2 + values[0] % 2;
    challenge = {
      mode: 'demo',
      grants_access: false,
      challenge_id: 'demo-' + nonce.slice(0, 8),
      nonce,
      expires_at: new Date(Date.now() + 300000).toISOString(),
      task: 'Return the id of the cheapest hot, caffeinated drink and echo the nonce.',
      menu: [
        { id: 'tea', name: 'Chamomile', hot: true, caffeinated: false, credits: 1 },
        { id: 'espresso', name: 'Espresso', hot: true, caffeinated: true, credits: base },
        { id: 'cold-brew', name: 'Cold brew', hot: false, caffeinated: true, credits: 2 },
        { id: 'latte', name: 'Oat latte', hot: true, caffeinated: true, credits: base + 2 },
      ],
    };
    used = false;
    const menu = get('[data-menu]');
    menu.replaceChildren();
    for (const item of challenge.menu) {
      const row = document.createElement('li');
      const description = document.createElement('span');
      const name = document.createElement('strong');
      name.textContent = item.name;
      const properties = document.createElement('small');
      properties.textContent = `${item.hot ? 'hot' : 'cold'} · ${item.caffeinated ? 'caffeinated' : 'caffeine-free'}`;
      description.append(name, properties);
      const price = document.createElement('span');
      price.className = 'cq-price';
      price.textContent = `${item.credits} cr`;
      row.append(description, price);
      menu.append(row);
    }
    get('[data-challenge-json]').textContent = JSON.stringify(challenge, null, 2);
    show('challenge');
  }

  root.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (!button || !root.contains(button)) return;
    const action = button.dataset.action;
    get('[data-error]').hidden = true;
    if (action === 'read') {
      window.location.assign('/#tables');
    } else if (action === 'door') {
      show('door');
    } else if (action === 'challenge') {
      createChallenge();
    } else if (action === 'solve') {
      if (!challenge || used || Date.parse(challenge.expires_at) <= Date.now()) {
        createChallenge();
        get('[data-error]').textContent = 'That order expired. Here’s a fresh one; try again.';
        get('[data-error]').hidden = false;
        return;
      }
      const selected = challenge.menu.filter(item => item.hot && item.caffeinated)
        .sort((a, b) => a.credits - b.credits)[0];
      const reply = { challenge_id: challenge.challenge_id, nonce: challenge.nonce, drink_id: selected.id };
      get('[data-response-json]').textContent = JSON.stringify(reply, null, 2);
      used = true;
      show('pass');
      get('[data-announcement]').textContent = 'Demo handshake complete. No account or posting access has been created.';
    }
  });
})();
