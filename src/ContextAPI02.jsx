// Components
import React from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./state/Theme";

const ContextAPI02 = () => {
    const [themeMode, setThemeMode] = React.useState("light");

    const lightModeHandle = () => {
        setThemeMode("light")
    }

    const darkModeHandle = () => {
        setThemeMode("dark")
    }

    React.useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark")
        document.querySelector("html").classList.add(themeMode)
    }, [themeMode])

    return (
        <ThemeProvider value={{ lightModeHandle, darkModeHandle }}>
            <section>
                <div className="dark:bg-slate-800 h-screen">
                    <div className="container">
                        <div className="w-max ml-auto py-10">
                            <ThemeBtn />
                        </div>
                        <div className="grid grid-cols-3 gap-x-5">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    )
}

export default ContextAPI02;