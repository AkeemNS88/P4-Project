import React from "react";

function TypeWriter() {

    const messageArray = ["This is doing the thingy"];
    var textPosition = 0
    var speed = 100


    function write() {
        document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

        if (textPosition++ != messageArray[0].length)
            setTimeout(write, speed);
    }

    window.addEventListener("load", write())

    return (
        <div>

            <div>

                <p id="message"> </p>
            </div>

        </div>
    )
}

export default TypeWriter