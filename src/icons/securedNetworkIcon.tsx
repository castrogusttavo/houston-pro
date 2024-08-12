import React from 'react'
import { Icon, IconProps } from '../Icon'

export function securedNetworkIcon({ iconName = "secured-network", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}