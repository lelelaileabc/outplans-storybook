require('../styles/main.css');

import EventPage from './EventPage.vue';

export default {
    title: 'Pages/EventPage',
    component: EventPage,
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen'
    }
};

const Template = (args) => ({
    components: { EventPage },
    setup() {
        return { args };
    },
    template: '<event-page v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
};
