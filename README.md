# React AUI &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iZemil/react-aui/blob/master/LICENSE) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/izemil/react-aui)

[React AUI library Storybook Components](https://izemil.github.io/react-aui/)

## Development

-   run storybook dev server `npm run dev`
-   [commit changes and push](https://semantic-release.gitbook.io/semantic-release/), github actions and semantic realease deploy changes to npm and update github pages automatically

## Production

-   Install [npm package](https://www.npmjs.com/package/react-aui) `npm i react-aui`
-   Init AUIProvider into root of your project:

```jsx
import { GlobalStyles, ITheme, darkTheme, color } from 'react-aui';

const theme: ITheme = {
	...darkTheme, / ...or your options
};
const App = () => {
	return (
		<AUIProvider theme={theme}>
			<GlobalStyles normalize>
				{(t) => `
					html {
						color-scheme: dark;
					}

					body {
						font-family: Arial, sans-serif;
						background-color: ${color('bg')({ theme: t })};
						color: ${color('text')({ theme: t })};
						transition: 0.3s background;
					}
				`}
			</GlobalStyles>

			{/* react components... */}
		</AUIProvider>
	);
};
```
