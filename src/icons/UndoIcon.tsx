import React from 'react';
import { Icon, IconProps } from '../Icon';

export function UndoIcon({
  iconName = 'undo',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
