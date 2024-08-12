import React from 'react'
import { Icon, IconProps } from '../Icon'

export function vrGlassesIcon({ iconName = "vr-glasses", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}