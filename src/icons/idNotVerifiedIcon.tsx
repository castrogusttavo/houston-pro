import React from 'react'
import { Icon, IconProps } from '../Icon'

export function idNotVerifiedIcon({ iconName = "id-not-verified", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}