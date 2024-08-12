import React from 'react'
import { Icon, IconProps } from '../Icon'

export function packageProcessIcon({ iconName = "package-process", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}