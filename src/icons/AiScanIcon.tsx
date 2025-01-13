import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiScanIcon({
  iconName = 'ai-scan',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
