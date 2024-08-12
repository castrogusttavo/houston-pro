import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flowCircleIcon({ iconName = "flow-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}