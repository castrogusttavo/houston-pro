import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Maximize03Icon({
  iconName = 'maximize03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
