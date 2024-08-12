import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Clock01Icon({ iconName = "clock01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}