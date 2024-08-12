import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mapsEditingIcon({ iconName = "maps-editing", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}