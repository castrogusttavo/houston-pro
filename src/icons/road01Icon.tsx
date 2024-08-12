import React from 'react'
import { Icon, IconProps } from '../Icon'

export function road01Icon({ iconName = "road01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}