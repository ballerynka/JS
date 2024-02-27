// company data

companyName          = "CODEX"                          // string
companyLegalName     = "CODEX ltd."
companyContactPhone  = "+123456"
companyActive        = true                           // boolean
companyRating        = 4.5                            // number
companySlogan        = "Coding with eXperience"



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
