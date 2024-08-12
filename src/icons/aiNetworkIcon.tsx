import React from 'react'
import { Icon, IconProps } from '../Icon'

export function aiNetworkIcon({ iconName = "ai-network", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}