import React from 'react'
import { Icon, IconProps } from '../Icon'

export function silenceIcon({ iconName = "silence", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}