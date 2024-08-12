import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moneyReceiveCircleIcon({ iconName = "money-receive-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}