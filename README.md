# React AUI

React UI library [Storybook Demo](https://izemil.github.io/react-aui/)

## Development

-   run storybook dev server `npm run dev`
-   [commit changes and push](https://semantic-release.gitbook.io/semantic-release/), github actions and semantic realease deploy changes to npm and update github pages automatically

## Production

-   install [npm package](https://www.npmjs.com/package/react-aui) `npm i react-aui`
-   init AUIProvider into root of your project:

```jsx
const theme: IAUI = {
    ...yourTheme
}

// ...
<AUIProvider theme={theme}>
    {/* your frontend components */}
</AUIProvider>
```

-   TODO: how to use snackbars [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)
