import React from 'react'

function Task() {
    return (
        <div className='mt-4'>
            {/* This is the task bar */}

            <form className='container border'>
                <label for='inputTaskName' className='form-label'>Task Name</label>
                <input className='form-control' type='text' placeholder='Buy Apples' aria-label='Task Name'
                    id='inputTaskName' />

                <label for='inputTaskDescription' className='form-label'>Task Description</label>
                <input className='form-control' type='text' placeholder='Get apples from store' aria-label='Task Description'
                    id='inputTaskDescription' />

                <label for='inputTaskPriority' className='form-label'>Priority</label>
                <p><input type="radio" name="priority" id='highest' value="highest" /><label for="highest">Highest</label>
                </p>
                <p><input type="radio" name="priority" id="high" value="high" /><label for="high">High</label></p>
                <p><input type="radio" name="priority" id="low" value="low" /><label for="low">Low</label></p>
                <p><input type="radio" name="priority" id="lowest" value="lowest" /><label for="lowest">Lowest</label></p>

                <div className="text-center">
                    <button className="btn btn-primary" type="submit">Confirm</button>
                </div>
                <div className="text-center my-3">
                    <button className="btn btn-primary" type="">Cancel</button>
                </div>

            </form>






        </div>
    )
}

export default Task
