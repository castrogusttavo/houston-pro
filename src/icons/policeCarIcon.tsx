import React from 'react'
import { Icon, IconProps } from '../Icon'

export function policeCarIcon({ iconName = "police-car", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}