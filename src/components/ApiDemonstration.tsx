import styles from "./styles.module.css"
import { useState } from "react"

interface IDemonstrationProps {
    method: "Get" | "Post"
    url: string
}

export default function ApiDemonstraction({ method, url }: IDemonstrationProps) {

    const [isTriggered, setisTriggered] = useState(false)

    let state = false;
    let isDdd = false;
    if (url === "pharmacy.company/MedicinesSearch?isAllBranches=1&name=adol") {
        isDdd = true;
        state = true;
    }
    if (url == "management.company/Medicines") {
        state = true;
    }

    return (
        <div className={styles.body}>
            <div className={styles.upperPart}>
                <div className={styles.upperLeft}>
                    <span className={styles.method}>{method}</span>
                    <span>https://{url}</span>
                </div>
                <button className={styles.upperRight} disabled={!state} onClick={() => setisTriggered(true)}>
                    {isTriggered ? "Retrigger" : "Trigger"}!
                </button>
            </div>

            {state && isTriggered ? (
                <div>
                    {/* logger */}
                    <div>
                        logger
                    </div>

                    {/* result */}
                    <div>
                        result
                    </div>
                    <button onClick={() => setisTriggered(false)}>
                        close
                    </button>
                </div>
            ) : (<></>)}

        </div>
    )
}