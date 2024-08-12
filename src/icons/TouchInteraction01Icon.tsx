import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TouchInteraction01Icon({
  iconName = 'touch-interaction01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
