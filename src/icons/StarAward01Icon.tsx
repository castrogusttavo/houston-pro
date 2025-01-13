import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StarAward01Icon({
  iconName = 'star-award-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
