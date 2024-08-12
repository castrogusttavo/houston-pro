import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Building01Icon({
  iconName = 'building01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
