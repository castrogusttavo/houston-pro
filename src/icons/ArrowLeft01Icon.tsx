import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowLeft01Icon({
  iconName = 'arrow-left01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
