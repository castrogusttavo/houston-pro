import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ecoPowerIcon({ iconName = "eco-power", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}