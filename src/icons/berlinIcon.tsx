import React from 'react'
import { Icon, IconProps } from '../Icon'

export function berlinIcon({ iconName = "berlin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}