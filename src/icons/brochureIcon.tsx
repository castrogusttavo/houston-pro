import React from 'react'
import { Icon, IconProps } from '../Icon'

export function brochureIcon({ iconName = "brochure", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}