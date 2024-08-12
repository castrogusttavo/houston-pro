import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moveToIcon({ iconName = "move-to", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}