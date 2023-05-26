export default function useHighscore(){

    const highscore = localStorage.getItem('hs') || 0;
    function setHighscore(score){
        if(score > highscore){
            localStorage.setItem('hs',score);
        }
    }

    return {setHighscore,highscore}
}