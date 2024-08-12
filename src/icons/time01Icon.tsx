import React from 'react'
import { Icon, IconProps } from '../Icon'

export function time01Icon({ iconName = "time01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}