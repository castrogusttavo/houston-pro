import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moveIcon({ iconName = "move", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}