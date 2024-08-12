import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sofaSingleIcon({ iconName = "sofa-single", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}