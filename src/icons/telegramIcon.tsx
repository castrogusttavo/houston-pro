import React from 'react'
import { Icon, IconProps } from '../Icon'

export function telegramIcon({ iconName = "telegram", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}