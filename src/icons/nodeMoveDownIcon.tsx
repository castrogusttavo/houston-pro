import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nodeMoveDownIcon({ iconName = "node-move-down", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}