import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowMoveRightDownIcon({ iconName = "arrow-move-right-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}