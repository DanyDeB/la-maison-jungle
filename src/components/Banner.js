import '../styles/Banner.css'

function Banner({ children }) {
    return (
        <div className="lmj-banner">{children}</div>
    )
}

export default Banner // don't need to use brackets when import in other file