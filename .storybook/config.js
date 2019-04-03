import { configure } from '@storybook/react'
// import '../ui/global'
// automatically import all files ending in *.stories.js
const stories = [
  'Layout',
  'Text',
  'Button',
  'Circle',
  'Badge',
  'Avatar',
  'Toggle',
  'Popup',
  'Overlay',
  'Modal',
  'Checkbox',
  'Close',
  'Icons',
  'Input'
]
function loadStories() {
  stories.forEach(story => require('../ui/components/' + story + '/story.js'))
}

configure(loadStories, module)
