import React, { FC } from 'react'
import { DAY_MONTH_FORMAT_SHORT, TIME_FORMAT_SHORT } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { ActivityTileProps } from '@acter/components/activity/tile'

type DateTimeInfoProps = ActivityTileProps

export const DateTimeInfo: FC<DateTimeInfoProps> = ({ activity }) => {
  const classes = useStyles()

  const startDay = parseAndFormat(activity.startAt, DAY_MONTH_FORMAT_SHORT)
  const endDay = parseAndFormat(activity.endAt, DAY_MONTH_FORMAT_SHORT)

  const startTime = parseAndFormat(activity.startAt, TIME_FORMAT_SHORT)
  const endTime = parseAndFormat(activity.endAt, TIME_FORMAT_SHORT)

  return (
    <Box className={classes.root}>
      <Box className={classes.startSection}>
        <Typography className={classes.day} variant="h5">
          {startDay}
        </Typography>

        {!activity.isAllDay && (
          <Typography variant="caption">{startTime}</Typography>
        )}
      </Box>

      {(startDay !== endDay || !activity.isAllDay) && '-'}

      <Box className={classes.endSection}>
        {startDay !== endDay && (
          <Typography className={classes.day} variant="h5">
            {endDay}
          </Typography>
        )}

        {!activity.isAllDay && (
          <Typography variant="caption">{endTime}</Typography>
        )}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(0.9),
      margin: 'auto',
      width: '90%',
      height: 12,
      color: theme.palette.secondary.main,
    },
    startSection: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 3,
    },
    endSection: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 3,
    },
    day: {
      fontSize: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightBold,
      marginRight: 3,
      marginLeft: 3,
    },
  })
)
