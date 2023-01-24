import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="0" y="410" rx="10" ry="10" width="90" height="30" />
    <rect x="110" y="400" rx="20" ry="20" width="150" height="40" />
    <rect x="0" y="265" rx="10" ry="10" width="255" height="30" />
    <rect x="0" y="312" rx="10" ry="10" width="255" height="70" />
  </ContentLoader>
)

export default Skeleton