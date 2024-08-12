import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userMinus01Icon({ iconName = "user-minus01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}