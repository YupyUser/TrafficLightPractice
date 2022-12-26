const lights = {
    green:'green',
    yellow:'yellow',
    red:'red',

}
const classes_by_lights = {
    [lights.green]: 'traffic-light_green',
    [lights.yellow]: 'traffic-light_yellow',
    [lights.red]: 'traffic-light_red',
}

const lights_queue = {
    [lights.green]:lights.yellow,
    [lights.yellow]:lights.red,
    [lights.red]:lights.green
}

let currentLight = lights.green;

function switchLight (node) {
    const currentClass = classes_by_lights[currentLight];
    const nextLight = lights_queue[currentLight];
    const nextClass = classes_by_lights[nextLight];

    currentLight = lights_queue[currentLight];

    node.classList.replace(currentClass,nextClass);
}
function initLight (node) {
    node.classList.add(classes_by_lights[currentLight])
}
const btnNode = document.querySelector('.js-switcher');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

btnNode.addEventListener('click',()=>{
    switchLight(trafficLightNode);
})