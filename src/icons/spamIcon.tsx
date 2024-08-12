import React from 'react'
import { Icon, IconProps } from '../Icon'

export function spamIcon({ iconName = "spam", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}