import React from 'react';
import { Icon, IconProps } from '../Icon';

export function HighlighterIcon({
  iconName = 'highlighter',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
