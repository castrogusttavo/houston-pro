import React from 'react'
import { Icon, IconProps } from '../Icon'

export function adobeAfterEffectIcon({ iconName = "adobe-after-effect", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}