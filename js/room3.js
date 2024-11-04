{

    const $winner = document.querySelector('.winner');
    //const $loser = document.querySelector('.loser');

    const init = () => {
        $winner.addEventListener("mouseover", () => {
            document.querySelector(".box").classList.add('hidden');
            document.querySelector(".cat").classList.remove('hidden');
        });

        // $loser.addEventListener("mouseover", () => {
        //     document.querySelector(".loser").classList.add('wrong');

        // });
    }

    init();

}

