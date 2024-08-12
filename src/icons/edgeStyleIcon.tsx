import React from 'react'
import { Icon, IconProps } from '../Icon'

export function edgeStyleIcon({ iconName = "edge-style", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}