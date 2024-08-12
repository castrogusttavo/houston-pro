import React from 'react'
import { Icon, IconProps } from '../Icon'

export function layerAddIcon({ iconName = "layer-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}