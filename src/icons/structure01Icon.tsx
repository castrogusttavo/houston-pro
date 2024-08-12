import React from 'react'
import { Icon, IconProps } from '../Icon'

export function structure01Icon({ iconName = "structure01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}