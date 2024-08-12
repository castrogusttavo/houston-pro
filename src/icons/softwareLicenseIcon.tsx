import React from 'react'
import { Icon, IconProps } from '../Icon'

export function softwareLicenseIcon({ iconName = "software-license", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}