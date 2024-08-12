import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rocket01Icon({ iconName = "rocket01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}