import React from 'react'
import { Icon, IconProps } from '../Icon'

export function sealIcon({ iconName = "seal", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}