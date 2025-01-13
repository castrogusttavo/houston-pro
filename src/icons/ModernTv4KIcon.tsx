import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ModernTv4KIcon({
  iconName = 'modern-tv-4-k',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
