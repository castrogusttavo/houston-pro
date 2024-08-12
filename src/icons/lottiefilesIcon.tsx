import React from 'react'
import { Icon, IconProps } from '../Icon'

export function lottiefilesIcon({ iconName = "lottiefiles", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}