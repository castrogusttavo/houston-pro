import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserCheck01Icon({ iconName = "user-check01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}