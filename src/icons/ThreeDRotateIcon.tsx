import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThreeDRotateIcon({ iconName = "three-d-rotate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}