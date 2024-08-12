import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userBlock01Icon({ iconName = "user-block01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}