import React from 'react';
import { Icon, IconProps } from '../Icon';

export function HorseSaddleIcon({
  iconName = 'horse-saddle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
