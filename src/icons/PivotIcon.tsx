import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PivotIcon({
  iconName = 'pivot',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
