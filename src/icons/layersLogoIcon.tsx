import React from 'react'
import { Icon, IconProps } from '../Icon'

export function layersLogoIcon({ iconName = "layers-logo", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}