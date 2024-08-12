import React from 'react'
import { Icon, IconProps } from '../Icon'

export function contactIcon({ iconName = "contact", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}