import React from 'react'
import { Icon, IconProps } from '../Icon'

export function clock01Icon({ iconName = "clock01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}