import React from 'react'
import { Icon, IconProps } from '../Icon'

export function polygonIcon({ iconName = "polygon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}