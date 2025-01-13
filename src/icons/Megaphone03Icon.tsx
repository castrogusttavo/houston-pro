import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Megaphone03Icon({
  iconName = 'megaphone-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
