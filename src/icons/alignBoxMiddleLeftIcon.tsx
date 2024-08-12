import React from 'react'
import { Icon, IconProps } from '../Icon'

export function alignBoxMiddleLeftIcon({ iconName = "align-box-middle-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}