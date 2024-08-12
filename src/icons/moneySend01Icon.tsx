import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moneySend01Icon({ iconName = "money-send01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}