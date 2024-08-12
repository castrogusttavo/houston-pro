import React from 'react';
import { Icon, IconProps } from '../Icon';

export const customizeIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} iconName="customizeicon" />
);