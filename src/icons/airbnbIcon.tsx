import React from 'react'
import { Icon, IconProps } from '../Icon'

export function airbnbIcon({ iconName = "airbnb", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}