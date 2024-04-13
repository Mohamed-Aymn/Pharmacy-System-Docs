import styles from "./styles.module.css"
import { useEffect, useState } from "react"

interface IDemonstrationProps {
    method: "Get" | "Post"
    url: string
}

export default function ApiDemonstraction({ method, url }: IDemonstrationProps) {

    const [isTriggered, setisTriggered] = useState(false)

    let state = false;
    let isDdd = false;
    let result: object;
    let logs: string[];
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
        logs = [
            "pharmacyService INF] Database: Medicine (Adol) fetched from database",
        ]
    } else if (url == "management.company/Medicines") {
        state = true;
        result = {
            "Message": "Adol is created successfully"
        }
        logs = [
            "managementService INF] Database: Medicine (Adol) is stored in database",
            "managementService INF] Event: new medicine created (Adol)",
            "managementService INF] Message: New Medicine created (Adol) event is sent to broker",
            "pharmacyService INF] Message: New Medicine created (Adol) event received from broker",
            "pharmacyService INF] Database: New Medicine (Adol) stored in database",
        ]
    }

    return (
        <div className={styles.body}>
            <div className={styles.upperPart} style={isTriggered ? { borderBottom: "none" } : null}>
                <div className={styles.upperLeft}>
                    <span className={styles.method}>{method}</span>
                    <span className={styles.url}>https://{url}</span>
                </div>
                <button className={styles.upperRight} disabled={!state || isTriggered} onClick={() => setisTriggered(true)}>
                    {isTriggered ? "Triggered" : "Trigger"}!
                </button>
            </div>

            {state && isTriggered ? (
                <div>
                    <div className={styles.lowerPart}>
                        {/* logger */}
                        <div className={styles.logger}>
                            <div className={styles.blockTitle}>Logs</div>
                            <LogsRender logs={logs}></LogsRender>
                        </div>

                        {/* result */}
                        <pre className={styles.result}>
                            <div className={styles.blockTitle}>Result</div>
                            <div>
                                {JSON.stringify(result, null, 2)}
                            </div>
                        </pre>
                    </div>

                    <div className={styles.closeBtnContainer}>
                        <button className={styles.closeBtn} onClick={() => setisTriggered(false)}>
                            Close
                        </button>
                    </div>
                </div>
            ) : (<></>)}

        </div>
    )
}

function LogsRender({ logs }: { logs: string[] }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < logs.length - 1) {
                setIndex(prevIndex => prevIndex + 1);
            }
        }, 700);

        return () => clearInterval(interval);
    }, [index, logs]);

    return (
        <div>
            {logs.slice(0, index + 1).map((log, i) => (
                <div style={{ marginBottom: "1em" }} key={i}>
                    {"["}01:36:06 {log}
                </div>
            ))}
        </div>
    );
}

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}