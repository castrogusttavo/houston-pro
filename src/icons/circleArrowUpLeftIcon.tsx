import React from 'react'
import { Icon, IconProps } from '../Icon'

export function circleArrowUpLeftIcon({ iconName = "circle-arrow-up-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}