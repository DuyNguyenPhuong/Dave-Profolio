// Global Variables for Portfolio Content
// Import this file in your HTML to use these variables

const portfolioVariables = {
    // Home Page
    home: {
        title: "Dave Nguyen | Home",
        heading: "Hi, I'm Dave Nguyen",
        subtitle: "A passionate software engineer and product builder",
        description: "Welcome to my portfolio website"
    },
    
    // Navigation
    navigation: {
        home: "Home",
        experience: "Experience",
        education: "Education",
        projects: "Startups",
        research: "Research",
        techstack: "Tech Stack",
        design: "Design"
    },
    
    // Meta Information
    meta: {
        description: "This project serves free and beautiful portfolio template for everyone. Anyone can showcase their work including moocs, education, projects, experience,etc. to the world.",
        keywords: "free portfolio template, portfolio template, portfolio website template",
        author: "Dave Nguyen",
        siteUrl: "https://your-site.com"
    },
    
    // Add more sections as needed
    education: {
        title: "Dave Nguyen | Education"
    },
    
    experience: {
        title: "Dave Nguyen | Experience"
    },
    
    projects: {
        title: "Dave Nguyen | Startups"
    }
};

// Function to update page title
function setPageTitle(titleKey) {
    const title = portfolioVariables[titleKey]?.title || "Dave Nguyen";
    document.title = title;
}

// Function to update meta tags
function updateMetaTags() {
    const descElement = document.querySelector('meta[name="description"]');
    if (descElement) {
        descElement.setAttribute('content', portfolioVariables.meta.description);
    }
}
