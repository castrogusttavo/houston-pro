import React from 'react';
import { Icon, IconProps } from '../Icon';

export function LiveStreaming01Icon({
  iconName = 'live-streaming-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
