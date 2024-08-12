import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mapsOffIcon({ iconName = "maps-off", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}