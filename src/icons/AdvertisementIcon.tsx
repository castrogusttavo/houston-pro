import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AdvertisementIcon({ iconName = "advertisement", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}