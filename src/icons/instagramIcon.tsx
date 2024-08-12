import React from 'react'
import { Icon, IconProps } from '../Icon'

export function instagramIcon({ iconName = "instagram", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}