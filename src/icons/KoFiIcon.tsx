import React from 'react';
import { Icon, IconProps } from '../Icon';

export function KoFiIcon({
  iconName = 'ko-fi',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
