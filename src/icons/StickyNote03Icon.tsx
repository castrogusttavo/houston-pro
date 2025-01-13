import React from 'react';
import { Icon, IconProps } from '../Icon';

export function StickyNote03Icon({
  iconName = 'sticky-note-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
