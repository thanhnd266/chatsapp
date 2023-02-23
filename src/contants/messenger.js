
export const chatAdditionalInfo = [
    {
        id: "customize-chat",
        title: "Customize chat",
        accordion: [
            {
                icon: (<i className="fa-solid fa-magnifying-glass"></i>),
                feature: "Search",
            }
        ]
    },
    {
        id: "media",
        title: "Media, files and links",
        accordion: [
            {
                icon: (<i className="fa-solid fa-images"></i>),
                feature: "Media",
            },
            {
                icon: (<i className="fa-solid fa-file-lines"></i> ),
                feature: "Files",
            },
            {
                icon: (<i className="fa-solid fa-link"></i>),
                feature: "Links",
            },
        ]
    },
    {
        id: "privacy-support",
        title: "Privacy & support",
        accordion: [
            {
                icon: (<i className="fa-solid fa-bell"></i>),
                feature: "Mute notifications",
            },
            {
                icon: (<i className="fa-solid fa-user-lock"></i>),
                feature: "Block",
            },
            {
                icon: ( <i className="fa-solid fa-triangle-exclamation"></i>),
                feature: "Report",
            },
        ]
    },
];