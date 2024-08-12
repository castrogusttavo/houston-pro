import React from 'react'
import { Icon, IconProps } from '../Icon'

export function boundingBoxIcon({ iconName = "bounding-box", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}