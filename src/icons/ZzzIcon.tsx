import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ZzzIcon({
  iconName = 'zzz',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
