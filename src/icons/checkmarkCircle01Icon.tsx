import React from 'react'
import { Icon, IconProps } from '../Icon'

export function checkmarkCircle01Icon({ iconName = "checkmark-circle01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}