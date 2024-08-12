import React from 'react'
import { Icon, IconProps } from '../Icon'

export function permanentJobIcon({ iconName = "permanent-job", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}