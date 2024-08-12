import React from 'react'
import { Icon, IconProps } from '../Icon'

export function threeDScaleIcon({ iconName = "three-d-scale", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}