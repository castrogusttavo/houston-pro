import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageFavourite01Icon({
  iconName = 'message-favourite01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
