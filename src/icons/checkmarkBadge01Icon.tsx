import React from 'react'
import { Icon, IconProps } from '../Icon'

export function checkmarkBadge01Icon({ iconName = "checkmark-badge01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}