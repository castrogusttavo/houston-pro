import React from 'react'
import { Icon, IconProps } from '../Icon'

export function notification01Icon({ iconName = "notification01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}