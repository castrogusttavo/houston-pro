import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wallet01Icon({ iconName = "wallet01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}