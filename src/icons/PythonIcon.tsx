import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PythonIcon({
  iconName = 'python',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
