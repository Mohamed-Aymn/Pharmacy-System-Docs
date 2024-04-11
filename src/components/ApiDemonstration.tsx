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
    let result: object;
    if (url === "pharmacy.company/MedicinesSearch?isAllBranches=1&name=adol") {
        isDdd = true;
        state = true;
        result = [
            {
                "branchId": "6B29FC40-CA47-1067-B31D-00DD010662DA",
                "branchName": "Foo",
                "count": 32,
            },
            {

                "branchId": "7B29SC40-CA87-1067-B31D-00DD010662TA",
                "branchName": "Bar",
                "count": 28,
            }
        ];

    }
    if (url == "management.company/Medicines") {
        state = true;
        result = {
            "name": "John Doe",
            "age": 32,
            "email": "johndoe@example.com"
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.upperPart} style={isTriggered ? { borderBottom: "none" } : null}>
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
                    <div className={styles.lowerPart}>
                        {/* logger */}
                        <div className={styles.logger}>
                            <div className={styles.blockTitle}>Logs</div>
                            <div>content</div>
                        </div>

                        {/* result */}
                        <pre className={styles.result}>
                            <div className={styles.blockTitle}>Result</div>
                            <div>
                                {JSON.stringify(result, null, 2)}
                                {/* content */}
                            </div>
                        </pre>
                    </div>

                    <div className={styles.closeBtnContainer}>
                        <button className={styles.closeBtn} onClick={() => setisTriggered(false)}>
                            close
                        </button>
                    </div>
                </div>
            ) : (<></>)}

        </div>
    )
}