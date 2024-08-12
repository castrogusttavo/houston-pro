import React from 'react'
import { Icon, IconProps } from '../Icon'

export function steeringIcon({ iconName = "steering", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}