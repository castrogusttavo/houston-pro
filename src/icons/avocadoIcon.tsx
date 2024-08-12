import React from 'react'
import { Icon, IconProps } from '../Icon'

export function avocadoIcon({ iconName = "avocado", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}