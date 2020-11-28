import React from 'react';

import NewCounter from '../03/NewCounter';

export default {
  title: 'NewCounter',
  component: NewCounter,
  argTypes: { onClick: { action: 'cliked' } },
};

const Template = (args) => <NewCounter count={0} {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {};
// storiesOf('NewCounter', module).add('기본 설정', () => <NewCounter count={0} />);
