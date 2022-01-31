import React, { FC } from 'react'

import {
  createStyles,
  withStyles,
  Switch as MUISwitch,
  Theme,
} from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { Size } from '@acter/lib/constants'

const { SMALL, MEDIUM } = Size

export interface SwitchProps {
  name: string
  checked: boolean
  onChange: (switchStatus: boolean) => void
  size?: Size
  updating?: boolean
  value?: boolean
}

export const Switch: FC<SwitchProps> = ({
  name,
  checked = false,
  onChange,
  size = MEDIUM,
  updating = false,
  value,
}) => {
  const handleChange = () => onChange(!checked)
  const StyledSwitch = getSwitch(size)
  return updating ? (
    <LoadingSpinner size={18} thickness={4} />
  ) : (
    <StyledSwitch
      checked={checked}
      onChange={handleChange}
      name={name}
      value={value}
    />
  )
}

const getSwitch = (size) => {
  switch (size) {
    case SMALL:
      return SmallSwitch
    case MEDIUM:
      return MediumSwitch
    default:
      return MediumSwitch
  }
}

const MediumSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 40,
      height: 22,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 3,
      color: theme.colors.grey.main,
      '&$checked': {
        transform: 'translateX(18px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 16,
      height: 16,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.colors.grey.main}`,
      borderRadius: 26 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(MUISwitch)

const SmallSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 20,
      height: 12,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.colors.grey.dark,
      '&$checked': {
        transform: 'translateX(8px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 8,
      height: 8,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.colors.grey.dark}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(MUISwitch)
