import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Pen01Icon({
  iconName = 'pen-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
