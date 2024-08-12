import React from 'react'
import { Icon, IconProps } from '../Icon'

export function courtHouseIcon({ iconName = "court-house", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}