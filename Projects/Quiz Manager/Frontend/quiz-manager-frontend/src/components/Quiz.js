import Style from './Quiz.module.css';
function Quiz() {
    function handleAddClick() {
        console.log("Hello");
    }
    return (
        <div className={Style.outerContainer}>
            <div>
                <h3>Create Quiz</h3>
            </div>
            <div className={Style.innerContainer}>
                <div>
                    <label htmlFor="Question Number">Question No:</label>
                    <input type="number" id="Question Number" placeholder="Name" className={Style.input}></input>
                </div>
                <div>
                    <label htmlFor="Question">Qu</label>
                    <input type="text" id="Name" placeholder="Question" className={Style.input}></input>
                </div>
                <div>
                    <label htmlFor="Options"></label>
                    <input type="text" id="Password" placeholder="Options" className={Style.input}></input>
                </div>
            </div>
            <div>
                <button onClick={handleAddClick}>Add</button>
            </div>
        </div>
    )
};

export default Quiz;