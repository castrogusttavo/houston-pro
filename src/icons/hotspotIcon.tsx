import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hotspotIcon({ iconName = "hotspot", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}