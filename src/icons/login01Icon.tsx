import React from 'react'
import { Icon, IconProps } from '../Icon'

export function login01Icon({ iconName = "login01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}