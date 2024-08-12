import React from 'react'
import { Icon, IconProps } from '../Icon'

export function noInternetIcon({ iconName = "no-internet", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}