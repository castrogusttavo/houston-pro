import React from 'react'
import { Icon, IconProps } from '../Icon'

export function medalFirstPlaceIcon({ iconName = "medal-first-place", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}