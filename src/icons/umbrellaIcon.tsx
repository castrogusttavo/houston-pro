import React from 'react'
import { Icon, IconProps } from '../Icon'

export function umbrellaIcon({ iconName = "umbrella", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}