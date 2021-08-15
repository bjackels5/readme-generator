const licenseObjs = [
    {
        name: "MIT",
        badge: "MIT",
        descUrl: "mit",
        shortDesc: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    },
    {
        name: "GNU General Public",
        badge: "GNU%20General%20Public",
        descUrl: "gpl-3.0",
        shortDesc: "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
    },
    {
        name: "Mozilla Public",
        badge: "Mozilla%20Pyblic",
        descUrl: "mpl-2.0",
        shortDesc: "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
    },
    {
        name: "GNU Affero General Public",
        badge: "GNU%20Affero",
        descUrl: "agpl-3.0",
        shortDesc: "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available."
    },
    {
        name: "The Unlicense",
        badge: "Unlicensed",
        descUrl: "unlicense",
        shortDesc: "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code."
    },
    {
        name: "The Apache",
        badge: "Apache",
        descUrl: "apache-2.0",
        shortDesc: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    }
];

const getLicenseBadge = license => licenseObjs.filter(item => item.name === license)[0].badge;
const getLicenseDescUrl = license => licenseObjs.filter(item => item.name === license)[0].descUrl;
const getLicenseShortDesc = license => licenseObjs.filter(item => item.name === license)[0].shortDesc;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "No License") {
        return '';
    }

    return `
![${license}](https://img.shields.io/static/v1?label=license&message=${getLicenseBadge(license)}&color=blueviolet)
        `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "No License") {
        return '';
    }

    return `
* [License Info](#licenseInfo)
        `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == "No License") {
        return '';
    }

    return `
---

<a id="licenseInfo"></a>
## License Information
### ${license}
${getLicenseShortDesc(license)}

For full details on this license, please go to: https://choosealicense.com/licenses/${getLicenseDescUrl(license)}/.
        `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ${data.description}
    ${renderLicenseBadge(data.license)}

  ---

* [Installation Instructions](#installation)

* [Usage Information](#usage)
${renderLicenseLink(data.license)}
* [Contribution Guidelines](#contributing)

* [Test Instructions](#testing)

* [Contact Me with Questions](#contact)


---

<a id="installation"></a>
## Installation Instructions
${data.installation}

---

<a id="usage"></a>
## Usage Information
${data.usage}

${renderLicenseSection(data.license)}

---

<a id="contributing"></a>
## Contribution Guidelines
${data.contributing}

---

<a id="testing"></a>
## Test Instructions
${data.testing}

---

<a id="contact"></a>
## Contact Me with Questions
If you have any questions, you can contact me on GitHub:

https://github.com/${data.ghUserName}

Or you can reach me directly at ${data.emailAddress}.

`;
}


module.exports = generateMarkdown;
