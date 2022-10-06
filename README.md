# React AUI &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iZemil/react-aui/blob/master/LICENSE) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/izemil/react-aui)

React UI library: [Storybook Components](https://izemil.github.io/react-aui/)

## Development

-   run storybook dev server `npm run dev`
-   [commit changes and push](https://semantic-release.gitbook.io/semantic-release/), github actions and semantic realease deploy changes to npm and update github pages automatically

## Production

-   Install [npm package](https://www.npmjs.com/package/react-aui) `npm i react-aui`
-   Init AUIProvider into root of your project:

```jsx
import { IAUI, darkTheme, lightTheme } from 'react-aui';

/ render
<AUIProvider themes={[lightTheme, darkTheme]} active={1}>
	{/* your frontend components */}
</AUIProvider>;
```
