import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mapsRefreshIcon({ iconName = "maps-refresh", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}