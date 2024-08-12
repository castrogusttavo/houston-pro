import React from 'react'
import { Icon, IconProps } from '../Icon'

export function paragraphIcon({ iconName = "paragraph", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}