import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moneySendCircleIcon({ iconName = "money-send-circle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}