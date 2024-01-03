import {useNavigate, useRouteError} from "react-router-dom";
import React, {useEffect} from "react";

export default function ErrorPage(): React.FC {
    // 如果输入了错误页面自动返回
    // const navTo = useNavigate()
    // useEffect(()=>{
    //     navTo("/welcome/1")
    // }, [])
    // return null

    const error: any = useRouteError()
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
