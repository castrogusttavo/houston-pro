import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Time01Icon({ iconName = "time01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}