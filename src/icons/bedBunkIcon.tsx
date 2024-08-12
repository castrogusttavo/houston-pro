import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bedBunkIcon({ iconName = "bed-bunk", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}