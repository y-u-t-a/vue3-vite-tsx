import { defineComponent } from 'vue'

import { PageTemplate } from '../components/template/PageTemplate'

export type User = {
  name: string,
  birthDay: Date,
}

export const Users = defineComponent({
  render() {
    const pageName = "ユーザー一覧"
    return (
      <PageTemplate title={pageName}>
        <h1>{pageName}</h1>
      </PageTemplate>
    )
  }
})
