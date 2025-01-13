import React from 'react';
import { Icon, IconProps } from '../Icon';

export function KanbanIcon({
  iconName = 'kanban',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
