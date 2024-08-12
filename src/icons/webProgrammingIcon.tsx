import React from 'react'
import { Icon, IconProps } from '../Icon'

export function webProgrammingIcon({ iconName = "web-programming", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}