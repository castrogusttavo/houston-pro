import React from 'react'
import { Icon, IconProps } from '../Icon'

export function keffiyehIcon({ iconName = "keffiyeh", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}