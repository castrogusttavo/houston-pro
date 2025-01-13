import React from 'react';
import { Icon, IconProps } from '../Icon';

export function DatevIcon({
  iconName = 'datev',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
