import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AiWebBrowsingIcon({
  iconName = 'ai-web-browsing',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
