import React from 'react'
import { Icon, IconProps } from '../Icon'

export function messengerIcon({ iconName = "messenger", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}