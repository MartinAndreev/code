import React from 'react'

import { Interest } from '@acter/components/interests/interest'
import { render } from '@acter/lib/test-utils'
import { ExampleInterest } from '@acter/schema/fixtures/interest/example-interests'

describe('[Interest]', () => {
  it('should render Tag interest with correct info and styles', () => {
    const { container } = render(
      <Interest
        interest={ExampleInterest}
        type={ExampleInterest.InterestType.name}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
