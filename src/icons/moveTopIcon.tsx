import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moveTopIcon({ iconName = "move-top", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}