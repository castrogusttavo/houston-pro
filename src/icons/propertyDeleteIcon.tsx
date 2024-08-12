import React from 'react'
import { Icon, IconProps } from '../Icon'

export function propertyDeleteIcon({ iconName = "property-delete", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}