import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moneyReceiveSquareIcon({ iconName = "money-receive-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}