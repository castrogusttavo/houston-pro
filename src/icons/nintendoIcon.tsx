import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nintendoIcon({ iconName = "nintendo", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}