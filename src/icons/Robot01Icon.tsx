import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Robot01Icon({
  iconName = 'robot-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
