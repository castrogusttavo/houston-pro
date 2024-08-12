import React from 'react'
import { Icon, IconProps } from '../Icon'

export function superMarioIcon({ iconName = "super-mario", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}