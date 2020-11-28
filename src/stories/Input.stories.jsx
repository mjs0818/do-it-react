import React from 'react';

import Input from '../03/Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  name: 'name',
};
export const label = Template.bind({});
label.args = {
  name: 'name',
  label: '이름',
};
export const action = Template.bind({});
action.args = {
  name: 'name',
  onChange: { aciton: 'change' },
};
// storiesOf('Input', module)
//   .add('기본 설정', () => <Input name="name" />)
//   .add('label 예제', () => <Input name="name" label="이름" />)
//   .add('onChange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />);
