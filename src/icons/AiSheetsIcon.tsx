import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiSheetsIcon({
  iconName = 'ai-sheets',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
