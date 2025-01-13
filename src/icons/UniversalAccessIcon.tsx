import React from 'react';
import { Icon, IconProps } from '../Icon';

export function UniversalAccessIcon({
  iconName = 'universal-access',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
