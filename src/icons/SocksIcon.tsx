import React from 'react';
import { Icon, IconProps } from '../Icon';

export function SocksIcon({
  iconName = 'socks',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
