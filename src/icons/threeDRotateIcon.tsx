import React from 'react'
import { Icon, IconProps } from '../Icon'

export function threeDRotateIcon({ iconName = "three-d-rotate", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}