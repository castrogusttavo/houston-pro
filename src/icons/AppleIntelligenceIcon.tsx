import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AppleIntelligenceIcon({
  iconName = 'apple-intelligence',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
