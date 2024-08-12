import React from 'react';
import { Icon, IconProps } from '../Icon';

export const calculateIcon: React.FC<IconProps> = (props) => (
  <Icon {...props} iconName="calculateicon" />
);