const items = [{
    name: "JavaScript",
    description:"Popular scripting language for web development"
},
{
    name: "Python",
    description: "Versatile language for data science and web apps"
}, 
{
    name: "React",
    description: "JavaScript library for building user interfaces"
},
{name: "Vue.js", description: "Progessive framework for building UIs"},
{name: "Angular", description: "Platform for buliding web applications"},
{
    name: "Node.js",
    description: "JavaScript runtime built on Chrome V8 engine"
},
{name: "TypeScript", description: "Typed superset of javaScript"},
{name: "CSS", description: "Style sheet language for web design"},
{name: "HTML", description: "Standard markup language for web pages"},
{name: "SQL", description: "Language for managing relational database"},
{name: "MongoDB", description: "NoSQL database program"},
{name: "express.js", description: "Web application framework for Node.js"}
];

const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const resultsCount = document.getElementById("resultsCount");
const clearBtn = document.getElementById("clearBtn");

function highLightMatch(text, query) {
    // if no query provided, return original text without highlighting 
    if(!query) return text;

    // Create a regular expression to find all  occurrences of the query (case-insensitive)
    // 'gi' flags: g = global (find all matches), i = case-insensitive
    const regex = new RegExp(query,"gi");

    // Replace all matches with the same text wrapped in <mark> tags for highlighting
    // $& represents the matched substring
    return text.replace(regex, <mark>$&</mark>)
}

/**
 * Filters and displays items based on search query 
 * @param {string} query - The search term entered by the user 
 */
function filterItems(query) {
    //Convert query to lowercase for case insesitive comparison
    const searchTerm = query.toLocaleLowerCase().trim();

    //Filter items array to find the matches in the name or description
    const filteredItems = items.filter((item) => {
        return (
            item.name.toLocaleLowerCase().includes(searchTerm) || 
            item.description.toLocaleLowerCase().includes(searchTerm) 
        );
    });

    // updates the result count display
    resultsCount.textContent = `{fiteredItems.length}`
}