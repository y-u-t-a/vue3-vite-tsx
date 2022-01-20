import { defineComponent, renderSlot } from 'vue'

export const PageTemplate = defineComponent({
  props: {
    title: {
      type: String,
      default: "Vite App"
    }
  },
  setup(props, context) {
    document.title = props.title
    return {
      slots: context.slots
    }
  },
  render() {
    return (
      <>
        <header>
          <p>ヘッダー</p>
        </header>
        <div>
          { renderSlot(this.slots, "default") }
        </div>
        <footer>
          <hr />
          <p>フッター</p>
        </footer>
      </>
    )
  }
})
