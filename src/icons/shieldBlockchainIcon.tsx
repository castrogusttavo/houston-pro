import React from 'react'
import { Icon, IconProps } from '../Icon'

export function shieldBlockchainIcon({ iconName = "shield-blockchain", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}