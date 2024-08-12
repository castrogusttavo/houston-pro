import React from 'react'
import { Icon, IconProps } from '../Icon'

export function carrotIcon({ iconName = "carrot", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}