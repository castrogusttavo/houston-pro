import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageNotFound01Icon({
  iconName = 'image-not-found01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
