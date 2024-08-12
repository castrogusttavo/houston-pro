import React from 'react'
import { Icon, IconProps } from '../Icon'

export function userArrowLeftRightIcon({ iconName = "user-arrow-left-right", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}