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
                    <label htmlFor="Question">Question</label>
                    <input type="text" id="Name" placeholder="Question" className={Style.input}></input>
                </div>
                <div>
                    <label htmlFor="Option 1">Options 1</label>
                    <input type="text" id="Password" placeholder="Options" className={Style.input}></input>
                </div>
                <div>
                    <label htmlFor="Option 2">Options 2</label>
                    <input type="text" id="Password" placeholder="Options" className={Style.input}></input>
                </div>
                <div>
                    <label htmlFor="Option 3">Options 3</label>
                    <input type="text" id="Password" placeholder="Options" className={Style.input}></input>
                </div>
                <div>
                    <label htmlFor="Option 4">Options 4</label>
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