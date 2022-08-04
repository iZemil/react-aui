module.exports = {
	stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		'storybook-addon-styled-component-theme/dist/preset',
		'@storybook/addon-essentials',
	],
};
