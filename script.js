// Array of items containing programming languages, frameworks, and technologies
// Each item has a name and description that can be searched
const items = [
  {
    name: "JavaScript",
    description: "Popular scripting language for web development",
  },
  {
    name: "Python",
    description: "Versatile language for data science and web apps",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "Vue.js",
    description: "Progressive framework for building UIs",
  },
  {
    name: "Angular",
    description: "Platform for building web applications",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome V8 engine",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript",
  },
  {
    name: "CSS",
    description: "Style sheet language for web design",
  },
  {
    name: "HTML",
    description: "Standard markup language for web pages",
  },
  {
    name: "SQL",
    description: "Language for managing relational databases",
  },
  {
    name: "MongoDB",
    description: "NoSQL database program",
  },
  {
    name: "Express.js",
    description: "Web application framework for Node.js",
  },
];

// DOM element references - these connect to HTML elements in the page
const searchInput = document.getElementById("searchInput"); // Input field where user types search query
const itemList = document.getElementById("itemList"); // Container to display filtered results
const resultsCount = document.getElementById("resultsCount"); // Element to show count of matching items
const clearBtn = document.getElementById("clearBtn"); // Button to clear the search input

/**
 * Highlights matching text in search results
 * @param {string} text - The original text to search within
 * @param {string} query - The search term to highlight
 * @returns {string} - HTML string with highlighted matches wrapped in <mark> tags
 */
function highlightMatch(text, query) {
  // If no query provided, return original text without highlighting
  if (!query) return text;

  // Create a regular expression to find all occurrences of the query (case-insensitive)
  // 'gi' flags: g = global (find all matches), i = case-insensitive
  const regex = new RegExp(query, "gi");

  // Replace all matches with the same text wrapped in <mark> tags for highlighting
  // $& represents the matched substring
  return text.replace(regex, "<mark>$&</mark>");
}

/**
 * Filters and displays items based on search query
 * @param {string} query - The search term entered by the user
 */
function filterItems(query) {
  // Convert query to lowercase for case-insensitive comparison
  const searchTerm = query.toLowerCase().trim();

  // Filter items array to find matches in name or description
  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  });

  // Update the results count display
  resultsCount.textContent = `${filteredItems.length} result${
    filteredItems.length !== 1 ? "s" : ""
  }`;

  // Clear previous results
  itemList.innerHTML = "";

  // Display each filtered item with highlighted matches
  filteredItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
            <h3>${highlightMatch(item.name, searchTerm)}</h3>
            <p>${highlightMatch(item.description, searchTerm)}</p>
        `;
    itemList.appendChild(itemDiv);
  });
}

// Event listener: Filter items as user types in the search input
searchInput.addEventListener("input", (e) => {
  filterItems(e.target.value);
});

// Event listener: Clear the search input and show all items when clear button is clicked
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterItems("");
});

// Initialize the display with all items when page loads
filterItems("");
