import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserBlock01Icon({ iconName = "user-block01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}