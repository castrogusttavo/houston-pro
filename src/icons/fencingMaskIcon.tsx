import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fencingMaskIcon({ iconName = "fencing-mask", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}