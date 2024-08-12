import React from 'react'
import { Icon, IconProps } from '../Icon'

export function flushedIcon({ iconName = "flushed", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}