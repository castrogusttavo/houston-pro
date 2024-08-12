import React from 'react'
import { Icon, IconProps } from '../Icon'

export function unhappyIcon({ iconName = "unhappy", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}