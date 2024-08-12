import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TinderSquareIcon({
  iconName = 'tinder-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
