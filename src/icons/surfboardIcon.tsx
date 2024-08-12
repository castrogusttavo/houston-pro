import React from 'react'
import { Icon, IconProps } from '../Icon'

export function surfboardIcon({ iconName = "surfboard", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}