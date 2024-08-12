import React from 'react'
import { Icon, IconProps } from '../Icon'

export function routeBlockIcon({ iconName = "route-block", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}