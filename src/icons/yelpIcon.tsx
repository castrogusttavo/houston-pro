import React from 'react'
import { Icon, IconProps } from '../Icon'

export function yelpIcon({ iconName = "yelp", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}