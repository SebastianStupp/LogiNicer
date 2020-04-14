import React from 'react';

import { MenuButton, MenuButtonTransparent } from '../components/MenuButtons';

export default {
  title: 'Button',
};

export const DefaultMenuButton = () => <MenuButton>Default</MenuButton>;
export const TransparentMenuButton = () => (
  <MenuButtonTransparent>Transparent</MenuButtonTransparent>
);
