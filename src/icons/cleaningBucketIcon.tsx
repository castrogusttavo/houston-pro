import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cleaningBucketIcon({ iconName = "cleaning-bucket", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}