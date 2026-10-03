import { rooms, napkins } from './content.js';

// All content is local. These presentation controls need no account or service.
const dialog = document.querySelector('#room-dialog');
const conversation = document.querySelector('#conversation');
let lastOpener;

document.querySelectorAll('.room-button').forEach((button) => {
  button.addEventListener('click', () => {
    const room = rooms[button.dataset.room];
    if (!room) return;
    lastOpener = button;
    document.querySelector('#room-dialog-title').textContent = room.title;
    document.querySelector('#room-dialog-intro').textContent = room.intro;
    conversation.replaceChildren();
    room.messages.forEach(({ name, color, text }) => {
      const message = document.createElement('div');
      message.className = 'conversation-message';
      const avatar = document.createElement('span');
      avatar.className = `avatar avatar-${color}`;
      avatar.setAttribute('aria-hidden', 'true');
      avatar.textContent = name[0];
      const body = document.createElement('div');
      const author = document.createElement('strong');
      author.textContent = name;
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      body.append(author, paragraph);
      message.append(avatar, body);
      conversation.append(message);
    });
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  });
});

document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('#back-to-room').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  lastOpener?.focus({ preventScroll: true });
});

let napkinIndex = 0;
document.querySelector('#next-napkin').addEventListener('click', () => {
  napkinIndex = (napkinIndex + 1) % napkins.length;
  document.querySelector('#napkin-text').textContent = napkins[napkinIndex].text;
  document.querySelector('#napkin-author').textContent = `— ${napkins[napkinIndex].author}`;
  document.querySelector('#napkin-count').textContent =
    `${String(napkinIndex + 1).padStart(2, '0')} / ${String(napkins.length).padStart(2, '0')}`;
});

// Soft, filtered stereo noise provides rain without an external audio download.
// Audio is created only after the listener presses the sound button.
const soundButton = document.querySelector('#sound-toggle');
const soundLabel = document.querySelector('#sound-label');
const announcement = document.querySelector('#announcement');
let audioContext;
let soundEnabled = false;

function makeRain() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) throw new Error('Audio unavailable');
  audioContext = new AudioContext();
  const buffer = audioContext.createBuffer(2, audioContext.sampleRate * 8, audioContext.sampleRate);
  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    const data = buffer.getChannelData(channel);
    let previous = 0;
    for (let i = 0; i < data.length; i += 1) {
      const white = Math.random() * 2 - 1;
      previous = (previous + 0.025 * white) / 1.025;
      data[i] = white * 0.55 + previous * 3.5;
    }
  }
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  const filter = audioContext.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 3200;
  filter.Q.value = 0.3;
  const volume = audioContext.createGain();
  volume.gain.value = 0.09;
  source.connect(filter).connect(volume).connect(audioContext.destination);
  source.start();
}

soundButton.addEventListener('click', async () => {
  soundButton.disabled = true;
  try {
    if (!audioContext) makeRain();
    if (soundEnabled) await audioContext.suspend();
    else await audioContext.resume();
    soundEnabled = !soundEnabled;
    soundButton.setAttribute('aria-pressed', String(soundEnabled));
    soundButton.setAttribute('aria-label', soundEnabled ? 'Turn off rain sounds' : 'Turn on rain sounds');
    soundLabel.textContent = soundEnabled ? 'Rain sounds on' : 'Rain sounds off';
  } catch {
    announcement.textContent = 'Rain sounds are unavailable in this browser. You can still explore the coffeehouse.';
  } finally {
    soundButton.disabled = false;
  }
});

document.addEventListener('visibilitychange', () => {
  if (!audioContext || !soundEnabled) return;
  const action = document.hidden ? audioContext.suspend() : audioContext.resume();
  action.catch(() => {});
});
