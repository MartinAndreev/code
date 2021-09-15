import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import {
  BasicsStep,
  BasicsStepValues,
} from '@acter/components/activity/form/steps/basics'
import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Activity/Form/Steps/Basics',
  component: BasicsStep,
  args: {
    acters: [ExampleActer],
  },
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        activityTypeId: '',
        organiserActerId: '',
        isOnline: false,
        isAllDay: false,
        startDate: new Date(),
        startTime: new Date(),
        endDate: new Date(),
        endTime: new Date(),
      } as BasicsStepValues,
    },
  },
} as Meta

const Template: Story = (args) => (
  <div style={{ width: 600 }}>
    <BasicsStep {...args} />
  </div>
)

export const New = Template.bind({})
