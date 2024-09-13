const CookiesModal: React.FC<{ manageCookies: (accept: boolean) => void }> = ({ manageCookies }) => {

  return (
    <>
      <div className="cookies-overlay"></div>
      <div className="cookies-modal">
        <h3>We value your privacy</h3>
        <p>We use cookies in order to improve your experience when browsing our website.
          By pressing "Accept All", you consent in using our cookies.
        </p>
        <div className="cookies-consent">
          <button className="reject-btn" onClick={() => manageCookies(false)}>Reject All</button>
          <button className="accept-btn" onClick={() => manageCookies(true)}>Accept All</button>
        </div>
      </div>
    </>
  )
}

export default CookiesModal