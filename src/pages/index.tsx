import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../layout/default"

import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout doTransparency={true}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          {/*<div class="imageBg"></div>*/}
          <div className={styles.textContainer}>
            <span className={styles.nameShadow}>
              <span className={styles.preName}>Greetings from...</span>
              <span className={styles.nameText}>Kanaljäger</span>
              <span className={styles.postName}>Website Coming Soon</span>
            </span>
            <span className={styles.name}>
              <span className={styles.preName}>Greetings from...</span>
              <span className={styles.nameText}>Kanaljäger</span>
              <span className={styles.postName}>Website Coming Soon</span>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>KanalJaeger.net</title>
