import React from 'react'
import { Icon, IconProps } from '../Icon'

export function geologyCrustIcon({ iconName = "geology-crust", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}