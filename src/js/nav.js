const ops = document.querySelectorAll(".nav ul a")
ops.forEach((op) => {
    op.addEventListener("click", () => {
        op.style.background = "radial-gradient(78.22% 70.71% at 50% 50%, #E057F2 50%, #C522F2 100%)"
        op.style.color = "white"
    })
})
