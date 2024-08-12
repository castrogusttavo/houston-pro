import React from 'react'
import { Icon, IconProps } from '../Icon'

export function xml01Icon({ iconName = "xml01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}