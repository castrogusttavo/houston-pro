import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ChildIcon({
  iconName = 'child',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
