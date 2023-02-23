
import React from "react";

export function Footer(props: { className: string }) {
    return (
        <div className={props.className}>
            <p className="text-center p-10 md:text-2xl lg:text-xs">
                Notice something wrong or want to add information? please submit an issue <a className={"font-medium text-blue-600 dark:text-blue-500 hover:underline"} href={"https://github.com/Grover-c13/digitalnomadvisamap"} >HERE</a>
                <br />
                <span className={"font-bold"}>© {new Date().getFullYear()} nomadvisa.world</span>
                <br />
                The information contained on this website is for general informational purposes only. It is not legal, financial, medical or any other professional advice. We do not provide any warranty or guarantee as to the accuracy, completeness, reliability, suitability or availability of the information contained on this website. The use of any information on this website is solely at your own risk.
            </p>
        </div>
    );
}