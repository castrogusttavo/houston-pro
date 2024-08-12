import React from 'react'
import { Icon, IconProps } from '../Icon'

export function paintBucketIcon({ iconName = "paint-bucket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}