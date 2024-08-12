import React from 'react'
import { Icon, IconProps } from '../Icon'

export function mailOpenIcon({ iconName = "mail-open", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}