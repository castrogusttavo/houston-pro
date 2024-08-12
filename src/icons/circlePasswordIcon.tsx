import React from 'react'
import { Icon, IconProps } from '../Icon'

export function circlePasswordIcon({ iconName = "circle-password", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}