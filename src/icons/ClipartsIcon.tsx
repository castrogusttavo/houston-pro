import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ClipartsIcon({
  iconName = 'cliparts',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
