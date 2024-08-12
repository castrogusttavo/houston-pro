import React from 'react'
import { Icon, IconProps } from '../Icon'

export function licenseThirdPartyIcon({ iconName = "license-third-party", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}