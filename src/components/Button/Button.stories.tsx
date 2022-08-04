import { Button, EButton } from './index';

export default {
	title: 'Button title',
	component: Button,
};

export const PrimiryBasic = () => <Button kind={EButton.Primary}>Button</Button>;

export const BorderedButton = () => <Button kind={EButton.Border}>Button</Button>;

export const GhostButton = () => <Button kind={EButton.Ghost}>Button</Button>;
