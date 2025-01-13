import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StarAward02Icon({
  iconName = 'star-award-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
