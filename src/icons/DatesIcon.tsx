import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DatesIcon({ iconName = "dates", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}