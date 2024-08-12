import React from 'react'
import { Icon, IconProps } from '../Icon'

export function birthdayCakeIcon({ iconName = "birthday-cake", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}