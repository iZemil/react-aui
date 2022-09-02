import { Tab, Tabs } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Tabs,
};

export const Basic = () => {
	const [tabIndex, setTabIndex] = React.useState(0);

	return (
		<Container.$ column>
			<Tabs activeIndex={tabIndex} onChange={setTabIndex}>
				<Tab index={0} content={<p>first content</p>}>
					first
				</Tab>
				<Tab index={1} content={<p>second content</p>}>
					second
				</Tab>
				<Tab index={2} content={<p>third content</p>}>
					third
				</Tab>
			</Tabs>
		</Container.$>
	);
};

export const Size = () => {
	const [tabIndex, setTabIndex] = React.useState(0);

	return (
		<Container.$ column>
			<Tabs activeIndex={tabIndex} onChange={setTabIndex} size="small">
				<Tab index={0}>first</Tab>
				<Tab index={1}>second</Tab>
				<Tab index={2}>third</Tab>
			</Tabs>

			<Tabs activeIndex={tabIndex} onChange={setTabIndex} size="medium">
				<Tab index={0}>first</Tab>
				<Tab index={1}>second</Tab>
				<Tab index={2}>third</Tab>
			</Tabs>

			<Tabs activeIndex={tabIndex} onChange={setTabIndex} size="large">
				<Tab index={0}>first</Tab>
				<Tab index={1}>second</Tab>
				<Tab index={2}>third</Tab>
			</Tabs>
		</Container.$>
	);
};
