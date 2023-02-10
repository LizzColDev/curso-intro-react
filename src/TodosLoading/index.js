import React from "react";
import './TodosLoading.css'

function TodosLoading(){
    return (
        <React.Fragment>
            <section className="Loading-Container">
                <span className="Loading-Icon-Completed"/>
                <p className="Loading-Todo-Item" > Charging TODOs... </p>
                <span className="Loading-Icon-Deleted" />
            </section>

            <section className="Loading-Container">
                <span className="Loading-Icon-Completed"/>
                <p className="Loading-Todo-Item" > Charging TODOs... </p>
                <span className="Loading-Icon-Deleted" />
            </section>
            <section className="Loading-Container">
                <span className="Loading-Icon-Completed"/>
                <p className="Loading-Todo-Item" > Charging TODOs... </p>
                <span className="Loading-Icon-Deleted" />
            </section>
            <section className="Loading-Container">
                <span className="Loading-Icon-Completed"/>
                <p className="Loading-Todo-Item" > Charging TODOs... </p>
                <span className="Loading-Icon-Deleted" />
            </section>
        </React.Fragment>
    
    )
}

export { TodosLoading };