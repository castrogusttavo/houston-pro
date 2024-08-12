import React from 'react'
import { Icon, IconProps } from '../Icon'

export function idVerifiedIcon({ iconName = "id-verified", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}