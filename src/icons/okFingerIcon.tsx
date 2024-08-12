import React from 'react'
import { Icon, IconProps } from '../Icon'

export function okFingerIcon({ iconName = "ok-finger", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}