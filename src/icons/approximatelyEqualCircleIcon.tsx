import React from 'react'
import { Icon, IconProps } from '../Icon'

export function approximatelyEqualCircleIcon({ iconName = "approximately-equal-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}