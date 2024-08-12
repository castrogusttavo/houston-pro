import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cellularNetworkOfflineIcon({ iconName = "cellular-network-offline", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}