// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ---

[Installation Instructions](#installation)

[Usage Information](#usage)

[License Info](#licenseInfo) need to make this included conditionally

[Contribution Guidelines](#contributing)

[Test Instructions](#testing)

[Contact Me with Questions](#contact)


---

<a id="installation"></a>
## Installation Instructions
${data.installation}

---

<a id="usage"></a>
## Usage Information
${data.usage}

---

<a id="licenseInfo"></a>
## License Information
* need to make this included conditionally

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

[${data.ghUserName}](${data.ghLink})

Or you can reach me directly at ${data.emailAddress}.

`;
}


module.exports = generateMarkdown;
