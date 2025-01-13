import React from 'react';
import { Icon, IconProps } from '../Icon';

export function BackMuscleBodyIcon({
  iconName = 'back-muscle-body',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
