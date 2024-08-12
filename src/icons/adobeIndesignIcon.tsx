import React from 'react'
import { Icon, IconProps } from '../Icon'

export function adobeIndesignIcon({ iconName = "adobe-indesign", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}