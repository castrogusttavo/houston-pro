import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sentIcon({ iconName = "sent", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}