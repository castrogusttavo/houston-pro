import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cellularNetworkIcon({ iconName = "cellular-network", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}