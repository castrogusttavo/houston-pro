import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mapsSearchIcon({ iconName = "maps-search", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}