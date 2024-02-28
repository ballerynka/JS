// company data

let companyName          = "CODEX"                          // string
let companyLegalName     = "CODEX ltd."
let companyContactPhone  = "+123456"
let companyActive        = true                           // boolean
let companyRating        = 4.5                            // number
let companySlogan        = "Coding with eXperience"



// camelCase
// snake_case

// alert(companyName)
// alert(companyLegalName)
// alert(companySlogan)

alert(
  "Brand:".padEnd(25) +
    companyName +
    "\n" +
    "Legal Name:".padEnd(20) +
    companyLegalName +
    "\n" +
    "Phone:".padEnd(25) +
    companyContactPhone +
    "\n\n" +
    "Slogan:".padEnd(24) +
    companySlogan
)
