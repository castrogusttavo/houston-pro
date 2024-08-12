import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userStar01Icon({ iconName = "user-star01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}