import { Container, NavbarLandingpage } from "@/components";

function PrivacyPolicy() {
  const logFileDescription =
    "Weddingnesia follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the ";
  const cookieDescription = `Like any other website, Weddingnesia uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.`;
  const cookieDescription2 = `Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Weddingnesia, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.`;
  const thirdPartyDescription = `Weddingnesia's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. `;
  const thirdPartyDescription2 = `You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?`;
  
  return (
    <main>
      <Container>
        <NavbarLandingpage />
        <h1 className="font-semibold text-3xl text-center">Privacy Policy for Weddingnesia</h1>

        <p className="indent-8">
          At Weddingnesia, accessible from weddingnesia.id, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Weddingnesia and how we use it.
        </p>
        
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <h2 className="font-semibold text-2xl">Log Files</h2>

        <p className="indent-8">
          {logFileDescription}
          <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">
            Privacy Policy Generator
          </a>
          .
        </p>

        <h2 className="font-semibold text-2xl">Cookies and Web Beacons</h2>

        <p className="indent-8">{cookieDescription}</p>

        <p>
          For more general information on cookies, please read{" "}
          <a className="underline" href="https://www.privacypolicyonline.com/what-are-cookies/">
            the Cookies article from the Privacy Policy Generator
          </a>
          .
        </p>

        <h2 className="font-semibold text-2xl">Privacy Policies</h2>

        <p className="indent-8">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Weddingnesia. {cookieDescription2}
        </p>

        <p>
          Note that Weddingnesia has no access to or control over these cookies
          that are used by third-party advertisers.
        </p>

        <h2 className="font-semibold text-2xl">Third Party Privacy Policies</h2>

        <p className="indent-8">{thirdPartyDescription} {thirdPartyDescription2}</p>

        <h2 className="font-semibold text-2xl">Children{`'`} Information</h2>

        <p className="indent-8">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p className="indent-8">
          Weddingnesia does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>

        <h2 className="font-semibold text-2xl">Online Privacy Policy Only</h2>

        <p className="indent-8">
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Weddingnesia. This policy is not applicable
          to any information collected offline or via channels other than this
          website.
        </p>

        <h2 className="font-semibold text-2xl">Consent</h2>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </Container>
    </main>
  );
}

export default PrivacyPolicy;
