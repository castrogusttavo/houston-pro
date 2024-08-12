import React from 'react'
import { Icon, IconProps } from '../Icon'

export function viewIcon({ iconName = "view", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}