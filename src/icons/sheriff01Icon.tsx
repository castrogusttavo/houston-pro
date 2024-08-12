import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sheriff01Icon({ iconName = "sheriff01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}