import { configure } from '@storybook/react'
import '../ui/global'
// automatically import all files ending in *.stories.js
function loadStories () {
  require('../ui/packages/Base/story.js')
  require('../ui/packages/Layout/story.js')
  require('../ui/packages/Text/story.js')
  require('../ui/packages/Button/story.js')
  require('../ui/packages/Circle/story.js')
  require('../ui/packages/Badge/story.js')
  require('../ui/packages/Avatar/story.js')
  require('../ui/packages/Close/story.js')
  require('../ui/packages/Icons/story.js')
}

configure(loadStories, module)
