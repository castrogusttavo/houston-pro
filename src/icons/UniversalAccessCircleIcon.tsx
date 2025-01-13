import React from 'react';
import { Icon, IconProps } from '../Icon';

export function UniversalAccessCircleIcon({
  iconName = 'universal-access-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
