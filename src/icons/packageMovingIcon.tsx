import React from 'react'
import { Icon, IconProps } from '../Icon'

export function packageMovingIcon({ iconName = "package-moving", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}