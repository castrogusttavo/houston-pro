import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageDone01Icon({
  iconName = 'image-done01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
