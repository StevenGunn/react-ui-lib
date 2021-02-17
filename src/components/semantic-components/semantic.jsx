import React from 'react'
import {
  Checkbox,
  Grid,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import './semantic.css';

const SidebarExampleSidebar = (props) => {
  const [visible, setVisible] = React.useState(true)

  return (
    <div>
      <Grid columns={1}>
        <Grid.Column className='head' style={{marginTop: 10}}>
          <Checkbox
            checked={visible}
            label={{ children: <code>visible</code> }}
            onChange={(e, data) => setVisible(data.checked)}
            style={{padding: 0}}
          />
        </Grid.Column>
        <Grid.Column className='sidebar-semantic' style={{padding: 0}}>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='scale down'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width='thin'
              style={{backgroundColor: 'gray'}}
            >
              <Menu.Item>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Container>
                { props.children }
              </Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default SidebarExampleSidebar;