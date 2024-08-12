import React from 'react'
import { Icon, IconProps } from '../Icon'

export function threeDMoveIcon({ iconName = "three-d-move", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}