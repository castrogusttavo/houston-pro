import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cloudServerIcon({ iconName = "cloud-server", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}