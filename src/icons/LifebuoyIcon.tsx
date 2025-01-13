import React from 'react';
import { Icon, IconProps } from '../Icon';

export function LifebuoyIcon({
  iconName = 'lifebuoy',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
