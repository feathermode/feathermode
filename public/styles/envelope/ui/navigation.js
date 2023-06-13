import { html } from "./envelope/templating/envelope.js";

export default function navigation(data, options) {
    /*
        data: the data object contains information on relevant navigation links and links associated with them as well as what each link should be labelled as and where they go to.

        const data = {
            links: [
                {nav_id: "icon", title: "icon", image_location: '/assets/icon_light.svg', destination: "/"},
                {nav_id: "main", title: "About", destination: "/about"}
            ]
        }

        options: the options object contains information that dictates the look and functionality of the navigation

        const options = {
            template: 'standard',
            classes:'flex flex-column'
            data_attributes: ''
        }

        returns hydrated html
    */


    return html`
    <nav class="${options.classes}">

    </nav>
    `
}