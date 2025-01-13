import React from 'react';
import { Icon, IconProps } from '../Icon';

export function AudioWave01Icon({
  iconName = 'audio-wave-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
