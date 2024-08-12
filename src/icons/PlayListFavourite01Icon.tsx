import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlayListFavourite01Icon({
  iconName = 'play-list-favourite01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
