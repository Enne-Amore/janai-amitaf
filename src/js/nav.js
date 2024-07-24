const ops = document.querySelectorAll(".nav ul a")
ops.forEach((op) => {
    op.addEventListener("click", () => {
        op.style.backgroundColor = "#E057F2"
        op.style.color = "white"
    })
})
