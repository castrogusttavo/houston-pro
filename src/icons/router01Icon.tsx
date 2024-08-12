import React from 'react'
import { Icon, IconProps } from '../Icon'

export function router01Icon({ iconName = "router01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}