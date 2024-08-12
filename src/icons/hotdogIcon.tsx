import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hotdogIcon({ iconName = "hotdog", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}