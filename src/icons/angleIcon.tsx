import React from 'react'
import { Icon, IconProps } from '../Icon'

export function angleIcon({ iconName = "angle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}