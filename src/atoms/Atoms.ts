import { atom } from 'recoil';

enum Elements {
  Image,
  Heading,
  Row,
}

enum FontSize {
  'text-xl',
  'text-2xl',
  'text-3xl',
}
export const htmlTreeState = atom({
  key: 'htmTree',
  default: [
    {
      id: 3,
      type: Elements[Elements.Heading],
      options: {
        text: 'This is a normal heading.',
        class: FontSize[FontSize['text-3xl']],
      },
    },
    {
      id: 2,
      type: Elements[Elements.Heading],
      options: {
        text: 'Another heading.',
        class: FontSize[FontSize['text-3xl']],
      },
    },
  ],
});
