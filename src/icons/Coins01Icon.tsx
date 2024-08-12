import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Coins01Icon({ iconName = "coins01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}