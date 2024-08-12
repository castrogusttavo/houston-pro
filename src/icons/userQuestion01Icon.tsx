import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userQuestion01Icon({ iconName = "user-question01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}