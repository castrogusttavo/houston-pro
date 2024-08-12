import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowMoveLeftDownIcon({ iconName = "arrow-move-left-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}