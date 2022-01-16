import { defineComponent } from 'vue'

import { PageTemplate } from '../components/template/PageTemplate'

export const About = defineComponent({
  render() {
    return (
      <PageTemplate>
        <h1>About</h1>
      </PageTemplate>
    )
  }
})