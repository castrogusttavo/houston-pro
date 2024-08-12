import React from 'react'
import { Icon, IconProps } from '../Icon'

export function licensePinIcon({ iconName = "license-pin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}