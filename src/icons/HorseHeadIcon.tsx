import React from 'react';
import { Icon, IconProps } from '../Icon';

export function HorseHeadIcon({
  iconName = 'horse-head',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
