import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moneySendSquareIcon({ iconName = "money-send-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}