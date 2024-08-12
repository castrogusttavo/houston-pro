import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moveBottomIcon({ iconName = "move-bottom", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}