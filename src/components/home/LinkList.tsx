import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { routes } from '../../router'

export const LinkList = defineComponent({
  render() {
    const linkListItem = routes.map(route => {
      if (route.path === '/') {
        // ルートパスは除外
        return
      }
      return (
        <li>
          <RouterLink
            to={route.path}
          >
            {route.path}
          </RouterLink>
        </li>
      )
    })

    return (
      <ul>
        {linkListItem}
      </ul>
    )
  }
})