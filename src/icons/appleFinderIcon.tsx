import React from 'react'
import { Icon, IconProps } from '../Icon'

export function appleFinderIcon({ iconName = "apple-finder", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}