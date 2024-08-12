import React from 'react'
import { Icon, IconProps } from '../Icon'

export function desertIcon({ iconName = "desert", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}