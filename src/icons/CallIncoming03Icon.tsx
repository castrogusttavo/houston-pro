import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallIncoming03Icon({
  iconName = 'call-incoming-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
