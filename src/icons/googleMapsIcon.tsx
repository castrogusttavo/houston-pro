import React from 'react'
import { Icon, IconProps } from '../Icon'

export function googleMapsIcon({ iconName = "google-maps", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}