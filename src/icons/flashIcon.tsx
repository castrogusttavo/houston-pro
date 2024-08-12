import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flashIcon({ iconName = "flash", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}