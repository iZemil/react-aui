import { Icon } from '.';
import * as React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';

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
				<Icon icon={BsQuestionCircle} />
			</Container.$>
			<Container.$>
				<span>base icon set</span>
				<Icon icon={Icon.Base.Info} />
				<Icon.Base.Info />
			</Container.$>
			<Container.$>
				<span>change color</span>
				<Icon icon={BsQuestionCircle} color="red" />
				<Icon icon={BsQuestionCircle} color="blue" />
				<Icon icon={BsQuestionCircle} color="pink" />
				<Icon icon={BsQuestionCircle} color="#00ff00" />
			</Container.$>

			<Container.$>
				<Icon icon={Icon.Base.Info} size="small" />
				<Icon icon={Icon.Base.Info} size="medium" />
				<Icon icon={Icon.Base.Info} size="large" />
			</Container.$>
		</Container.$>
	);
};

export const BasicSet = () => {
	const snack = useSnacks();

	return (
		<Container.$ column>
			<Container.$ style={{ flexWrap: 'wrap' }}>
				{Object.entries(Icon.Base).map(([name, baseIcon]) => (
					<CopyButton
						key={name}
						value={() => {
							snack.success(`Copied: ${name}`);

							return `<Icon icon={Icon.Base.${name}} />`;
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
