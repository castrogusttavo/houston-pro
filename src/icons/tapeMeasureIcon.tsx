import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tapeMeasureIcon({ iconName = "tape-measure", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}