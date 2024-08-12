import React from 'react'
import { Icon, IconProps } from '../Icon'

export function carouselVerticalIcon({ iconName = "carousel-vertical", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}