{

    const init = () => {
        document.querySelector(".answer").addEventListener("input", () => {
            const $value = document.querySelector(".answer").value;
            if ($value === "2") {
                document.querySelector(".result").classList.add('correct');
            }
        });
    }

    init();

}