import { Icon } from '.';
import * as React from 'react';
import type { IconType } from 'react-icons';

import { useSnacks } from '../../utils';
import { CopyButton } from '../Button/CopyButton';
import Container from '../Container';

export default {
	component: Icon,
};

export const Basic = () => {
	return (
		<Container.$ column>
			<Container.$>
				<span>react-icons</span>
				<Icon icon={Icon.base.Info} />
			</Container.$>
			<Container.$>
				<span>base icon set</span>
				<Icon icon={Icon.base.Info} />
				<Icon icon={Icon.base.Info} />
			</Container.$>
			<Container.$>
				<span>change color</span>
				<Icon icon={Icon.base.Info} color="red" />
				<Icon icon={Icon.base.Info} color="blue" />
				<Icon icon={Icon.base.Info} color="pink" />
				<Icon icon={Icon.base.Info} color="#00ff00" />
			</Container.$>

			<Container.$>
				<Icon icon={Icon.base.Info} size="small" />
				<Icon icon={Icon.base.Info} size="medium" />
				<Icon icon={Icon.base.Info} size="large" />
			</Container.$>
		</Container.$>
	);
};

export const BasicSet = () => {
	const snack = useSnacks();

	return (
		<Container.$ column>
			<Container.$ style={{ flexWrap: 'wrap' }}>
				{Object.entries(Icon.base).map(([name, baseIcon]) => (
					<CopyButton
						key={name}
						value={() => {
							snack.success(`Copied: ${name}`);

							return `<Icon icon={Icon.base.${name}} />`;
						}}
						withoutIcon
					>
						<Icon icon={baseIcon} size={20} />
					</CopyButton>
				))}
			</Container.$>
		</Container.$>
	);
};

export const AllSet = () => {
	const snack = useSnacks();

	return (
		<Container.$ column>
			<Container.$ style={{ flexWrap: 'wrap' }}>
				{Object.entries(Icon.all).map(([name, baseIcon]) => (
					<CopyButton
						key={name}
						value={() => {
							snack.success(`Copied: ${name}`);

							return `<Icon icon={Icon.all.${name}} />`;
						}}
						withoutIcon
					>
						<Icon icon={baseIcon as IconType} size={20} />
					</CopyButton>
				))}
			</Container.$>
		</Container.$>
	);
};
