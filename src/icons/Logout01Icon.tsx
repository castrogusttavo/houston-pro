import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Logout01Icon({ iconName = "logout01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}