import React from 'react'
import { Icon, IconProps } from '../Icon'

export function webflowIcon({ iconName = "webflow", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}