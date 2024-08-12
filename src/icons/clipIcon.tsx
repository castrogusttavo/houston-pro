import React from 'react'
import { Icon, IconProps } from '../Icon'

export function clipIcon({ iconName = "clip", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}