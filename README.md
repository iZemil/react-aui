# React AUI &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iZemil/react-aui/blob/master/LICENSE) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/izemil/react-aui)

React UI library: [Storybook Components](https://izemil.github.io/react-aui/)

## Development

-   run storybook dev server `npm run dev`
-   [commit changes and push](https://semantic-release.gitbook.io/semantic-release/), github actions and semantic realease deploy changes to npm and update github pages automatically

## Production

-   Install [npm package](https://www.npmjs.com/package/react-aui) `npm i react-aui`
-   Init AUIProvider into root of your project:

```jsx
import { IAUI } from 'react-aui';

export const theme: IAUI = {
	mode: 'dark',
	colors: {
		main: '#828bf6',
		text: '#ffffff',
		bg: '#36393f',

		grey: '#c7c9cb',

		red: '#ed4245',
		green: '#3ba55d',
		blue: '#00a6ff',
		orange: '#ffbb33',

		black: '#000000',
		white: '#ffffff',
	},
	paddings: {
		small: 5,
		medium: 10,
		large: 20,
	},
	borderRadius: 4,
	globalStyles: `
		h1, h2, h3, h4 {
			margin: 0;
		}
	`,
};
/ render
<AUIProvider theme={theme}>{/* your frontend components */}</AUIProvider>;
```

### Hooks

-   Snackbars by [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)

```jsx
const { snackOk, snackError, snack } = useSnacks();
```
