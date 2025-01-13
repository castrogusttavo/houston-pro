import React from 'react';
import { Icon, IconProps } from '../Icon';

export function MaleSymbolIcon({
  iconName = 'male-symbol',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
