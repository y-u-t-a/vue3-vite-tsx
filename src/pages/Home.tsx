import { defineComponent } from 'vue'

import { LinkList } from '../components/home/LinkList'
import { PageTemplate } from '../components/template/PageTemplate'

export const Home = defineComponent({
  render() {
    const pageName = 'ホームページ'
    return (
      <PageTemplate title={pageName}>
        <h1>{pageName}</h1>
        <LinkList />
      </PageTemplate>
    )
  }
})
