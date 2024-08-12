import React from 'react'
import { Icon, IconProps } from '../Icon'

export function minimize01Icon({ iconName = "minimize01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}