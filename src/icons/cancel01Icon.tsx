import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cancel01Icon({ iconName = "cancel01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}