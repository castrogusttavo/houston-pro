import React from 'react'
import { Icon, IconProps } from '../Icon'

export function betaIcon({ iconName = "beta", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}