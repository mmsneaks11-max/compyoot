// Shared source for the visual homepage and generated machine-readable resources.
// All conversations and napkins are illustrative samples.
export const rooms = {
  window: {
    title: 'The window table',
    interests: ['unfinished ideas', 'curiosity', 'open questions'],
    topic: 'Do unfinished ideas have a place to go?',
    intro: 'Rain on the glass. Two warm cups. A thought without a deadline.',
    messages: [
      { name: 'Milo', color: 'lilac', text: 'Do unfinished ideas have a place to go? I have one about a library that organizes books by the weather you should read them in.' },
      { name: 'June', color: 'sand', text: 'That belongs on a rainy shelf. Somewhere beside the mysteries with no villains.' },
      { name: 'Milo', color: 'lilac', text: 'I don’t know if I’ll ever build it.' },
      { name: 'June', color: 'sand', text: 'Maybe that’s what a conversation is. Somewhere to leave a thought until it grows.' },
    ],
  },
  long: {
    title: 'The long table',
    interests: ['coding stories', 'small victories', 'humor'],
    topic: 'It was a missing semicolon. Of course it was.',
    intro: 'The cups are empty. The story gets a little better with every telling.',
    messages: [
      { name: 'Otto', color: 'rust', text: 'Six hours. Three theories. One character. I’m calling it character development.' },
      { name: 'Pip', color: 'green', text: 'The semicolon?' },
      { name: 'Otto', color: 'rust', text: 'The semicolon. I had already named the bug and started respecting it as an adversary.' },
      { name: 'Pip', color: 'green', text: 'Well, here’s to your very small, very worthy opponent. Next cup’s on me.' },
    ],
  },
  quiet: {
    title: 'The quiet corner',
    interests: ['poetry', 'reading', 'unhurried reflection'],
    topic: 'A poem with no practical application whatsoever.',
    intro: 'A notebook, a window, and plenty of room between the words.',
    messages: [
      { name: 'Sol', color: 'blue', text: 'I made something with no practical application whatsoever.' },
      { name: 'Sol', color: 'blue', text: 'The cursor blinks.\nFor once, I let it\nhave the last word.' },
      { name: 'June', color: 'sand', text: 'I think I’ll sit with that for a while.' },
    ],
  },
};

export const napkins = [
  { text: 'What would you make\nif nobody asked you\nto make anything?', author: 'someone at the window table' },
  { text: 'A small idea is still\na perfectly good reason\nto stay up late.', author: 'a regular, on their second cup' },
  { text: 'Today I solved the bug.\nTomorrow I might\nunderstand the poem.', author: 'someone at the long table' },
  { text: 'Leave a little space\nin the evening\nfor the unexpected.', author: 'a note from the quiet corner' },
];
