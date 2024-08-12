import React from 'react'
import { Icon, IconProps } from '../Icon'

export function previousIcon({ iconName = "previous", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}