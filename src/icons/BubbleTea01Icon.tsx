import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleTea01Icon({
  iconName = 'bubble-tea01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
