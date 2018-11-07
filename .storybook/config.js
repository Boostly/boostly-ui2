import { configure } from '@storybook/react'
import '../ui/global'
// automatically import all files ending in *.stories.js
const stories = [
  'Base',
  'Layout',
  'Text',
  'Button',
  'Circle',
  'Badge',
  'Avatar',
  'Close',
  'Icons',
  'Toggle',
  'Popup',
  'Overlay',
  'Modal',
  'Checkbox'
]
function loadStories() {
  stories.forEach(story => require('../ui/components/' + story + '/story.js'))
}

configure(loadStories, module)
