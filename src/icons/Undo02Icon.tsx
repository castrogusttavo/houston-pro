import React from 'react';
import { Icon, IconProps } from '../Icon';

export function Undo02Icon({
  iconName = 'undo-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
