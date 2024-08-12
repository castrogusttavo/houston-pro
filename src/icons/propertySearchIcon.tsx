import React from 'react'
import { Icon, IconProps } from '../Icon'

export function propertySearchIcon({ iconName = "property-search", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}