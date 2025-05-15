function PubForm(){
    return(
        <div className="pub-container">
            <h1>Create pub</h1>
            <form action="">
                <div className="title">
                    <label htmlFor="">Title</label>
                    <input type="text" />
                </div>
                <div className="content">
                    <label htmlFor="">Content</label>
                    <textarea name="" id=""></textarea>
                </div>
                <button type="submit">Publish</button>
            </form>
        </div>
    );
}

export default PubForm;