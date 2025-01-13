import React from 'react';
import { Icon, IconProps } from '../Icon';

export function MenuTwoLineIcon({
  iconName = 'menu-two-line',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
