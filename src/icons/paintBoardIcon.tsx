import React from 'react'
import { Icon, IconProps } from '../Icon'

export function paintBoardIcon({ iconName = "paint-board", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}