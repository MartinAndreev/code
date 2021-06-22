import React, { FC } from 'react'
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'
import { Activity } from '@schema'
import { InfoSection } from 'src/components/activity/tile/info-section'
import { ImageSection } from 'src/components/activity/tile/image-section'
import { ActivityType } from 'src/components/activity/tile/activity-type'

export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  if (!activity.id) return null
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <ImageSection activity={activity} />

      <InfoSection activity={activity} />

      <ActivityType activity={activity} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      width: 210,
      height: 218,
      position: 'relative',
    },
  })
)
