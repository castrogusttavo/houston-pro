import React from 'react'
import { Icon, IconProps } from '../Icon'

export function smartIcon({ iconName = "smart", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}