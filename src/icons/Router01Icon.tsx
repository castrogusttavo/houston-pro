import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Router01Icon({ iconName = "router01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}