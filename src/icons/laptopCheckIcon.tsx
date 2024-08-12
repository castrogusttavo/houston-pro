import React from 'react'
import { Icon, IconProps } from '../Icon'

export function laptopCheckIcon({ iconName = "laptop-check", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}