import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chartRelationshipIcon({ iconName = "chart-relationship", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}