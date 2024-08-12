import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MagicWand03Icon({
  iconName = 'magic-wand03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
