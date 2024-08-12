import React from 'react'
import { Icon, IconProps } from '../Icon'

export function skullIcon({ iconName = "skull", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}