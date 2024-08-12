import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touchpad01Icon({ iconName = "touchpad01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}