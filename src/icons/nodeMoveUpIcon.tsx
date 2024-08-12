import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nodeMoveUpIcon({ iconName = "node-move-up", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}