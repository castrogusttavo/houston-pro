import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Group01Icon({
  iconName = 'group-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
