import React from 'react'
import { Icon, IconProps } from '../Icon'

export function skypeIcon({ iconName = "skype", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}