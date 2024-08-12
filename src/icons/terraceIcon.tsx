import React from 'react'
import { Icon, IconProps } from '../Icon'

export function terraceIcon({ iconName = "terrace", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}