<template>
  <x-layout.with-sidebar>
    <div
      class="
        flex flex-col
        space-y-2
        md:flex-row
        lg:space-y-0
        items-center
        justify-between
        mb-4
      "
    >
      <div class="flex flex-col lg:flex-row items-center gap-4">
        <h1 class="font-bold text-2xl">My Plans</h1>
        <x-element.button label="New Plan" icon="fas fa-plus-circle" />
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-4">
        <x-input.select name="sort" id="sort">
          <option value="">Sort by</option>
          <option value="ca">Cost (Asc)</option>
          <option value="cd">Cost (Desc)</option>
          <option value="da">Date (Asc)</option>
          <option value="dd">Date (Desc)</option>
          <option value="ga"># Going (Asc)</option>
          <option value="gd"># Going (Desc)</option>
        </x-input.select>
        <x-input.text type="search" placeholder="Search for plans..." />
      </div>
    </div>
    <x-card.wrapper>
      <x-card.plan is-mine />
      <x-card.plan is-mine />
      <x-card.plan is-mine />
      <x-card.plan is-mine />
      <x-card.plan is-mine />
      <x-card.plan is-mine />
      <x-card.plan is-mine />
      <x-card.plan is-mine />
      <x-card.plan is-mine />
      <x-card.plan is-mine />
    </x-card.wrapper>
  </x-layout.with-sidebar>
</template>

<script>
import ButtonElement from '../components/elements/ButtonElement.vue'
import PlanCard from '../components/cards/PlanCard.vue'
import Wrapper from '../components/cards/Wrapper.vue'
import SelectInput from '../components/inputs/SelectInput.vue'
import TextInput from '../components/inputs/TextInput.vue'
import WithSidebarLayout from '../layouts/WithSidebarLayout.vue'

export default {
  name: 'MyPlansPage',
  components: {
    'x-element.button': ButtonElement,
    'x-card.plan': PlanCard,
    'x-card.wrapper': Wrapper,
    'x-input.select': SelectInput,
    'x-input.text': TextInput,
    'x-layout.with-sidebar': WithSidebarLayout
  }
}
</script>
