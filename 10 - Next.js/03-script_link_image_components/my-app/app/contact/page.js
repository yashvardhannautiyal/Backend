import React from 'react'
import Script from 'next/script';

function contact() {
  return (
    <div>
      {/* Script tag is used to run a particular javascript on a particular page */}
      <Script>
        {`alert("Welcome to contact page");`}
      </Script>
      this is contact
    </div>
  )
}

export default contact

//it is used to change the title of the page
export const metadata = {
  title: "Contact",
  description: "Server Components",
};

