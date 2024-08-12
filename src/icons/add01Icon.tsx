import React from 'react'
import { Icon, IconProps } from '../Icon'

export function add01Icon({ iconName = "add01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}