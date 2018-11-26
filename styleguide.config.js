const path = require("path");

module.exports = {
    title: 'eLIPSE Design System',
    styleguideDir: './docs',
    exampleMode: 'expand',
    usageMode: 'expand',
    pagePerSection: true,
    sections: [
        {
            name: 'INSTALLATION',
            content: 'README.md',
            sectionDepth: 1
        },
        {
            name: 'FOUNDATION STYLES',
            content: 'foundationStyles.md',
            components: 'src/components/_*/*.vue',
            sectionDepth: 2
        },
        {
            name: 'COMPONENTS',
            components: 'src/components/!(_*)/*.vue'   ,
            sectionDepth: 2 
        }
    ],
    theme: {
        color: {
            link: '#ffffff',
            linkHover: '#c8ffff'
        },
        fontFamily: {
            base: ["'Open Sans'", "Helvetica", "Arial", "sans-serif"]
        }
    },
    require: [
        path.join(__dirname, "styleguidist.scss")
    ]
}