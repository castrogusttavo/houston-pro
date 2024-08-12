import React from 'react'
import { Icon, IconProps } from '../Icon'

export function store04Icon({ iconName = "store04", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}