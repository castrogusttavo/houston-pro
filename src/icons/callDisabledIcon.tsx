import React from 'react'
import { Icon, IconProps } from '../Icon'

export function callDisabledIcon({ iconName = "call-disabled", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}