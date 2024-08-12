import React from 'react'
import { Icon, IconProps } from '../Icon'

export function longSleeveShirtIcon({ iconName = "long-sleeve-shirt", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}