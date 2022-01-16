import { defineComponent, renderSlot } from 'vue'

export const PageTemplate = defineComponent({
  props: {
    title: {
      type: String,
      default: "Vite App"
    }
  },
  setup(props) {
    document.title = props.title
  },
  render() {
    return (
      <>
        {
          // 動きはするけどしっくりきてない
          renderSlot(this.$slots, "default")
        }
      </>
    )
  }
})
