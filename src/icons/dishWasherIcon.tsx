import React from 'react'
import { Icon, IconProps } from '../Icon'

export function dishWasherIcon({ iconName = "dish-washer", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}