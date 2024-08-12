import React from 'react'
import { Icon, IconProps } from '../Icon'

export function airdropIcon({ iconName = "airdrop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}