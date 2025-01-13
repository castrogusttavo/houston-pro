import React from 'react';
import { Icon, IconProps } from '../Icon';

export function PerplexityAiIcon({
  iconName = 'perplexity-ai',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
