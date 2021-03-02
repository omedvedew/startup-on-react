const worksItems = [
    {
        id: "w-i-1",
        image: "works-item w-i-1",
        title: "Hair Dresser",
        category: "branding",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.",
    },
    {
        id: "w-i-2",
        image: "works-item w-i-2",
        title: "Peugeon Present",
        category: "strategy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.",
    },
    {
        id: "w-i-3",
        image: "works-item w-i-3",
        title: "Planning",
        category: "strategy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.",
    },
    {
        id: "w-i-4",
        image: "works-item w-i-4",
        title: "Photorealistic Design",
        category: "design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.",
    },
    {
        id: "w-i-5",
        image: "works-item w-i-5",
        title: "Mobility",
        category: "development",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.",
    },
    {
        id: "w-i-6",
        image: "works-item w-i-6",
        title: "Empty List",
        category: "branding",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.",
    },
    {
        id: "w-i-7",
        image: "works-item w-i-7",
        title: "Stationery",
        category: "design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.",
    },
    {
        id: "w-i-8",
        image: "works-item w-i-8",
        title: "Events & Entertainment",
        category: "strategy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate ad nemo eligendi explicabo odio odit, natus fugiat illo totam? Saepe non explicabo magni ducimus adipisci? Nulla dicta sequi autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit maiores modi sunt culpa quaerat ea, architecto, natus cum minima doloribus quis? Odit dicta saepe laborum dolor cupiditate dolorum sapiente.",
    }

]

export const getWorksObj = array => {
    return array.reduce((obj, work) => ({
        ...obj,
        [work.id]: work
    }), {})
};

export default worksItems;