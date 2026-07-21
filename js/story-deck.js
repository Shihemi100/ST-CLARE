const people = [
{
    name: "Mama Betty",
    role: "Founder",
    image: "images/about/mama-betty.jpg",
    story: "Mama Betty is the compassionate founder of Juba Rescue Centre and a lifelong humanitarian whose unwavering dedication to protecting vulnerable children transformed simple acts of kindness into a home that has changed hundreds of lives. Her belief that every child deserves love, dignity and a place to belong continues to inspire everyone at the centre."
},

{
    name: "Grace",
    role: "Child at the Juba Rescue Centre",
    image: "images/about/grace.jpg",
    story: "This is a underage girl, gave birth to a baby boy. The mother actually is not connected with the child, and she is now traumatized. She can not talk, neither want breastfeeding the child. We don't know where are her parent, she said, they're from Yambio, someone kidnapped her and brought her to Juba, for the seek of using her. When she got tired of that life, she decided to run to the bush. And then luckily someone got her and brought her a police station. The police contacted Mama Betty who brought her to the orphanage. Now she is staying at the centre."
},

{
    name: "Blessing",
    role: "Child at the Juba Rescue Centre",
    image: "images/about/james.jpg",
    story: "This baby girl was thrown in a dust bin with the umbilical cord, in Gudele residential area. Her name is Blessing."
},

{
    name: "Sarah and Mariam",
    role: "Children at the Juba Rescue Centre",
    image: "images/about/mary.jpg",
    story: "These are cute twin girls Sarah and Mariam. Their mother died when she was delivering, the incident happened in Upper Nile State. Their father remains unknown. These kids were taken to certain family, but the family could not manage to handle them. Therefore, the family informed the social welfare in Upper Nile State, to bring the children to Juba. Currently they are at St. Clare house for children in Juba South Sudan. Their health is Fine."
},

{
    name: "Gloria, Chan and Martin",
    role: "Children at the Juba Rescue Centre",
    image: "images/about/faith.jpg",
    story: "These are the twins Boy and girl, their mother died during the Civil war in Lake State in 2013. Their parent were shot and the father was shot on his private part and the bullet remained in his body for the period of Four months. but He has survived. But He decided to sell out the children because of his condition, He can not afford to provide food. Also He want to commit suicide by throwing himself to the river Nile, but He was rescued. One sister from Comboni house and Me Mama Betty have contributed some money to take him to the chines Hospital to remove the bullet. After the bullet was removed successfully He disappeared completely, and we don't know whether He is alive or dead. The children are now moving well with their studies. They're three, the twins names are Gloria Adit and Chan John and their elder brother is named Martin Mading."
},

{
    name: "Elda",
    role: "Child at the Juba Rescue Centre",
    image: "images/about/john.jpg",
    story: "This girl is named Elda , she is 12 years old, her mother died, and the father re-married. They were living in Terekeka County of Central Equatoria State. Her father and the step-mother decided to marry off Elda to a man. So she escaped, she reached Juba (150KM) with her brother, and they went to a police station and then to the Gender Base Violance department. The police called Juba Rescue Centre, and mama Betty reached out to them. They are now staying at the children's house and enrolled to school. They are only worried about their brother and sister who remained in Terekeka."
}
];

let current = 0;

const photo = document.getElementById("storyImage");
const name = document.getElementById("storyName");
const role = document.getElementById("storyRole");
const story = document.getElementById("storyText");

function loadPerson(){

    photo.src = people[current].image;

    name.textContent = people[current].name;

    role.textContent = people[current].role;

    story.textContent = people[current].story;

}

function nextStory(){

    current++;

    if(current >= people.length){

        current = 0;

    }

    loadPerson();

}

function previousStory(){

    current--;

    if(current < 0){

        current = people.length - 1;

    }

    loadPerson();

}

document.addEventListener("DOMContentLoaded", loadPerson);