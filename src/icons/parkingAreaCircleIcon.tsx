import React from 'react'
import { Icon, IconProps } from '../Icon'

export function parkingAreaCircleIcon({ iconName = "parking-area-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}