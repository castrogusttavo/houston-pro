import React from 'react'
import { Icon, IconProps } from '../Icon'

export function nikeIcon({ iconName = "nike", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}