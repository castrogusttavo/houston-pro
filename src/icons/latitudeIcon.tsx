import React from 'react'
import { Icon, IconProps } from '../Icon'

export function latitudeIcon({ iconName = "latitude", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}