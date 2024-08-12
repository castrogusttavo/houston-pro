import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pentagonIcon({ iconName = "pentagon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}