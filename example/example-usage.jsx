'use strict'

import React from 'react'
import { TheMenu, TheDropdownMenu, TheMenuStyle } from 'the-menu'
import { TheRouter } from 'the-router'

class ExampleComponent extends React.PureComponent {
  render () {
    const s = this
    const ExampleMenu = ({grid = false}) => (
      <TheMenu grid={grid}>
        <TheMenu.Item icon='fa fa-support' text='Help' to='/help'/>
        <TheMenu.Item icon='fa fa-info-circle' text='About' to='/about'/>
        <TheMenu.Item icon='fa fa-sign-out' text='Logout' onClick={() => console.log('logout!')}/>
        <TheMenu.Item icon='fa fa-sun-o' text='Foo'/>
        <TheMenu.Item icon='fa fa-sun-o' text='Bar'/>
        <TheMenu.Item icon='fa fa-sun-o' text='Baz'/>
      </TheMenu>
    )
    return (
      <div>
        <TheRouter.Hash>
          <TheMenuStyle/>

          <h3>Default Menu</h3>
          <div>
            <ExampleMenu/>
          </div>

          <hr/>

          <h3>Grid Menu</h3>
          <div>
            <ExampleMenu grid/>
          </div>

          <hr/>

          <h3>Drop Down</h3>

          <TheDropdownMenu label='Try me!'
          >
            <TheDropdownMenu.Item to='foo'>foo</TheDropdownMenu.Item>
            <TheDropdownMenu.Item to='bar'>bar</TheDropdownMenu.Item>
            <TheDropdownMenu.Item to='baz'>baz</TheDropdownMenu.Item>
            <TheDropdownMenu.Item to='quz'>quz</TheDropdownMenu.Item>
            <TheDropdownMenu.Item>1</TheDropdownMenu.Item>
            <TheDropdownMenu.Item>2</TheDropdownMenu.Item>
          </TheDropdownMenu>


          <br/>
          <br/>
          <br/>
          <br/>
        </TheRouter.Hash>
      </div>
    )
  }
}

export default ExampleComponent
