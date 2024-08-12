import React from 'react'
import { Icon, IconProps } from '../Icon'

export function adobeXdIcon({ iconName = "adobe-xd", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}