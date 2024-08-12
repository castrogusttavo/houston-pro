import React from 'react'
import { Icon, IconProps } from '../Icon'

export function drag01Icon({ iconName = "drag01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}