import React from 'react';
import { Icon, IconProps } from '../Icon';

export function ShapeCollectionIcon({
  iconName = 'shape-collection',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />;
}
