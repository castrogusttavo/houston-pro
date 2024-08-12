import React from 'react'
import { Icon, IconProps } from '../Icon'

export function propertyAddIcon({ iconName = "property-add", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}