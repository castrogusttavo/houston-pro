import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hotspotOfflineIcon({ iconName = "hotspot-offline", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}