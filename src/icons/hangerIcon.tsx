import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hangerIcon({ iconName = "hanger", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}