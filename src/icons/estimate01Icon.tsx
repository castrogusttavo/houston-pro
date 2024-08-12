import React from 'react'
import { Icon, IconProps } from '../Icon'

export function estimate01Icon({ iconName = "estimate01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}