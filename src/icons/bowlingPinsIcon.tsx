import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bowlingPinsIcon({ iconName = "bowling-pins", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}