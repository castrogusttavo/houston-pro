import React from 'react'
import { Icon, IconProps } from '../Icon'

export function policeCapIcon({ iconName = "police-cap", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}