import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Fire03Icon({
  iconName = 'fire-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
